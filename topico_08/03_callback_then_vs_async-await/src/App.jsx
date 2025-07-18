import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const funcCallback = (text, callback) => {
    setTimeout(() => {
      console.log(text);
      callback && callback();
    }, 500);
  };

  const funcPromise = (text,time=null,isRejected=false) =>
    new Promise((resolve, reject) => {
      isRejected && setTimeout(
        ()=>{
          reject('Erro');
      },time?time:0);

      setTimeout(() => {
        console.log(text);
        resolve(funcPromise);
      }, time?time:500);
    });

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Promise Async/Await</h1>
      <div className="card">
        <button
          onClick={() => {
            funcCallback("Hello", () => {
              funcCallback("World", () => {
                funcCallback("CallBack", () => {
                  funcCallback("Hell");
                });
              });
            });
          }}
        >
          CallBack Hell
        </button>&nbsp;&nbsp;
        <button
          onClick={() => {
            funcPromise("Hello")
              .then(fun => fun("World"))
              .then(fun => fun("Promise"))
              .then(fun => fun("Chaning"))
              .catch(erro=>console.error(erro))
              .finally(()=>console.log('Sempre executa!!'))
            console.log("Exemplo Promise Chaning");
          }
          }
        >
          Promise Chaning
        </button>&nbsp;&nbsp;
        <button
          onClick={async () => {
              await funcPromise("Hello");
              await funcPromise("World");
              await funcPromise("Async");
              await funcPromise("Await");
              console.log("Exemplo Async/Await");
            }
          }
        >
          Promise Async/Await
        </button>&nbsp;&nbsp;
         <button
          onClick={() => {
            (async () => {
              await funcPromise("Hello");
              await funcPromise("World");
              await funcPromise("Async");
              await funcPromise("Await");
            })();//IIFE - Immediately Invoked Function Expression
            console.log("Exemplo Async/Await IIFE");
          }
          }
        >
          Promise Async/Await IIFE
        </button>&nbsp;&nbsp;
        <button
          onClick={async () => {
            await Promise.all([ //resolve todas as promises em paralelo
              funcPromise("Hello"),
              funcPromise("World"),
              funcPromise("Promise",2000),
              funcPromise("All")
            ]);
            console.log("Exemplo Promise All");
          }
          }
        >
          Promise All
        </button>&nbsp;&nbsp;
        <button
          onClick={async () => {
            await Promise.allSettled([ //Array de promises
              funcPromise("Hello"),
              funcPromise("World"),
              funcPromise("Promise",100,true),
              funcPromise("AllSettled")
            ]).then(results => results.forEach(//itera o resultado de cada promise
              result => console.log(result.status)
            ));
          }
          }
        >
          Promise AllSettled
        </button>
      </div>
    </>
  );
}

export default App;
