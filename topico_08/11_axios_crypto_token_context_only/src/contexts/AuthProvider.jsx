/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useEffect } from "react"
import axiosClient from "../utils/axios-client";

const CURRENT_USER = window.crypto.randomUUID();
const SECRET = { key: import.meta.env.VITE_SECRET, iv: null }
window.crypto.subtle.generateKey(
    {
        name: "AES-GCM",
        length: 256,
    },
    true,
    ["encrypt", "decrypt"],
).then(k => SECRET.key = k);


//https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/encrypt
function encryptText(text) {
    const enc = new TextEncoder();
    const encoded = enc.encode(text);
    let iv = window.crypto.getRandomValues(new Uint8Array(12));
    SECRET.iv = iv;
    return window.crypto.subtle.encrypt(
        { name: "AES-GCM", iv: iv },
        SECRET.key,
        encoded,
    );
}

// https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/decrypt
function decryptText(cipherText) {
    return window.crypto.subtle.decrypt({ name: "AES-GCM", iv: SECRET.iv }, SECRET.key, cipherText);
}


const verifyUser = async () => {
    try {
        const { data } = await axiosClient.get('/user')
        if (!data?.name) throw new Error("Erro ao recuperar usuário!");
        return data;
    } catch (error) {
        const { response } = error;
        response?.status === 401 && clearAuthStorages();
        console.error('Error:', error);
        return null
    }
}

const clearAuthStorages = () => {
    console.log('clear')
    localStorage.removeItem(CURRENT_USER);
}

const AuthContext = createContext({
    user: {},
    token: null,
    setUser: () => { },
    setToken: () => { },
    verifyLogin: () => { }
})

export const AuthProvider = ({ children }) => {

    const [user, _setUser] = useState(null)
    const [token, _setToken] = useState(null)

    const setUser = (user) => {
        _setUser(user);
        //    user && encryptText(JSON.stringify(user)).then(cipher => localStorage.setItem(CURRENT_USER,cipher));
        user && localStorage.setItem(CURRENT_USER, JSON.stringify(user));
    }

    const setToken = (token) => {
        token && encryptText(token)
            .then(cipher => {
                console.log({ token })
                console.log({ cipher })
                const decoder = new TextDecoder('utf8', { ignoreBOM: true });
                const decodedCipher = decoder.decode(cipher)
                console.log(`text:${decodedCipher}`)
                _setToken(cipher)
            });
        !token && clearAuthStorages();
    }

    const interceptBearerToken = async (config) => {
        if (token) {
            const decryptedToken = await decryptText(token);
            console.log("decrypt:", { decryptedToken })
            const plainTextToken = new TextDecoder().decode(decryptedToken)
            console.log('token descriptografado:',plainTextToken)
            if (plainTextToken) config.headers.Authorization = `Bearer ${plainTextToken}`;
        }
        return config;
    }

    axiosClient.interceptors.request.use(interceptBearerToken);

    const verifyLogin = async () => {
        try {
            const user = await verifyUser()
            setUser(user);
            console.log("verify login", { user })
            return true;
        } catch (error) {
            console.error(error)
            return false;
        }
    }

    useEffect(() => {
        verifyUser()
            .then(user => setUser(user))
            .catch(console.error)
    }, [token]);

    return (
        <AuthContext.Provider value={{
            user,
            token,
            setUser,
            setToken,
            verifyLogin,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)
