export function fazerLogin(email, senha) {
  if (email === "admin@exemplo.com" && senha === "123456") {
    return { sucesso: true, mensagem: "Login bem-sucedido!" };
  } else {
    return { sucesso: false, mensagem: "Credenciais inválidas." };
  }
}