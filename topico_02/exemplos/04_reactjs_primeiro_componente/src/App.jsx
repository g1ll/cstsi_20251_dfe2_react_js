import './App.css';
import CardImc from './components/CardImc/CardImc';

const pessoas = [
  { name: 'Fulano', altura: 1.7, peso: 90 },
  { name: 'Beltrano', altura: 1.8, peso: 75 },
  { name: 'Cicrano', altura: 1.9, peso: 90 },
  { name: 'Zé', altura: 1.6, peso: 60 },
  { name: 'Maria', altura: 1.5, peso: 50 },
  { name: 'João', altura: 1.4, peso: 40 },
  { name: 'Ana', altura: 1.3, peso: 30 },
  { name: 'Pedro', altura: 1.2, peso: 20 },
  { name: 'Paulo', altura: 1.1, peso: 10 },
  { name: 'Lucas', altura: 1.0, peso: 5 },
  { name: 'Thiago', altura: 1.9, peso: 95 },
  { name: 'Fernanda', altura: 1.8, peso: 80 },
  { name: 'Juliana', altura: 1.7, peso: 70 },
  { name: 'Roberto', altura: 1.6, peso: 60 },
  { name: 'Mariana', altura: 1.5, peso: 50 },
  { name: 'Ricardo', altura: 1.4, peso: 40 },
];


function App() {
  return (
    <>
      {pessoas.map((pessoa, index) => (
           <CardImc key={index} pessoa={pessoa}/>
      ))}
    </>
  );
}

export default App;
