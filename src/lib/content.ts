export type Lang = "es" | "en";

export const LANGS: Lang[] = ["es", "en"];

export const SITE = {
  name: "NSAT Computers",
  domain: "nsatcomputers.infinityfreeapp.com",
  url: "https://nsatwebdesign.vercel.app",
  portfolio: "https://nsat-portfolio.vercel.app",
  mainSite: "https://nsatcomputers.infinityfreeapp.com",
  whatsapp: "https://wa.me/584123591181",
  phone: "+58 412-3591181",
  phoneHref: "tel:+584123591181",
  email: "nsatcomputers@gmail.com",
  address: "Porlamar, Nueva Esparta, Venezuela",
  hours: {
    es: "Lunes a viernes: 8:00 a 17:00 · Sábados: 8:00 a 12:00",
    en: "Monday to Friday: 8:00 to 17:00 · Saturdays: 8:00 to 12:00",
  },
};

/* ------------------------------------------------------------------ */
/*  Imágenes (Pixabay — descargadas y re-hospedadas en /public/images) */
/* ------------------------------------------------------------------ */
export const IMAGES = {
  hero: { src: "/images/hero-code.jpg", alt: "Código en pantalla", credit: "by Pexels via Pixabay" },
  coding: { src: "/images/coding-macbook.jpg", alt: "Programando en un MacBook", credit: "by StockSnap via Pixabay" },
  tecnico: { src: "/images/tecnico.jpg", alt: "Técnico reparando un equipo", credit: "by JESHOOTS-com via Pixabay" },
  servidores: { src: "/images/servidores.jpg", alt: "Servidores y red", credit: "by Tho-Ge via Pixabay" },
  escritorio: { src: "/images/escritorio.jpg", alt: "Espacio de trabajo", credit: "by lukasbieri via Pixabay" },
  ingeniero: { src: "/images/ingeniero.jpg", alt: "Ingeniero trabajando", credit: "by This_is_Engineering via Pixabay" },
} as const;

export const STACK = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP",
  "Framer Motion", "WordPress", "Vercel", "Node.js", "REST APIs",
];

export const DEMOS = [
  { slug: "kinesis-studio", name: "Kinesis Studio", sector: { es: "Agencia de video", en: "Video agency" } },
  { slug: "velocita-auto", name: "Velocita Auto", sector: { es: "Concesionario premium", en: "Premium car dealer" } },
  { slug: "aura-belleza", name: "Aura Belleza", sector: { es: "Salón & Spa", en: "Salon & Spa" } },
  { slug: "meridian-brand", name: "Meridian Brand", sector: { es: "Agencia creativa", en: "Creative agency" } },
  { slug: "terra-arch", name: "Terra Arquitectura", sector: { es: "Arquitectura", en: "Architecture" } },
  { slug: "terravista-realty", name: "Terravista Realty", sector: { es: "Inmobiliaria", en: "Real estate" } },
  { slug: "eduardo-aloy", name: "Eduardo Aloy", sector: { es: "Cliente real", en: "Real client" } },
];

export type Copy = (typeof COPY)["es"];

/** Service card — only the first one carries an outbound link. */
export type ServiceItem = {
  icon: string;
  title: string;
  text: string;
  link?: { label: string; href: string };
};

export const COPY = {
  es: {
    meta: {
      title: "Desarrollo Web Profesional",
      description:
        "NSAT Computers: sitios web rápidos, bilingües y modernos en Next.js — tiendas, portafolios y páginas corporativas en Porlamar, Nueva Esparta.",
    },
    nav: {
      servicios: "Servicios",
      proceso: "Proceso",
      portafolio: "Portafolio",
      nosotros: "Nosotros",
      faq: "FAQ",
      contacto: "Contacto",
      cta: "Cotizar",
      lang: "EN",
      langLabel: "Switch to English",
      menu: "Menú",
      close: "Cerrar",
    },
    hero: {
      badge: "Desarrollo web a medida",
      title1: "Tu negocio,",
      title2: "compilado",
      title3: "para crecer.",
      subtitle:
        "Diseñamos y desarrollamos sitios web modernos, rápidos y bilingües con Next.js: tiendas, portafolios y páginas que convierten. Porlamar, Nueva Esparta.",
      ctaPrimary: "Cotizar mi web",
      ctaSecondary: "Ver el portafolio",
      terminalTitle: "nsat — instalador",
      stats: [
        { value: "7", label: "demos en producción" },
        { value: "95+", label: "Lighthouse" },
        { value: "48h", label: "primera versión" },
        { value: "ES/EN", label: "100% bilingüe" },
      ],
      scroll: "Desliza",
    },
    marquee: { label: "Construido con" },
    services: {
      kicker: "// servicios",
      title: "Todo lo que tu web necesita",
      subtitle:
        "Desde la primera idea hasta el sitio en línea. Cada proyecto empieza con un alcance claro y una cotización sin sorpresas.",
      items: [
        {
          icon: "globe",
          title: "Desarrollo Web",
          text: "Sitios modernos en Next.js y WordPress: tiendas, portafolios, páginas corporativas e integraciones a medida.",
          link: { label: "Ver detalles", href: "https://nsatcomputers.infinityfreeapp.com/desarrollo-web/" },
        },
        { icon: "cart", title: "Tiendas online", text: "E-commerce con catálogo, carrito, pagos y envíos, listo para vender desde el primer día." },
        { icon: "search", title: "SEO y rendimiento", text: "Velocidad, posicionamiento técnico y datos estructurados para que te encuentren en Google." },
        { icon: "cpu", title: "Aplicaciones a medida", text: "Portales y paneles con bases de datos, usuarios y accesos seguros para tu operación." },
        { icon: "shield", title: "Mantenimiento web", text: "Actualizaciones, respaldos y mejoras periódicas para que tu sitio nunca caiga." },
        { icon: "spark", title: "Automatización", text: "Formularios, pagos y flujos automáticos que conectan tu web con tus procesos internos." },
      ] as ServiceItem[],
      credit: "Fotos: Pixabay",
    },
    process: {
      kicker: "// proceso",
      title: "Cómo trabajamos",
      subtitle: "Cuatro pasos, cero sorpresas. Siempre sabes qué sigue, cuánto cuesta y cuándo entrega.",
      steps: [
        { title: "Cuéntanos", text: "Nos escribes por WhatsApp o correo describiendo qué necesitas: tienda, portafolio, página de servicios o integración." },
        { title: "Propuesta", text: "Entendemos el uso, el público y el objetivo. Recibes alcance, tiempos y costo, sin compromiso." },
        { title: "Construcción", text: "Empezamos con una estructura base y revisamos juntos antes de seguir. Trabajas sobre un link de preview." },
        { title: "Entrega + soporte", text: "Publicamos el sitio con instrucciones para gestionarlo. Los cambios posteriores se coordinan por WhatsApp." },
      ],
    },
    why: {
      kicker: "// por qué nsat",
      title: "Trabajo claro, sin tecnicismos",
      subtitle: "Creemos que un buen trabajo no termina cuando el sitio se publica: termina cuando entiendes cómo funciona.",
      items: [
        { title: "Alcance honesto", text: "Antes de escribir una línea de código te explicamos las opciones y qué implica cada una, sin sorpresas." },
        { title: "Confidencialidad", text: "Accedemos solo a lo necesario y no conservamos copias de tus archivos o datos." },
        { title: "Respuesta ágil", text: "La primera versión llega en el menor tiempo posible, con un link de preview para que la revises." },
        { title: "Atención cercana", text: "Hogares, profesionales y empresas con el mismo nivel de cuidado, en español y en inglés." },
      ],
      imageAlt: "Espacio de trabajo de NSAT Computers",
    },
    portfolio: {
      kicker: "// portafolio",
      title: "Siete demos. Siete industrias.",
      subtitle:
        "Cada demo es una página completa y funcional corriendo en producción real sobre Vercel, con sus propias animaciones e imágenes royalty-free.",
      cta: "Abrir NSAT Portfolios",
      note: "Incluye Kinesis, Velocita, Aura, Meridian, Terra, Terravista y Eduardo Aloy.",
      built: "Construido con Next.js, Framer Motion y GSAP",
      imageAlt: "Código de un proyecto web",
    },
    about: {
      kicker: "// nosotros",
      title: "NSAT Computers",
      subtitle:
        "Equipo de desarrollo web e ingeniería informática con base en Porlamar, Nueva Esparta. Trabajamos con hogares, profesionales y empresas que necesitan una presencia en línea que funcione, sin complicaciones.",
      misionTitle: "Misión",
      mision: "Brindar desarrollo web confiable y accesible, combinando código claro, herramientas actuales y acompañamiento cercano.",
      visionTitle: "Visión",
      vision: "Ser la referencia local en desarrollo web para hogares y pequeñas empresas, reconocida por su transparencia y calidad.",
      valoresTitle: "Valores",
      valores: "Honestidad, responsabilidad, confidencialidad y respeto por el tiempo y el presupuesto de cada cliente.",
      bullets: [
        "Alcance claro antes de empezar.",
        "Cotización por escrito y sin sorpresas.",
        "Confidencialidad sobre archivos y datos.",
        "Buenas prácticas de velocidad y seguridad.",
        "Seguimiento después de la entrega.",
      ],
      imageAlt: "Ingeniero trabajando en un proyecto web",
    },
    faq: {
      kicker: "// faq",
      title: "Preguntas frecuentes",
      items: [
        { q: "¿Cuánto tarda un sitio web?", a: "Una landing o página de servicios: entre 3 y 7 días. Un sitio completo con tienda o múltiples secciones: 2 a 3 semanas, según alcance y contenido." },
        { q: "¿Cuánto cuesta?", a: "Cada proyecto se cotiza según alcance, pero trabajamos con precios accesibles para pymes y profesionales independientes. Recibes alcance, tiempos y costo por escrito antes de autorizar." },
        { q: "¿El sitio queda en español e inglés?", a: "Sí. Todos los proyectos bilingües se entregan con las dos versiones completas, conmetadatos y URLs propias para cada idioma." },
        { q: "¿Dónde queda hospedado el sitio?", a: "Se despliega en Vercel, con HTTPS, dominio propio y CDN global. Puede ir a tu cuenta o a la nuestra según el plan de soporte." },
        { q: "¿Puedo editar el contenido yo mismo?", a: "Sí. Integramos un CMS o un sistema sencillo para que actualices textos e imágenes sin tocar código, y te dejamos instrucciones al entregar." },
        { q: "¿Ofrecen soporte después de la entrega?", a: "Sí. Coordinamos cambios, mantenimiento y mejoras por WhatsApp, de forma puntual o con plan periódico." },
        { q: "¿En qué tecnologías trabajan?", a: "Next.js y React para sitios modernos y rápidos, y WordPress cuando prefieres administrarlo tú mismo. Recomendamos la opción según tu caso." },
      ],
    },
    contact: {
      kicker: "// contacto",
      title: "¿Empezamos tu proyecto?",
      subtitle: "Cuéntanos qué necesitas y te respondemos con propuesta, tiempo y costo. Sin compromiso.",
      form: {
        name: "Nombre",
        email: "Email",
        message: "Mensaje",
        messagePlaceholder: "Cuéntanos qué necesitas: tienda, portafolio, página de servicios…",
        submit: "Enviar mensaje",
        sending: "Enviando…",
        ok: "¡Recibido! Te contactamos pronto.",
        error: "No se pudo enviar. Escríbenos por WhatsApp.",
        whatsapp: "Escribir por WhatsApp",
      },
      infoTitle: "O directamente",
      hoursLabel: "Horario",
      addressLabel: "Ubicación",
      emailLabel: "Email",
      phoneLabel: "Teléfono",
      imageAlt: "Proyecto web de NSAT Computers",
    },
    footer: {
      tagline: "Desarrollo web, tiendas online, automatización y mantenimiento web para hogares y empresas.",
      linksTitle: "Enlaces",
      legalTitle: "Legal",
      servicesTitle: "Servicios",
      privacy: "Política de privacidad",
      terms: "Términos y condiciones",
      mainSite: "Sitio principal",
      portfolio: "NSAT Portfolios",
      rights: "Todos los derechos reservados.",
      made: "Hecho con Next.js y Vercel",
      langLink: "English version",
      credits: "Fotografías de Pixabay",
    },
    privacy: {
      title: "Política de privacidad",
      lead: "Cómo recopilamos, usamos y protegemos los datos de clientes y visitantes.",
      intro:
        "Esta política explica qué datos recopilamos cuando visitas este sitio o solicitas un servicio, para qué los usamos y cómo puedes ejercer tus derechos. Última actualización: octubre de 2026.",
      back: "Volver al inicio",
      sections: [
        {
          title: "Responsable del tratamiento",
          body: [
            "NSAT Computers, con domicilio en Porlamar, Nueva Esparta, Venezuela. Para consultas sobre privacidad puedes usar estos canales:",
            "Teléfono: +58 412-3591181 · Correo: nsatcomputers@gmail.com · Horario: lunes a viernes de 8:00 a 17:00 y sábados de 8:00 a 12:00.",
          ],
        },
        {
          title: "Datos que recopilamos",
          body: [
            "Datos de contacto que nos proporcionas: nombre, teléfono, correo y mensaje.",
            "Datos necesarios para una compra: dirección de entrega, datos de facturación y detalles del pedido.",
            "Datos técnicos del equipo cuando contratas un servicio, limitados a lo necesario para el diagnóstico.",
            "Datos de navegación técnicos generados por el servidor, como dirección IP, navegador y páginas visitadas.",
            "En este sitio, el formulario de contacto envía tu nombre, correo electrónico y mensaje a nuestro servidor mediante el proveedor de correo Resend, exclusivamente para responder tu consulta.",
          ],
        },
        {
          title: "Para qué los usamos",
          body: [
            "Responder consultas y cotizaciones.",
            "Prestar y dar seguimiento a servicios técnicos.",
            "Procesar pedidos, pagos y entregas de la tienda.",
            "Cumplir obligaciones legales y contables.",
            "Mejorar la seguridad y el funcionamiento del sitio.",
          ],
        },
        {
          title: "Base legal",
          body: [
            "Tratamos los datos con tu consentimiento al enviarnos una consulta, para ejecutar un contrato cuando compras o contratas un servicio, y para cumplir obligaciones legales aplicables.",
          ],
        },
        {
          title: "Cookies",
          body: [
            "El sitio puede usar cookies técnicas necesarias para su funcionamiento, como las que recuerdan tu idioma preferido o tu consentimiento de cookies.",
            "No utilizamos cookies de publicidad comportamental de terceros. Puedes bloquear o eliminar cookies desde tu navegador, aunque algunas funciones podrían dejar de funcionar.",
            "En el sitio principal de NSAT Computers, WordPress y WooCommerce emplean cookies técnicas de carrito y sesión. El aviso de cookies de ese sitio se gestiona con el plugin Complianz.",
          ],
        },
        {
          title: "Terceros",
          body: [
            "Podemos compartir datos con proveedores de alojamiento, pasarelas de pago, servicios de mensajería y transporte, únicamente para prestar el servicio.",
            "Este sitio utiliza Vercel para el alojamiento y Resend para el envío de correos de contacto.",
            "WhatsApp y Google Maps tienen sus propias políticas de privacidad cuando decides abrir sus enlaces.",
          ],
        },
        {
          title: "Conservación",
          body: [
            "Conservamos los datos de contacto mientras sean necesarios para atender la solicitud y los datos de compras durante el tiempo exigido por obligaciones fiscales y contables. La información técnica se conserva por periodos limitados.",
          ],
        },
        {
          title: "Seguridad",
          body: [
            "Aplicamos medidas razonables de seguridad técnica y organizativa para proteger la información. Ningún sistema es completamente infalible; si detectamos un incidente relevante, actuaremos para contenerlo y notificaremos cuando corresponda.",
          ],
        },
        {
          title: "Tus derechos",
          body: [
            "Puedes solicitar acceso, corrección, actualización o eliminación de tus datos, así como oponerte a determinados tratamientos.",
            "Escríbenos con el asunto “Privacidad” a nsatcomputers@gmail.com y verificaremos tu identidad antes de responder.",
          ],
        },
        {
          title: "Cambios",
          body: [
            "Podemos actualizar esta política para reflejar cambios legales o de funcionamiento. La fecha de la última actualización aparece al inicio de la página.",
          ],
        },
      ],
    },
  },

  en: {
    meta: {
      title: "Web Development",
      description:
        "NSAT Computers: fast, bilingual, modern websites built with Next.js — stores, portfolios and corporate pages in Porlamar, Nueva Esparta.",
    },
    nav: {
      servicios: "Services",
      proceso: "Process",
      portafolio: "Portfolio",
      nosotros: "About",
      faq: "FAQ",
      contacto: "Contact",
      cta: "Get a quote",
      lang: "ES",
      langLabel: "Cambiar a español",
      menu: "Menu",
      close: "Close",
    },
    hero: {
      badge: "Custom web development",
      title1: "Your business,",
      title2: "compiled",
      title3: "to grow.",
      subtitle:
        "We design and build modern, fast, bilingual websites with Next.js: stores, portfolios and pages that convert. Porlamar, Nueva Esparta.",
      ctaPrimary: "Get my quote",
      ctaSecondary: "See the portfolio",
      terminalTitle: "nsat — setup",
      stats: [
        { value: "7", label: "demos in production" },
        { value: "95+", label: "Lighthouse" },
        { value: "48h", label: "first version" },
        { value: "ES/EN", label: "fully bilingual" },
      ],
      scroll: "Scroll",
    },
    marquee: { label: "Built with" },
    services: {
      kicker: "// services",
      title: "Everything your website needs",
      subtitle:
        "From the first idea to the live site. Every project starts with clear scope and a surprise-free quote.",
      items: [
        {
          icon: "globe",
          title: "Web Development",
          text: "Modern sites in Next.js and WordPress: stores, portfolios, corporate pages and custom integrations.",
          link: { label: "See details", href: "https://nsatcomputers.infinityfreeapp.com/desarrollo-web/" },
        },
        { icon: "cart", title: "Online stores", text: "E-commerce with catalogue, cart, payments and shipping, ready to sell from day one." },
        { icon: "search", title: "SEO & performance", text: "Speed, technical SEO and structured data so people can find you on Google." },
        { icon: "cpu", title: "Custom apps", text: "Portals and dashboards with databases, user accounts and secure access for your operation." },
        { icon: "shield", title: "Web maintenance", text: "Updates, backups and periodic improvements so your site never goes down." },
        { icon: "spark", title: "Automation", text: "Forms, payments and automated flows that connect your site with your internal processes." },
      ] as ServiceItem[],
      credit: "Photos: Pixabay",
    },
    process: {
      kicker: "// process",
      title: "How we work",
      subtitle: "Four steps, zero surprises. You always know what's next, what it costs and when it ships.",
      steps: [
        { title: "Tell us", text: "Message us on WhatsApp or email describing what you need: a store, a portfolio, a services page or an integration." },
        { title: "Proposal", text: "We understand the use, the audience and the goal. You get scope, timeline and cost, with no strings attached." },
        { title: "Build", text: "We start from a base structure and review it together before moving on. You work on a live preview link." },
        { title: "Launch + support", text: "We publish the site with instructions to manage it. Later changes are coordinated over WhatsApp." },
      ],
    },
    why: {
      kicker: "// why nsat",
      title: "Clear work, no jargon",
      subtitle: "We believe a good job doesn't end when the site goes live: it ends when you understand how it works.",
      items: [
        { title: "Honest scope", text: "Before writing a single line of code we explain your options and what each one involves, with no surprises." },
        { title: "Confidentiality", text: "We access only what's needed and never keep copies of your files or data." },
        { title: "Fast response", text: "The first version arrives as quickly as possible, with a preview link for you to review." },
        { title: "Close attention", text: "Homes, professionals and businesses get the same level of care, in Spanish and in English." },
      ],
      imageAlt: "NSAT Computers workspace",
    },
    portfolio: {
      kicker: "// portfolio",
      title: "Seven demos. Seven industries.",
      subtitle:
        "Every demo is a complete, functional page running in real production on Vercel, with its own animations and royalty-free imagery.",
      cta: "Open NSAT Portfolios",
      note: "Includes Kinesis, Velocita, Aura, Meridian, Terra, Terravista and Eduardo Aloy.",
      built: "Built with Next.js, Framer Motion and GSAP",
      imageAlt: "Code from a web project",
    },
    about: {
      kicker: "// about",
      title: "NSAT Computers",
      subtitle:
        "A web development and IT engineering team based in Porlamar, Nueva Esparta. We work with homes, professionals and businesses that need an online presence that works, without the hassle.",
      misionTitle: "Mission",
      mision: "Provide reliable and accessible web development, combining clean code, current tools and close guidance.",
      visionTitle: "Vision",
      vision: "To be the local reference in web development for homes and small businesses, recognised for transparency and quality.",
      valoresTitle: "Values",
      valores: "Honesty, responsibility, confidentiality and respect for every client's time and budget.",
      bullets: [
        "Clear scope before we start.",
        "A written quote with no surprises.",
        "Confidentiality over your files and data.",
        "Solid speed and security practices.",
        "Follow-up after launch.",
      ],
      imageAlt: "Engineer working on a web project",
    },
    faq: {
      kicker: "// faq",
      title: "Frequently asked questions",
      items: [
        { q: "How long does a website take?", a: "A landing or services page: 3 to 7 days. A full site with a store or multiple sections: 2 to 3 weeks, depending on scope and content." },
        { q: "How much does it cost?", a: "Every project is quoted based on scope, but we work with SMB-friendly prices. You get scope, timeline and cost in writing before authorising anything." },
        { q: "Does the site come in Spanish and English?", a: "Yes. Bilingual projects ship with both complete versions, plus metadata and their own URL for each language." },
        { q: "Where is the site hosted?", a: "It deploys on Vercel with HTTPS, a custom domain and a global CDN. It can live on your account or ours, depending on the support plan." },
        { q: "Can I edit the content myself?", a: "Yes. We integrate a CMS or a simple system so you can update text and images without touching code, and we leave instructions at handover." },
        { q: "Do you offer support after launch?", a: "Yes. We handle changes, maintenance and improvements over WhatsApp, either ad hoc or on a periodic plan." },
        { q: "Which technologies do you use?", a: "Next.js and React for modern, fast sites, and WordPress when you'd rather manage it yourself. We recommend the option that fits your case." },
      ],
    },
    contact: {
      kicker: "// contact",
      title: "Shall we start your project?",
      subtitle: "Tell us what you need and we'll reply with a proposal, timeline and cost. No strings attached.",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        messagePlaceholder: "Tell us what you need: store, portfolio, services page…",
        submit: "Send message",
        sending: "Sending…",
        ok: "Got it! We'll be in touch soon.",
        error: "Couldn't send. Message us on WhatsApp instead.",
        whatsapp: "Chat on WhatsApp",
      },
      infoTitle: "Or straight to us",
      hoursLabel: "Hours",
      addressLabel: "Location",
      emailLabel: "Email",
      phoneLabel: "Phone",
      imageAlt: "NSAT Computers web project",
    },
    footer: {
      tagline: "Web development, online stores, automation and web maintenance for homes and businesses.",
      linksTitle: "Links",
      legalTitle: "Legal",
      servicesTitle: "Services",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      mainSite: "Main site",
      portfolio: "NSAT Portfolios",
      rights: "All rights reserved.",
      made: "Built with Next.js and Vercel",
      langLink: "Versión en español",
      credits: "Photography from Pixabay",
    },
    privacy: {
      title: "Privacy Policy",
      lead: "How we collect, use and protect client and visitor data.",
      intro:
        "This policy explains what data we collect when you visit this site or request a service, what we use it for and how you can exercise your rights. Last updated: October 2026.",
      back: "Back to home",
      sections: [
        {
          title: "Data controller",
          body: [
            "NSAT Computers, located in Porlamar, Nueva Esparta, Venezuela. For privacy enquiries you can use these channels:",
            "Phone: +58 412-3591181 · Email: nsatcomputers@gmail.com · Hours: Monday to Friday 8:00–17:00 and Saturday 8:00–12:00.",
          ],
        },
        {
          title: "Data we collect",
          body: [
            "Contact details you provide: name, phone, email and message.",
            "Data required for a purchase: delivery address, billing details and order information.",
            "Device data when you contract a service, limited to what is necessary for diagnosis.",
            "Technical navigation data generated by the server, such as IP address, browser and pages visited.",
            "On this site, the contact form sends your name, email and message to our server through the email provider Resend, solely to answer your enquiry.",
          ],
        },
        {
          title: "How we use it",
          body: [
            "To answer enquiries and quotes.",
            "To provide and follow up on technical services.",
            "To process orders, payments and store deliveries.",
            "To meet legal and accounting obligations.",
            "To improve the security and operation of the site.",
          ],
        },
        {
          title: "Legal basis",
          body: [
            "We process data with your consent when you send us an enquiry, to perform a contract when you buy or contract a service, and to comply with applicable legal obligations.",
          ],
        },
        {
          title: "Cookies",
          body: [
            "The site may use technical cookies required for its operation, such as remembering your preferred language or your cookie consent.",
            "We do not use third-party behavioural advertising cookies. You can block or delete cookies from your browser, although some features may stop working.",
            "On the main NSAT Computers site, WordPress and WooCommerce use technical cart and session cookies. That site's cookie notice is handled with the Complianz plugin.",
          ],
        },
        {
          title: "Third parties",
          body: [
            "We may share data with hosting providers, payment gateways, messaging and courier services, only in order to deliver the service.",
            "This site uses Vercel for hosting and Resend to deliver contact emails.",
            "WhatsApp and Google Maps have their own privacy policies when you choose to open their links.",
          ],
        },
        {
          title: "Retention",
          body: [
            "We keep contact data for as long as needed to handle the request, and purchase data for the period required by tax and accounting obligations. Technical information is kept for limited periods.",
          ],
        },
        {
          title: "Security",
          body: [
            "We apply reasonable technical and organisational security measures to protect the information. No system is completely infallible; if we detect a relevant incident we will act to contain it and notify where appropriate.",
          ],
        },
        {
          title: "Your rights",
          body: [
            "You may request access, correction, update or deletion of your data, as well as object to certain processing.",
            "Email us with the subject “Privacy” at nsatcomputers@gmail.com and we will verify your identity before replying.",
          ],
        },
        {
          title: "Changes",
          body: [
            "We may update this policy to reflect legal or operational changes. The date of the last update appears at the top of the page.",
          ],
        },
      ],
    },
  },
};

/**
 * Compile-time guard: `en` must expose exactly the same shape as `es`,
 * so a missing translation fails the build instead of shipping a hole.
 */
const _parity: Record<Lang, Copy> = COPY;
void _parity;

export function getCopy(lang: Lang): Copy {
  return COPY[lang];
}
