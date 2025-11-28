export default function Ensamblaje() {
  return (
    <section className="ensamblaje">
      <ul className="slider">
        <li id="slide1">
          <h3>
            Una vez que ya tenemos todos los materiales necesarios empazamos
          </h3>
          <h3>Pasos a seguir:</h3>
        </li>
        <li id="slide2">
          <img src="img/paso1.png" />
          atornillar las placas arduino y L298 al techo
        </li>
        <li id="slide3">
          <img src="img/paso2.png" />
          colocar los sensores seguidores de linea a la base
        </li>
        <li id="slide4">
          <img src="img/paso3.png" />
          atornillar los motores a los laterales de la base
        </li>
        <li id="slide5">
          <img src="img/paso4.png" />
          colocar la bateria encima de la base
        </li>
        <li id="slide6">
          <img src="img/paso5.png" />
          encastrar el techo a la base
        </li>
        <li id="slide7">
          <img src="img/paso6.png" />
          conectar los cables requeridos
        </li>
        <li id="slide8">
          <img src="img/paso7.png" />
          encastrar las ruedas a los motores
        </li>
        <li id="slide9">
          <img src="img/paso8.png" />
          ya se encuentra listo para cargar el codigo
        </li>
      </ul>
      <ul className="menu">
        <li>
          <a href="#slide2">1</a>
        </li>
        <li>
          <a href="#slide3">2</a>
        </li>
        <li>
          <a href="#slide4">3</a>
        </li>
        <li>
          <a href="#slide5">4</a>
        </li>
        <li>
          <a href="#slide6">5</a>
        </li>
        <li>
          <a href="#slide7">6</a>
        </li>
        <li>
          <a href="#slide8">7</a>
        </li>
        <li>
          <a href="#slide9">8</a>
        </li>
      </ul>
    </section>
  );
}
