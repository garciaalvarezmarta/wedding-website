import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [timeLeft, setTimeLeft] = useState({});
  const [copiedIban, setCopiedIban] = useState(false);

  // Cuenta regresiva
  useEffect(() => {
    const weddingDate = new Date("2026-06-20T15:00:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  

  const IBAN = "IT48 Q036 6901 6005 1618 0234 674";

  const handleCopyIban = async () => {
    try {
      await navigator.clipboard.writeText(IBAN);
      setCopiedIban(true);
      setTimeout(() => setCopiedIban(false), 2000);
    } catch (err) {
      console.error("No se pudo copiar el IBAN:", err);
    }
  };

  return (
    <div className="app">
      {/* HERO SECTION */}
      <header className="main-header">
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">Sara &amp; Giuseppe</h1>
            <p className="hero-date">4 de Julio, 2026</p>
            <p className="hero-quote">
              "Dos almas, un destino — acompáñanos a celebrar nuestro amor."
            </p>
          </div>
        </section>

        {/* CUENTA REGRESIVA */}
        <section className="countdown">
          <h2>Faltan</h2>
          <div className="countdown-grid">
            <div className="countdown-item">
              <span className="countdown-number">{timeLeft.days || 0}</span>
              <span className="countdown-label">Días</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-number">{timeLeft.hours || 0}</span>
              <span className="countdown-label">Horas</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-number">{timeLeft.minutes || 0}</span>
              <span className="countdown-label">Minutos</span>
            </div>
          </div>
        </section>
      </header>

      {/* DESCRIPCIÓN */}
      <section className="about">
        <h2>Nuestra Historia</h2>
        <p>
          Después de conocernos casi por casualidad, de despedidas, viajes,
          distancia y una mudanza a Turín, hemos aprendido que lo más importante
          es compartir la vida con complicidad, respeto y muchas ganas de
          pasarlo bien. Así entendemos también este día: una boda de tarde, en
          la Real Fábrica de Tapices, con ambiente de cine, buena comida y mucha
          fiesta hasta que el cuerpo diga basta.
        </p>
        <p>
          Queremos celebrar el amor, la vida y todo lo que nos ha traído hasta
          aquí, pero sobre todo compartirlo con las personas que más nos
          importan. Venid con ganas de disfrutar, de bailar, de reír y de darlo
          todo, porque creemos de verdad que los protagonistas de este día somos
          todos. Si al final de la noche hay sonrisas, anécdotas y pies
          cansados, sabremos que ha sido exactamente como lo imaginábamos.
        </p>
        <div className="about-image-wrapper">
          <img
            src={process.env.PUBLIC_URL + "/GiuseppeSara.jpeg"}
            alt="Sara y Giuseppe"
            className="about-image"
          />
        </div>
      </section>

      {/* PAREJA */}
      <section className="couple">
        <h2>Los Novios</h2>

        {/* Novia */}
        <div className="couple-section">
          <div className="couple-image-container couple-image-container-bride">
            <img src={process.env.PUBLIC_URL + "/sara.jpeg"} alt="Sara" />
          </div>
          <div className="couple-info">
            <h3>Sara</h3>
            <p>
              Sensible y soñadora, amante del cine y de la lectura. Siempre
              tiene curiosidad por aprender cosas nuevas, aunque no se considera
              especialmente romántica. Prefiere las historias bien contadas en
              la pantalla o en un libro… y la vida, vivirla tal como viene.
            </p>
            <p>
              Reservada, reflexiva y con gustos que ella misma define como “un
              poco de vieja”, encuentra en Giuseppe a su roca: su apoyo en los
              momentos difíciles y, sobre todo, su mejor amigo. Juntos se
              entienden sin demasiadas palabras.
            </p>
          </div>
        </div>

        {/* Novio */}
        <div className="couple-section groom-responsive">
          <div className="couple-info">
            <h3>Giuseppe</h3>
            <p>
              La alegría en movimiento. Siempre sonriente, activo y con una
              energía inagotable: si no está poniendo una lavadora, está
              haciendo la compra, y si no, probablemente jugando al tenis. Y
              todo con buena cara.
            </p>
            <p>
              Divertido,espontáneo y amante del vino. Le encanta el pop juvenil,
              la música electrónica y el tenis, y poco a poco va adentrándose en
              el mundo del cine… gracias a Sara. Nunca se está quieto, pero
              siempre está donde tiene que estar.
            </p>
          </div>
          <div className="couple-image-container couple-image-container-groom">
            <img
              src={process.env.PUBLIC_URL + "/giuseppe.jpeg"}
              alt="Giuseppe"
              width="100%"
            />
          </div>
        </div>
      </section>

      <section className="event-details">
        <h2>Detalles de la Celebración</h2>

        <div className="timeline">
          <div className="timeline-line" />
          <div className="timeline-track">
            <div className="timeline-item top">
              <div className="timeline-card detail-card">
                <h3>Ceremonia civil</h3>
                <p className="time">18:30 h</p>
                {/* <p>Ceremonia</p> */}
              </div>
            </div>

            <div className="timeline-item bottom">
              <div className="timeline-card detail-card">
                <h3>Cóctel</h3>
                <p className="time">19:00 h</p>
                {/* <p>Casa Jardín, Camino del Molino 10, 28450 Rivas-Vaciamadrid</p> */}
              </div>
            </div>

            <div className="timeline-item top">
              <div className="timeline-card detail-card">
                <h3>Cena</h3>
                <p className="time">20:30 h</p>
                {/* <p>Terraza con vistas y aperitivos especiales</p> */}
              </div>
            </div>

            <div className="timeline-item bottom">
              <div className="timeline-card detail-card">
                <h3>Discoteca</h3>
                <p className="time">23:00 h</p>
                {/* <p>Con barra libre</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UBICACIÓN (mapa grande) */}
      <section className="location">
        <h2>Cómo Llegar</h2>

        <div className="location-map-wrap">
          <div className="map-header">
            <h3>Real Fábrica de Tapices</h3>
            <p className="map-address">Plaza de la Reina Cristina, s/n, 28014 Madrid, España</p>
          </div>

          <div className="location-map-large">
            <iframe
              title="Mapa Real Fábrica de Tapices"
              src="https://www.google.com/maps?q=Real+F%C3%A1brica+de+Tapices,+Madrid&output=embed"
              loading="lazy"
              aria-label="Mapa con la ubicación de la Real Fábrica de Tapices"
            />
          </div>
        </div>
      </section>


      {/* REGALOS */}
      <section className="gifts">
        <h2>Regalos y Contribuciones</h2>
        <div className="gifts-content">
          <p className="gifts-lead">
            Vuestro cariño es nuestro mejor regalo. Si además queréis ayudarnos a
            empezar esta nueva etapa, podéis hacerlo aquí:
          </p>

          <div className="gifts-options">
            <div className="gift-option">
              <h4>Transferencia Bancaria</h4>
              <div className="iban-box">
                <code className="iban">{IBAN}</code>
                <button type="button" className="copy-iban" onClick={handleCopyIban}>
                  Copiar IBAN
                </button>
              </div>
              <p>
                <strong>Beneficiario:</strong> Sara García Álvarez / Giuseppe Sgobba
              </p>
              {copiedIban && <span className="copy-success">¡IBAN copiado!</span>}
            </div>

            {/* <div className="gift-option">
              <h4>Luna de Miel</h4>
              <p>
                Si preferís que la contribución sea destinada a nuestra luna de
                miel, os lo agradeceremos de corazón. Cualquier importe nos
                ayudará a comenzar esta nueva etapa.
              </p>
            </div> */}
          </div>
        </div>
      </section>

      {/* ALOJAMIENTO
      <section className="accommodation">
        <h2>Alojamiento</h2>
        <p>
          Para los asistentes que vengan de fuera, recomendamos estos hoteles
          cercanos con descuento especial mencionando nuestros nombres:
        </p>
        <div className="accommodation-list">
          <div className="accommodation-item">
            <h4>Hotel Elegancia Madrid ⭐⭐⭐⭐</h4>
            <p>
              Calle Príncipe 28, Madrid | Descuento: 15% | Tel: +34 91 123 4567
            </p>
          </div>
          <div className="accommodation-item">
            <h4>Casa Rural La Paz ⭐⭐⭐</h4>
            <p>Rivas-Vaciamadrid | Descuento: 20% | Tel: +34 91 234 5678</p>
          </div>
          <div className="accommodation-item">
            <h4>AirBnB y Booking</h4>
            <p>
              Amplia oferta en la zona | Consultar disponibilidad directamente
            </p>
          </div>
        </div>
      </section> */}

      {/* PREGUNTAS FRECUENTES */}
      <section className="faq">
        <h2>Preguntas Frecuentes</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h4>¿Puedo llevar acompañante?</h4>
            <p>
              Por supuesto, nos encantará conocerlo. Solo te pedimos que lo
              indiques en el RSVP para organizar el menú correctamente.
            </p>
          </div>
          <div className="faq-item">
            <h4>¿Hay opciones vegetarianas?</h4>
            <p>
              Claro. Indicanos en el RSVP cualquier restricción dietética y nos
              aseguraremos de que disfrutes de la comida.
            </p>
          </div>
          <div className="faq-item">
            <h4>¿Habrá guardería?</h4>
            <p>
              Sí, tenemos un espacio con cuidadores profesionales para los más
              pequeños. Comunícanos si la necesitas.
            </p>
          </div>
          <div className="faq-item">
            <h4>¿Cuál es el código de vestimenta?</h4>
            <p>
              Formal elegante. Hombres: traje oscuro. Mujeres: vestido largo o
              conjunto elegante. ¡Que brille el azul marino y el beige!
            </p>
          </div>
        </div>
      </section>

      {/* RSVP removed: guests should confirm via email/phone (see footer) */}

      {/* FOOTER */}
        {/* Confirmar asistencia - prominent section */}
        <section className="confirm-contacts">
          <h2>Confirmar asistencia</h2>
          <p className="confirm-lead">Por favor contactad con cualquiera de los novios para confirmar asistencia</p>
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-avatar">S</div>
              <div className="contact-body">
                <div className="contact-name">Sara</div>
                <a className="contact-link" href="tel:+34676754880">+34 676 754 880</a>
                <a className="contact-link" href="mailto:sara.giuseppe.boda@gmail.com">sarita9322@gmail.com</a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-avatar">G</div>
              <div className="contact-body">
                <div className="contact-name">Giuseppe</div>
                <a className="contact-link" href="tel:+34612345678">+34 612 345 678</a>
                <a className="contact-link" href="mailto:giuseppe@example.com">giuseppe@example.com</a>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <p>
            Con todo nuestro amor, <strong>Sara &amp; Giuseppe</strong>
          </p>
          <p className="footer-text">Gracias por ser parte de nuestra historia.</p>
        </footer>
    </div>
  );
}

export default App;
