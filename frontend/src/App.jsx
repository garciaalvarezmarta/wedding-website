import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [timeLeft, setTimeLeft] = useState({});
  const [copiedIban, setCopiedIban] = useState(false);
  const [language, setLanguage] = useState("es"); // "es" or "it"

  // Translations
  const translations = {
    es: {
      ourStory: "Nuestra Historia",
      ourStoryText: "Después de conocernos casi por casualidad, de despedidas, viajes, distancia y una mudanza a Turín, hemos aprendido que lo más importante es compartir la vida con complicidad, respeto y muchas ganas de pasarlo bien. Así entendemos también este día: una boda de tarde, en la Real Fábrica de Tapices, con ambiente de cine, buena comida y mucha fiesta hasta que el cuerpo diga basta.",
      ourStoryText2: "Queremos celebrar el amor, la vida y todo lo que nos ha traído hasta aquí, pero sobre todo compartirlo con las personas que más nos importan. Venid con ganas de disfrutar, de bailar, de reír y de darlo todo, porque creemos de verdad que los protagonistas de este día somos todos. Si al final de la noche hay sonrisas, anécdotas y pies cansados, sabremos que ha sido exactamente como lo imaginábamos.",
      theCouple: "Los Novios",
      sara: "Sara",
      saraDesc: "Sensible y soñadora, amante del cine y de la lectura. Siempre tiene curiosidad por aprender cosas nuevas, aunque no se considera especialmente romántica. Prefiere las historias bien contadas en la pantalla o en un libro… y la vida, vivirla tal como viene.\n\nReservada, reflexiva y con gustos que ella misma define como \"un poco de vieja\", encuentra en Giuseppe a su roca: su apoyo en los momentos difíciles y, sobre todo, su mejor amigo. Juntos se entienden sin demasiadas palabras.",
      giuseppe: "Giuseppe",
      giuseppeDesc: "La alegría en movimiento. Siempre sonriente, activo y con una energía inagotable: si no está poniendo una lavadora, está haciendo la compra, y si no, probablemente jugando al tenis. Y todo con buena cara.\n\nDivertido, espontáneo y amante del vino. Le encanta el pop juvenil, la música electrónica y el tenis, y poco a poco va adentrándose en el mundo del cine… gracias a Sara. Nunca se está quieto, pero siempre está donde tiene que estar.",
      eventDetails: "Detalles de la Celebración",
      ceremony: "Ceremonia civil",
      cocktail: "Cóctel",
      dinner: "Cena",
      dancefloor: "Discoteca",
      howToArrival: "Cómo Llegar",
      realFactory: "Real Fábrica de Tapices",
      address: "Plaza de la Reina Cristina, s/n, 28014 Madrid, España",
      tapTheMap: "Pulsa en el mapa para abrir indicaciones en Google Maps.",
      giftsTitle: "Regalos y Contribuciones",
      giftsLead: "Vuestro cariño es nuestro mejor regalo. Si además queréis ayudarnos a empezar esta nueva etapa, podéis hacerlo aquí:",
      bankTransfer: "Transferencia Bancaria",
      copyIban: "Copiar IBAN",
      beneficiary: "Beneficiario:",
      honeymoon: "Luna de Miel",
      honeymoonText: "Si preferís que la contribución sea destinada a nuestra luna de miel, os lo agradeceremos de corazón. Cualquier importe nos ayudará a comenzar esta nueva etapa.",
      faqTitle: "Preguntas Frecuentes",
      faq1Q: "¿Puedo llevar acompañante?",
      faq1A: "Por supuesto, nos encantará conocerlo. Solo te pedimos que lo indiques en el RSVP para organizar el menú correctamente.",
      faq2Q: "¿Hay opciones vegetarianas?",
      faq2A: "Claro. Indicanos en el RSVP cualquier restricción dietética y nos aseguraremos de que disfrutes de la comida.",
      faq3Q: "¿Habrá guardería?",
      faq3A: "Sí, tenemos un espacio con cuidadores profesionales para los más pequeños. Comunícanos si la necesitas.",
      faq4Q: "¿Cuál es el código de vestimenta?",
      faq4A: "Formal elegante. Hombres: traje oscuro. Mujeres: vestido largo o conjunto elegante. ¡Que brille el azul marino y el beige!",
      confirmAttendance: "Confirmar asistencia",
      contactLead: "Por favor contactad con cualquiera de los novios para confirmar asistencia",
      withOurLove: "Con todo nuestro amor",
      thanks: "Gracias por ser parte de nuestra historia.",
      countdown: "Faltan",
      days: "Días",
      hours: "Horas",
      minutes: "Minutos",
      heroQuote: "Este es el comienzo de algo importante. - Casablanca",
      weddingDate: "4 de Julio, 2026",
    },
    it: {
      ourStory: "La nostra storia",
      ourStoryText: "Dopo esserci conosciuti quasi per caso, tra saluti, viaggi, distanza e un trasferimento a Torino, abbiamo imparato che la cosa più importante è condividere la vita con complicità, rispetto e tanta voglia di divertirsi. È così che immaginiamo anche questo giorno: un matrimonio nel pomeriggio, alla Real Fábrica de Tapices, con un'atmosfera da cinema, buon cibo e tanta festa fino a quando il corpo dirà basta.",
      ourStoryText2: "Vogliamo celebrare l'amore, la vita e tutto ciò che ci ha portati fin qui, ma soprattutto condividerlo con le persone che più contano per noi. Venite con la voglia di godervi la giornata, di ballare, ridere e dare il massimo, perché crediamo davvero che tutti saremo i protagonisti di questo giorno speciale. Se a fine serata ci saranno sorrisi e aneddoti, sapremo che è stato esattamente come lo avevamo immaginato.",
      theCouple: "Gli sposi",
      sara: "Sara",
      saraDesc: "Sensibile e sognatrice, amante del cinema e della lettura. Ha sempre curiosità di imparare cose nuove, anche se non si considera particolarmente romantica. Preferisce le storie ben raccontate sullo schermo o tra le pagine di un libro… e la vita, viverla così com'è.\n\nRiservata, riflessiva e con gusti che lei stessa definisce \"un po' da vecchia\", trova in Giuseppe la sua roccia: il suo sostegno nei momenti difficili e, soprattutto, il suo migliore amico. Insieme si capiscono senza bisogno di troppe parole.",
      giuseppe: "Giuseppe",
      giuseppeDesc: "Un concentrato di allegria in movimento. Sempre sorridente, attivo e con un'energia inesauribile: se non sta facendo una lavatrice, è a fare la spesa, e se no probabilmente sta giocando a tennis. E sempre con il sorriso.\n\nDivertente, spontaneo e amante del vino. Gli piace il pop giovanile, la musica elettronica e il tennis, e poco a poco si sta addentrando nel mondo del cinema… grazie a Sara. Non sta mai fermo, ma è sempre dove deve essere.",
      eventDetails: "Dettagli della Celebrazione",
      ceremony: "Cerimonia civile",
      cocktail: "Cocktail",
      dinner: "Cena",
      dancefloor: "Festa",
      howToArrival: "Come Arrivare",
      realFactory: "Real Fábrica de Tapices",
      address: "Plaza de la Reina Cristina, s/n, 28014 Madrid, Spagna",
      tapTheMap: "Tocca la mappa per aprire le indicazioni in Google Maps.",
      giftsTitle: "Regali e contributi",
      giftsLead: "Il vostro affetto è il regalo più bello per noi. Se inoltre desiderate aiutarci a iniziare questa nuova fase della nostra vita, potete farlo qui:",
      bankTransfer: "Bonifico bancario",
      copyIban: "Copia IBAN",
      beneficiary: "Intestatari:",
      honeymoon: "Luna di miele",
      honeymoonText: "Se preferite che il contributo sia destinato alla nostra luna di miele, ve ne saremo grati di cuore. Qualsiasi importo ci aiuterà a iniziare questa nuova fase.",
      faqTitle: "Domande frequenti",
      faq1Q: "Posso usare tric-trac, petardi o fuochi d'artificio?",
      faq1A: "È vietato l'uso di fuochi d'artificio, bengala, fumi o simili in tutte le aree, sia interne che esterne.",
      faq2Q: "È possibile lanciare coriandoli, riso o petali?",
      faq2A: "È consentito esclusivamente l'uso di petali di fiori naturali. Sono severamente vietati riso, coriandoli, petali artificiali, cannoni spara-coriandoli, ecc., sia all'interno che all'esterno.",
      faq3Q: "Dove sarà la cerimonia?",
      faq3A: "La cerimonia si terrà alla Real Fábrica de Tapices a Madrid. Troverai tutte le informazioni logistiche nella sezione \"Come Arrivare\".",
      faq4Q: "Qual è il dress code?",
      faq4A: "Formale, elegante. Uomini: abito Donne: abito lungo o abbigliamento elegante.",
      confirmAttendance: "Conferma di partecipazione",
      contactLead: "Vi chiediamo gentilmente di contattare uno degli sposi per confermare la vostra presenza.",
      withOurLove: "Con tutto il nostro amore",
      thanks: "Grazie per essere parte della nostra storia.",
      countdown: "Mancano",
      days: "Giorni",
      hours: "Ore",
      minutes: "Minuti",
      heroQuote: "Forse oggi noi inauguriamo una bella amicizia. - Casablanca",
      weddingDate: "4 luglio 2026",
    },
  };

  const t = translations[language]; // Current language translations

  // Cuenta regresiva
  useEffect(() => {
    const weddingDate = new Date("2026-07-04T18:30:00").getTime();
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
    <>
      {/* LANGUAGE TOGGLE */}
      <div className="language-toggle">
        <button
          className={`lang-btn ${language === "es" ? "active" : ""}`}
          onClick={() => setLanguage("es")}
        >
          ES
        </button>
        <button
          className={`lang-btn ${language === "it" ? "active" : ""}`}
          onClick={() => setLanguage("it")}
        >
          IT
        </button>
      </div>
      <div className="app">

      {/* HERO SECTION */}
      <header className="main-header">
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">Sara &amp; Giuseppe</h1>
            <p className="hero-date">{t.weddingDate}</p>
            <p className="hero-quote">
              "{t.heroQuote}"
            </p>
          </div>
        </section>

        {/* CUENTA REGRESIVA */}
        <section className="countdown">
          <h2>{t.countdown}</h2>
          <div className="countdown-grid">
            <div className="countdown-item">
              <span className="countdown-number">{timeLeft.days || 0}</span>
              <span className="countdown-label">{t.days}</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-number">{timeLeft.hours || 0}</span>
              <span className="countdown-label">{t.hours}</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-number">{timeLeft.minutes || 0}</span>
              <span className="countdown-label">{t.minutes}</span>
            </div>
          </div>
        </section>
      </header>

      {/* DESCRIPCIÓN */}
      <section className="about">
        <h2>{t.ourStory}</h2>
        <p>{t.ourStoryText}</p>
        <p>{t.ourStoryText2}</p>
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
        <h2>{t.theCouple}</h2>

        {/* Novia */}
        <div className="couple-section">
          <div className="couple-image-container couple-image-container-bride">
            <img src={process.env.PUBLIC_URL + "/Sara.jpeg"} alt="Sara" />
          </div>
          <div className="couple-info">
            <h3>{t.sara}</h3>
            <p>{t.saraDesc.split('\n\n')[0]}</p>
            <p>{t.saraDesc.split('\n\n')[1]}</p>
          </div>
        </div>

        {/* Novio */}
        <div className="couple-section groom-responsive">
          <div className="couple-info">
            <h3>{t.giuseppe}</h3>
            <p>{t.giuseppeDesc.split('\n\n')[0]}</p>
            <p>{t.giuseppeDesc.split('\n\n')[1]}</p>
          </div>
          <div className="couple-image-container couple-image-container-groom">
            <img
              src={process.env.PUBLIC_URL + "/Giuseppe.jpeg"}
              alt="Giuseppe"
              width="100%"
            />
          </div>
        </div>
      </section>

      <section className="event-details">
        <h2>{t.eventDetails}</h2>
        <div className="about-image-wrapper">
          <img
            src={process.env.PUBLIC_URL + "/tapiz.jpg"}
            alt="Sara y Giuseppe"
            className="about-image"
          />
        </div>
        <div className="timeline">
          <div className="timeline-line" />
          <div className="timeline-track">
            <div className="timeline-item top">
              <div className="timeline-card detail-card">
                <h3>{t.ceremony}</h3>
                <p className="time">18:30 h</p>
                {/* <p>Ceremonia</p> */}
              </div>
            </div>

            <div className="timeline-item bottom">
              <div className="timeline-card detail-card">
                <h3>{t.cocktail}</h3>
                <p className="time">19:00 h</p>
                {/* <p>Casa Jardín, Camino del Molino 10, 28450 Rivas-Vaciamadrid</p> */}
              </div>
            </div>

            <div className="timeline-item top">
              <div className="timeline-card detail-card">
                <h3>{t.dinner}</h3>
                <p className="time">20:30 h</p>
                {/* <p>Terraza con vistas y aperitivos especiales</p> */}
              </div>
            </div>

            <div className="timeline-item bottom">
              <div className="timeline-card detail-card">
                <h3>{t.dancefloor}</h3>
                <p className="time">23:00 h</p>
                {/* <p>Con barra libre</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UBICACIÓN (mapa grande) */}
      <section className="location">
        <h2>{t.howToArrival}</h2>

        <div className="location-map-wrap">
          <div className="map-header">
            <h3>{t.realFactory}</h3>
            <p className="map-address">
              {t.address}
            </p>
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
        <h2>{t.giftsTitle}</h2>
        <div className="gifts-content">
          <p className="gifts-lead">
            {t.giftsLead}
          </p>

          <div className="gift-option transfer-box">
            <h4>{t.bankTransfer}</h4>

            <div className="iban-box">
              <code className="iban">{IBAN}</code>
              <button
                type="button"
                className="copy-iban"
                onClick={handleCopyIban}
              >
                {t.copyIban}
              </button>
            </div>

            <p className="iban-owner">
              <strong>{t.beneficiary}</strong> Sara García Álvarez · Giuseppe
              Sgobba
            </p>

            {copiedIban && <span className="copy-success">{t.copyIban} copiado</span>}
          </div>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES */}
      <section className="faq">
        <h2>{t.faqTitle}</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h4>{t.faq1Q}</h4>
            <p>{t.faq1A}</p>
          </div>
          <div className="faq-item">
            <h4>{t.faq2Q}</h4>
            <p>{t.faq2A}</p>
          </div>
          <div className="faq-item">
            <h4>{t.faq3Q}</h4>
            <p>{t.faq3A}</p>
          </div>
          <div className="faq-item">
            <h4>{t.faq4Q}</h4>
            <p>{t.faq4A}</p>
          </div>
        </div>
      </section>

      {/* RSVP removed: guests should confirm via email/phone (see footer) */}

      {/* FOOTER */}
      {/* Confirmar asistencia - prominent section */}
      <section className="confirm-contacts">
        <h2>{t.confirmAttendance}</h2>
        <p className="confirm-lead">
          {t.contactLead}
        </p>
        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-avatar">S</div>
            <div className="contact-body">
              <div className="contact-name">Sara</div>
              <a className="contact-link" href="tel:+34676754880">
                +34 676 754 880
              </a>
              <a className="contact-link" href="mailto:sarita9322@gmail.com">
                sarita9322@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-avatar">G</div>
            <div className="contact-body">
              <div className="contact-name">Giuseppe</div>
              <a className="contact-link" href="tel:+343393370415">
                +39 339 337 0415
              </a>
              <a
                className="contact-link"
                href="mailto:sgobba.giuseppe@yahoo.com"
              >
                sgobba.giuseppe@yahoo.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>
          {t.withOurLove}, <strong>Sara &amp; Giuseppe</strong>
        </p>
        <p className="footer-text">
          {t.thanks}
        </p>
      </footer>
      </div>
    </>
  );
}

export default App;
