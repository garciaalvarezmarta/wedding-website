import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [timeLeft, setTimeLeft] = useState({});
  const [showRsvp, setShowRsvp] = useState(false);
  const [rsvpData, setRsvpData] = useState({
    name: "",
    email: "",
    guests: 1,
    dietary: "",
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleRsvpChange = (e) => {
    const { name, value } = e.target;
    setRsvpData({ ...rsvpData, [name]: value });
  };

  const handleRsvpSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("RSVP:", rsvpData);
    setTimeout(() => {
      setShowRsvp(false);
      setRsvpData({ name: "", email: "", guests: 1, dietary: "" });
      setSubmitted(false);
    }, 2000);
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
          Sara y Giuseppe se conocieron en un viaje a Italia hace cinco años. Lo
          que comenzó como una aventura se convirtió en una historia de amor
          infinita. Hoy celebramos el compromiso de pasar toda la vida juntos,
          rodeados de nuestras personas más queridas.
        </p>
        <p>
          Nos encantaría que fueras parte de este día tan especial. Tu presencia
          es el regalo más importante para nosotros.
        </p>
      </section>

      {/* PAREJA */}
      <section className="couple">
        <h2>Los Novios</h2>

        {/* Novia */}
        <div className="couple-section">
          <div className="couple-image-container couple-image-container-bride">
            <img
              src="https://static.wixstatic.com/media/84770f_fe3dcf168ab14985a003abe162b6aa67~mv2_d_4331_2436_s_4_2.jpg/v1/fit/w_988,h_699,q_90,enc_avif,quality_auto/84770f_fe3dcf168ab14985a003abe162b6aa67~mv2_d_4331_2436_s_4_2.jpg"
              alt="Sara"
            />
          </div>
          <div className="couple-info">
            <h3>Sara</h3>
            <p>
              Soñadora, aventurera y amante del arte. Sara cree en el amor
              verdadero y en vivir cada momento intensamente.
            </p>
          </div>
        </div>

        {/* Novio */}
        <div className="couple-section">
          <div className="couple-info">
            <h3>Giuseppe</h3>
            <p>
              Romántico, apasionado y dedicado. Giuseppe es el complemento
              perfecto de Sara, siempre dispuesto a hacer sonreír.
            </p>
          </div>
          <div className="couple-image-container couple-image-container-groom">
            <img
              src="https://static.wixstatic.com/media/84770f_fe3dcf168ab14985a003abe162b6aa67~mv2_d_4331_2436_s_4_2.jpg/v1/fit/w_988,h_699,q_90,enc_avif,quality_auto/84770f_fe3dcf168ab14985a003abe162b6aa67~mv2_d_4331_2436_s_4_2.jpg"
              alt="Sara"
              width={"100%"}
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
                <p className="time">20:00 h</p>
                {/* <p>Con barra libre</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UBICACIÓN */}
      <section className="location">
        <h2>Cómo Llegar</h2>
        <div className="location-grid">
          <div className="location-item">
            <h3>📍 Ceremonia</h3>
            <p>Iglesia de San Miguel, Calle Mayor 45, 28001 Madrid</p>
            <p className="details">
              Metro: Sol (línea 1, 2, 3) — Autobús: líneas 3, 5, 15
            </p>
          </div>
          <div className="location-item">
            <h3>🏰 Recepción</h3>
            <p>Casa Jardín, Camino del Molino 10, 28450 Rivas-Vaciamadrid</p>
            <p className="details">
              Estacionamiento disponible | Entrada facilitada por la familia
            </p>
          </div>
        </div>
      </section>

      {/* REGALOS */}
      <section className="gifts">
        <h2>Regalos &amp; Contribuciones</h2>
        <div className="gifts-content">
          <p>
            Vuestra presencia es lo más importante, pero si deseáis contribuir a
            nuestro futuro juntos, os dejamos estas opciones:
          </p>
          <div className="gifts-options">
            <div className="gift-option">
              <h4>💍 Lista de Bodas</h4>
              <p>
                Disponible en <strong>Carrefour Wedding</strong> bajo nuestros
                nombres
              </p>
            </div>
            <div className="gift-option">
              <h4>💰 Transferencia Bancaria</h4>
              <p>
                <strong>IBAN:</strong> ES91 2100 0418 4502 0005 1332
              </p>
              <p>
                <strong>Beneficiario:</strong> Sara González López
              </p>
            </div>
            <div className="gift-option">
              <h4>✈️ Luna de Miel</h4>
              <p>¡Ayudadnos a hacer realidad nuestro viaje a Bali!</p>
            </div>
          </div>
        </div>
      </section>

      {/* ALOJAMIENTO */}
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
      </section>

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

      {/* RSVP BUTTON */}
      <section className="rsvp-section">
        <button className="rsvp-button" onClick={() => setShowRsvp(true)}>
          Confirmar Asistencia
        </button>
      </section>

      {/* RSVP MODAL */}
      {showRsvp && (
        <div className="modal-overlay" onClick={() => setShowRsvp(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Confirmación de Asistencia</h2>
            {submitted ? (
              <div className="success-message">
                <p>
                  ¡Gracias {rsvpData.name}! Tu confirmación ha sido registrada.
                </p>
                <p>Te contactaremos pronto con los detalles finales.</p>
              </div>
            ) : (
              <form onSubmit={handleRsvpSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre completo"
                  value={rsvpData.name}
                  onChange={handleRsvpChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Tu email"
                  value={rsvpData.email}
                  onChange={handleRsvpChange}
                  required
                />
                <select
                  name="guests"
                  value={rsvpData.guests}
                  onChange={handleRsvpChange}
                >
                  <option value="1">1 invitado</option>
                  <option value="2">2 invitados</option>
                  <option value="3">3 invitados</option>
                  <option value="4">4 invitados</option>
                </select>
                <textarea
                  name="dietary"
                  placeholder="Restricciones dietéticas o comentarios (opcional)"
                  value={rsvpData.dietary}
                  onChange={handleRsvpChange}
                  rows="3"
                />
                <button type="submit" className="modal-button">
                  Confirmar
                </button>
                <button
                  type="button"
                  className="modal-button-cancel"
                  onClick={() => setShowRsvp(false)}
                >
                  Cancelar
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="footer">
        <p>
          Con todo nuestro amor, <strong>Sara &amp; Giuseppe</strong>
        </p>
        <p>📧 sara.giuseppe.boda@gmail.com | 📱 +34 612 345 678</p>
        <p className="footer-text">
          Gracias por ser parte de nuestra historia.
        </p>
      </footer>
    </div>
  );
}

export default App;
