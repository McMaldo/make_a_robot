export default function Materiales() {
  return (
    <section className="materials grid grid-cols-['1fr_min-content'] w-fill max-w-150 border border-teal-700 p-4 rounded-xl">
      <div className="text-xl">Pieza</div>
      <div className="text-xl">Cantidad</div>
      <div className="text-xl col-span-2 pt-4 text-gray-400">Para imprimir</div>
      <span>Base</span>
      <span>1</span>
      <span>Techo</span>
      <span>1</span>
      <span>Rueda</span>
      <span>2</span>
      <div className="text-xl col-span-2 pt-4 text-gray-400">Para Comprar</div>
      <span>Tornillos</span>
      <span>12</span>
      <span>Tuercas</span>
      <span>12</span>
      <div className="text-xl col-span-2 pt-4 text-gray-400">Electrónica</div>
      <span>Smart Motor TT</span>
      <span>2</span>
      <span>L298</span>
      <span>1</span>
      <span>Arduino (UNO / Nano)</span>
      <span>1</span>
      <span>Cable Dupont</span>
      <span>según el programa</span>
    </section>
  );
}
