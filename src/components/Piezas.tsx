import FaIcon from "./FaIcons";

export default function Piezas() {
  const listaPiezas: string[] = ["base", "techo", "rueda", "completo"];

  return (
    <section className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] lg:grid-cols-2 gap-4">
      {listaPiezas.map((pieza, index) => (
        <article
          key={index}
          className={`relative border border-teal-700 rounded-xl aspect-video overflow-hidden flex items-end`}
        >
          <div className="relative flex-1 flex z-2 p-4 items-center justify-between">
            <h4 className="capitalize">{pieza}</h4>
            <a
              href={`download/${pieza}.${pieza == "completo" ? "FCStd" : "stl"}`}
              download={`kiwi2023-${pieza}.${pieza == "completo" ? "FCStd" : "stl"}`}
              className="flex gap-1 item-center p-2 bg-gray-800 hover:bg-gray-700 transition-colors rounded-lg select-none"
            >
              <FaIcon name="download" />
              <span className=" text-gray-300">Descargar</span>
            </a>
          </div>
          <img
            src={`img/${pieza}.png`}
            alt=""
            className="absolute size-fill select-none top-0 left-0"
          />
        </article>
      ))}
    </section>
  );
}
