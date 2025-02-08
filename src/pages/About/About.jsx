import Logo from "../../assets/images/logo.svg";

export const About = () => {
  return (
    <main className="about-page main">
      <img src={Logo} alt="Nucleo Technology" />
      <h1>Sobre Nosotros</h1>
      <p className="about-page--extra">
        En Núcleo Technology, somos apasionados por la innovación y estamos
        comprometidos a llevar lo último en avances tecnológicos directamente a
        tus manos. Fundada con la visión de transformar la forma en que las
        personas interactúan con la tecnología, nos especializamos en ofrecer
        productos y soluciones tecnológicas de alta calidad que empoderan a
        individuos y empresas para prosperar en un mundo digital.
      </p>
      <div className="about-info-container">
        <span>Nuestra Misión</span>
        <p>
          Nuestra misión es ser el puente entre la tecnología de vanguardia y
          las personas, ofreciendo productos innovadores, accesibles y
          confiables que mejoren la vida diaria y potencien el crecimiento de
          nuestros clientes.
        </p>
      </div>
      <div className="about-info-container">
        <span>Nuestra Visión</span>
        <p>
          Queremos ser reconocidos como líderes en el mercado de artículos
          tecnológicos en Latinoamérica, destacándonos por nuestra calidad,
          servicio al cliente y compromiso con la innovación constante.
        </p>
      </div>
      <div className="about-info-container">
        <span>Nuestra Historia</span>
        <p>
          Núcleo Technology nació en 2021 como un emprendimiento pequeño pero
          con grandes sueños. Todo comenzó con la idea de acercar la tecnología
          a más personas, eliminando barreras y ofreciendo productos que
          realmente marquen la diferencia. Con el tiempo, hemos crecido gracias
          a la confianza de nuestros clientes y a nuestro enfoque en la
          excelencia.
        </p>
      </div>
      <div className="about-info-container">
        <span>Nuestros Servicios</span>
        <p>
          En Núcleo Technology, ofrecemos: <br /> &#x2022;
          <b>Venta de artículos tecnológicos</b>: Desde dispositivos
          inteligentes hasta accesorios innovadores, tenemos todo lo que
          necesitas para estar a la vanguardia. <br /> &#x2022;
          <b>Asesoría personalizada</b>: Te ayudamos a encontrar la solución
          tecnológica que mejor se adapte a tus necesidades. <br /> &#x2022;
          <b>Soporte técnico</b>: Nos aseguramos de que tu experiencia con
          nuestros productos sea siempre óptima. <br /> &#x2022;
          <b>Innovación constante</b>: Trabajamos para traerte las últimas
          tendencias y novedades del mundo tech.
        </p>
      </div>
      <div className="about-info-container">
        <span>Nuestros Valores</span>
        <p>
          &#x2022; <b>Innovación</b>: Estamos siempre un paso adelante, buscando
          lo último en tecnología. <br />
          &#x2022; <b>Calidad</b>: Nos comprometemos a ofrecer productos
          duraderos y de alto rendimiento. <br />
          &#x2022; <b>Confianza</b>: Creemos en relaciones transparentes y
          honestas con nuestros clientes. <br />
          &#x2022; <b>Compromiso</b>: Nos esforzamos por superar las
          expectativas en cada interacción.
        </p>
      </div>
      <div className="about-info-container">
        <span>¿Por qué elegirnos?</span>
        <p>
          En Núcleo Technology, no solo vendemos productos; ofrecemos soluciones
          que te ayudan a simplificar tu vida, aumentar tu productividad y
          disfrutar de la tecnología al máximo. Nuestro equipo está formado por
          expertos apasionados que están siempre dispuestos a guiarte y
          asesorarte.
        </p>
      </div>
      <p className="about-page--extra">
        <b>Núcleo Technology. Innovación que impulsa tu mundo.</b>
      </p>
    </main>
  );
};
