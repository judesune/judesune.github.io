const profile = {
  name: "Juliano",
  badge: "Disponível para oportunidades",
  role: "Estudante de Ciência da Computação",
  summary: "Estudante, Developer Junior em formação, TypeScript, Vite, C++",
  intro:
    "Tenho como ambição entrar no mercado internacional, busco solidificar meu status de developer FullStack, um dia por vez.",
  focus:
    "Possuo interesse em interfaces web, aplicações full-stack, automação e criação de projetos.",
  photoAlt: "Foto",
};

const skills = [
  {
    title: "Linguagens",
    items: ["JavaScript", "C++", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Ferramentas",
    items: [
      "Git",
      "GitHub",
      "Node.js",
      "Bootstrap",
      "VS Code",
      "React",
      "Vite",
      "n8n",
    ],
  },
  {
    title: "Interesses",
    items: [
      "Aplicações Web",
      "APIs",
      "Machine Learning",
      "Estudo Prático",
      "Automatização",
    ],
  },
];

const projects = [
  {
    category: "ai web",
    type: "IA · Legal Tech · SaaS",
    title: "Creativus / Contractual",
    description:
      "Serviço para simplificar contratos e documentos jurídicos voltado ao mercado brasileiro. O projeto integra modelos IBM Granite via WatsonX para tornar linguagem legal mais acessível.",
    stack: ["Node.js", "IBM Granite", "Express", "JavaScript", "VertexAi"],
    links: [{ label: "GitHub", href: "https://github.com/judesune/Creativus" }],
  },
  {
    category: "web academic",
    type: "Web · Acadêmico",
    title: "Spotter",
    description:
      "Conceito de aplicativo para localizar e coordenar o resgate de pessoas em cenários de desastre usando geolocalização. Desenvolvido como projeto em grupo, com documentação técnica.",
    stack: ["Geolocalização", "Mobile", "UML"],
    links: [{ label: "Detalhes", href: "#" }],
  },
  {
    category: "java academic",
    type: "Java · Acadêmico",
    title: "Projetos de POO",
    description:
      "Conjunto de trabalhos de orientação a objetos em Java, com diagramas UML, princípios SOLID e padrões de projeto produzidos nas disciplinas de análise e design.",
    stack: ["Java", "UML", "SOLID"],
    links: [{ label: "GitHub", href: "https://github.com/judesune" }],
  },
  {
    category: "web",
    type: "Web · Portfólio",
    title: "Este Portfólio!",
    description:
      "Portfólio pessoal em HTML, CSS e JavaScript, Construído através de templates da web modificados  .",
    stack: ["HTML", "CSS", "JavaScript"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/judesune/judesune.github.io",
      },
      { label: "Ao vivo", href: "https://judesune.github.io" },
    ],
  },
];

const contacts = [
  {
    icon: "gh",
    label: "github.com/judesune",
    href: "https://github.com/judesune",
  },
  {
    icon: "@",
    label: "judesune@gmail.com",
    href: "mailto:judesune@gmail.com",
  },
  { icon: "in", label: "(em construção)", href: "https://www.linkedin.com" },
  { icon: "📱", label: "(44) 99998-6409", href: "https://wa.me/554499986409" },
];

const app = document.getElementById("app");

app.innerHTML = `
  <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
  <header class="nav">
    <div class="container nav-inner">
      <a class="brand" href="#inicio" aria-label="Ir para o início">
        <span class="brand-mark"></span>
        <span>Maringá, Paraná</span>
      </a>

      <ul class="nav-links" aria-label="Navegação principal">
        <li><a href="#inicio">Início</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#projetos">Projetos</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </div>

    <div class="container mobile-menu" id="mobile-menu">
      <a href="#inicio">Início</a>
      <a href="#sobre">Sobre</a>
      <a href="#projetos">Projetos</a>
      <a href="#contato">Contato</a>
    </div>
  </header>

  <main id="conteudo">
    <section class="hero" id="inicio">
      <div class="container hero-grid">
        <div class="reveal">
          <span class="kicker">${profile.badge}</span>
          <h1>${profile.name.replace(" ", "<br>")}</h1>
          <p class="hero-role">${profile.role}</p>
          <p class="hero-copy"><strong>${profile.summary}</strong><br>${profile.intro}<br>${profile.focus}</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="#projetos">Ver projetos</a>
            <a class="btn btn-secondary" href="#contato">Contato</a>
          </div>
        </div>

        <figure class="hero-card reveal" aria-label="Foto de perfil">
          <img class="hero-photo" src="assets/juliano.jpg" alt="${profile.photoAlt}">
          <figcaption class="hero-card-foot">
          </figcaption>
        </figure>
      </div>
    </section>

    <section class="section" id="sobre">
      <div class="container">
        <p class="section-label">Sobre mim</p>
        <h2 class="section-title">Minha Trajetória</h2>
        <p class="section-lead">
        </p>

        <div class="about-grid">
          <div class="card about-card reveal">
            <div class="about-text">
              <p>Ainda como Junior, busco montar um stack competente para o cenário atual do mercado. Flexíbilidade, interesse, estudo e curiosidade, usufruo dessas qualidades diariamente durante meu aprendizado.</p>
              <p>Busco evolução real, desenvolvimento de projetos e experiência profissional, sempre procurando ser útil para minha equipe.</p>
              <p><strong>Competências:</strong> Inglês fluente, Developer Junior em formação, JavaScript, React, C++.</p>
            </div>
          </div>

          <div class="card panel reveal">
            ${skills
              .map(
                (group) => `
              <div class="skill-block">
                <p class="skill-heading">${group.title}</p>
                <div class="tag-list">
                  ${group.items.map((item) => `<span class="tag">${item}</span>`).join("")}
                </div>
              </div>
            `,
              )
              .join("")}
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="projetos">
      <div class="container">
        <p class="section-label">Projetos</p>
        <h2 class="section-title">Do que ja participei</h2>
        <p class="section-lead">
          Projetos dos quais fiz parte durante meu período universitário, até o momento.
        </p>

        <div class="filter-row" id="filters">
          <button class="filter-btn active" data-filter="all" type="button">Todos</button>
          <button class="filter-btn" data-filter="ai" type="button">IA</button>
          <button class="filter-btn" data-filter="web" type="button">Web</button>
          <button class="filter-btn" data-filter="java" type="button">Java</button>
          <button class="filter-btn" data-filter="academic" type="button">Acadêmico</button>
        </div>

        <div class="projects-grid reveal" id="projects-grid">
          ${projects
            .map(
              (project) => `
            <article class="card project-card" data-category="${project.category}">
              <div class="project-top">
                <span>${project.type}</span>
              </div>
              <h3>${project.title}</h3>
              <p>${project.description}</p>
              <div class="project-footer">
                <div class="stack">
                  ${project.stack.map((item) => `<span>${item}</span>`).join("")}
                </div>
                <div class="project-links">
                  ${project.links.map((link) => `<a class="project-link" href="${link.href}" target="_blank" rel="noopener">${link.label} ↗</a>`).join("")}
                </div>
              </div>
            </article>
          `,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section" id="contato">
      <div class="container">
        <p class="section-label">Contato</p>
        <h2 class="section-title">Vamos conversar!</h2>
        <p class="section-lead">
          Entre em contato através destes canais:
        </p>

        <div class="contact-grid">
          <div class="card contact-card reveal">
            <p class="contact-copy">
              Aberto a oportunidades de estágio, projetos freelance e colaboração em desenvolvimento web.
            </p>

            <div class="social-list">
              ${contacts
                .map(
                  (contact) => `
                <a class="social-link" href="${contact.href}" target="${contact.href.startsWith("http") ? "_blank" : "_self"}" rel="noopener">
                  <span class="social-icon">${contact.icon}</span>
                  <span>${contact.label}</span>
                </a>
              `,
                )
                .join("")}
            </div>
          </div>

          <form class="card contact-card contact-form reveal" id="contact-form">
            <div class="field">
              <label class="label" for="nome">Nome</label>
              <input class="input" id="nome" name="nome" type="text" placeholder="Seu nome" />
            </div>
            <div class="field">
              <label class="label" for="email">E-mail</label>
              <input class="input" id="email" name="email" type="email" placeholder="seuemail@exemplo.com" />
            </div>
            <div class="field">
              <label class="label" for="mensagem">Mensagem</label>
              <textarea class="textarea" id="mensagem" name="mensagem" placeholder="Escreva sua mensagem"></textarea>
            </div>
            <button class="btn btn-primary submit" type="submit">Enviar mensagem</button>
            <p class="status" id="status" aria-live="polite"></p>
          </form>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-links">
      </div>
    </div>
  </footer>
`;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

const filterBtns = Array.from(document.querySelectorAll(".filter-btn"));
const projectCards = Array.from(document.querySelectorAll(".project-card"));

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    filterBtns.forEach((item) => item.classList.remove("active"));
    btn.classList.add("active");

    projectCards.forEach((card) => {
      const categories = card.dataset.category || "";
      const visible = filter === "all" || categories.includes(filter);
      card.classList.toggle("hidden", !visible);
    });
  });
});

const form = document.getElementById("contact-form");
const status = document.getElementById("status");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  status.textContent =
    "Formulário pronto. Conecte Formspree ou EmailJS para envio real.";
});
