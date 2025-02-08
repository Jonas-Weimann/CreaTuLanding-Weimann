import Logo from "../../assets/images/logo.svg";

export const Privacidad = () => {
  return (
    <main className="privacidad-page main">
      <img src={Logo} alt="Nucleo Technology" />
      <h1>Política de Privacidad</h1>
      <p className="privacidad-page--extra">
        Esta Política de Privacidad describe cómo se recopila, utiliza y
        comparte tu información personal cuando visitas o realizas una compra en
        Nucleo Technology.
      </p>
      <div className="privacy-info-container">
        <span>QUÉ INFORMACIÓN PERSONAL RECOPILAMOS</span>
        <p>
          Cuando visitas el Sitio, recopilamos automáticamente cierta
          información sobre tu dispositivo, incluida información sobre tu
          navegador web, dirección IP, zona horaria y algunas de las cookies que
          están instaladas en tu dispositivo. <br />
          Además, a medida que navegas por el Sitio, recopilamos información
          sobre las páginas web individuales o los productos que ves, qué sitios
          web o términos de búsqueda te remiten al Sitio, e información sobre
          cómo interactúas con el Sitio. Nos referimos a esta información
          recopilada automáticamente como <b>Información del Dispositivo</b>
          (device information). <br />
          Recopilamos información del dispositivo utilizando las siguientes
          tecnologías: <br /> &#x2022; <b>Cookies</b>: son archivos de datos que
          se colocan en tu dispositivo o computadora y con frecuencia incluyen
          un identificador único anónimo. <br />
          &#x2022; <b>Archivos de registro</b>: rastrean las acciones que
          ocurren en el Sitio y recopilan datos, incluida tu dirección IP, el
          tipo de navegador, el proveedor de servicios de Internet, las páginas
          de referencia/salida y las marcas de fecha y hora. <br />
          Además, cuando efectúas una compra o intentas realizar una compra a
          través del Sitio, recopilamos cierta información tuya, como tu nombre,
          dirección de facturación, dirección de envío, información de pago,
          incluidos números de tarjetas de crédito, dirección de email y el
          número de teléfono. Esto se denomina <b>
            Información del Pedido
          </b>. <br />
          Al referirnos a <b>Información Personal</b> en esta Política de
          Privacidad, estamos hablando tanto de la Información del Dispositivo
          como de la Información del Pedido.
        </p>
      </div>
      <div className="privacy-info-container">
        <span>CÓMO USAMOS TU INFORMACIÓN PERSONAL</span>
        <p>
          Utilizamos la Información de Pedido que recopilamos por lo general
          para cumplir con los pedidos realizados a través del Sitio (incluido
          el procesamiento de tu información de pago, la organización del envío
          y el envío de facturas y/o confirmaciones de pedidos). <br />
          Además, usamos esta Información del Pedido para: comunicarnos contigo,
          examinar nuestros pedidos para detectar posibles riesgos o fraudes,
          para (en línea con las preferencias que has compartido con nosotros)
          ofrecerte información o publicidad relacionada con nuestros productos
          o servicios. <br />
          Utilizamos la Información del Dispositivo que recopilamos para
          ayudarnos a detectar posibles riesgos y fraudes (en particular, tu
          dirección IP) y, en general, para mejorar y optimizar nuestro sitio.
        </p>
      </div>
      <div className="privacy-info-container">
        <span>COMPARTIENDO TU INFORMACIÓN PERSONAL</span>
        <p>
          Compartimos tu Información Personal con terceros para ayudarnos a
          utilizarla como se describió anteriormente. <br />
          También empleamos Google Analytics para ayudarnos a comprender cómo
          nuestros clientes usan Nucleo Technology.{" "}
          <a href="https://www.google.com/intl/en/policies/privacy/">
            Cómo usa Google tu Información Personal.
          </a>
          <br />
          Finalmente, también podemos compartir tu Información Personal para
          cumplir con las leyes y regulaciones aplicables, para responder a una
          citación, una orden de registro u otras solicitudes legales de
          información que recibimos, o para proteger nuestros derechos.
        </p>
      </div>
      <div className="privacy-info-container">
        <span>TUS DERECHOS</span>
        <p>
          Si eres un residente latinoamericano, tienes derecho a acceder a la
          información personal que tenemos sobre ti y a solicitar que tu
          información personal se corrija, actualice o elimine. Si deseas
          ejercer este derecho, por favor contáctanos. <br />
          Además, si eres un residente latinoamericano, notamos que estamos
          procesando tu información para cumplir con los contratos que podríamos
          tener contigo (por ejemplo, si realizas un pedido a través del Sitio),
          o de otra manera para perseguir nuestros intereses comerciales
          legítimos mencionados anteriormente.
        </p>
      </div>
      <div className="privacy-info-container">
        <span>RETENCIÓN DE DATOS</span>
        <p>
          Cuando realices un pedido a través del Sitio, mantendremos tu
          Información de Pedido para nuestros registros a menos que y hasta que
          nos solicites eliminar esta información.
        </p>
      </div>
      <div className="privacy-info-container">
        <span>MENORES</span>
        <p>El Sitio no está destinado a personas menores de edad.</p>
      </div>
      <div className="privacy-info-container">
        <span>CAMBIOS</span>
        <p>
          Podemos actualizar esta política de privacidad de vez en cuando para
          reflejar, por ejemplo, cambios en nuestras prácticas o por otras
          razones operativas, legales o reglamentarias.
        </p>
      </div>
      <p className="privacidad-page--extra">
        Si tiene preguntas o necesitas más información, no dudes en ponerte en
        contacto con nosotros.
      </p>
    </main>
  );
};
