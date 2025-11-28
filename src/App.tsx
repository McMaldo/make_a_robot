import Materiales from "./components/Materiales";
import Piezas from "./components/Piezas";

function App() {
  return (
    <>
      <header>
        <h1 className="text-4xl sm:text-6xl">Robot de Triatlón</h1>
        <h2 className="text-gray-400">
          Robot Kiwi diseñado por Maldonado Pablo Ignacio
        </h2>
      </header>
      <main className="flex flex-col gap-4">
        <h2 className="text-3xl pt-10">Piezas</h2>
        <Piezas />
        <h2 className="text-3xl pt-10">Materiales para Ensamblar</h2>
        <Materiales />
        {/*<h2>Como Ensamblarlo</h2>*/}
      </main>
    </>
  );
}

export default App;
