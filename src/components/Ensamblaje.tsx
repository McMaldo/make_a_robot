import { useState } from "react";

export default function Ensamblaje() {
  const pasos: string[] = [
    "atornillar las placas arduino y L298 al techo",
    "colocar los sensores seguidores de linea a la base",
    "atornillar los motores a los laterales de la base",
    "colocar la bateria encima de la base",
    "encastrar el techo a la base",
    "conectar los cables requeridos",
    "encastrar las ruedas a los motores",
    "ya se encuentra listo para cargar el codigo",
  ];

  const [activeSlide, setActiveSlide] = useState(1);

  return (
    <section className="w-full flex flex-col items-center">
      <ul className="slider w-full aspect-video relative">
        {pasos.map((txt, index) => (
          <li
            key={index}
            className={`absolute top-0 left-0 w-full aspect-video flex flex-col justify-end rounded-xl overflow-hidden border border-teal-700 bg-black transition-all duration-500 ${activeSlide == index + 1 ? "opacity-100 z-1" : "opacity-0 z-0"}`}
          >
            <img
              src={`img/paso${index + 1}.png`}
              className="size-full object-cover select-none"
            />
            <span className="abosolute bottom-0 left-0 p-2 capitalize">
              Paso {index + 1}: {txt}
            </span>
          </li>
        ))}
      </ul>
      <div className="p-4 flex gap-2 flex-wrap justify-center">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((num, index) => (
          <button
            key={index}
            className={`grid place-items-center aspect-square rounded-full size-12 border border-teal-700 cursor-pointer text-lg ${activeSlide == num ? "bg-teal-700 text-black font-bold" : "bg-transparent"} transition-colors`}
            onClick={() => setActiveSlide(num)}
          >
            {num}
          </button>
        ))}
      </div>
    </section>
  );
}
