// Dados dos arquivos - todos na pasta images/
const portfolioItems = [
  {
    id: 1,
    title: "Tendências da IA no Mercado de Tecnologia",
    filename: "/images/Tegra 05-09-24.jpeg",
    category: "apresentacao",
    description:
      "Apresentação sobre as tendências da Inteligência Artificial no mercado tecnológico.",
  },
  {
    id: 2,
    title: "Treinamento BD-Itix",
    filename: "../images/Treinamento_BD-Itix.jpeg",
    category: "apresentacao",
    description:
      "Material de treinamento sobre banco de dados pela empresa Itix.",
  },
  {
    id: 3,
    title: "Certificado Angular 8",
    filename: "images/aNGULAR 8.pdf",
    category: "certificado",
    description:
      "Certificado de conclusão do curso de Introdução ao Angular 8.",
  },
  {
    id: 4,
    title: "Certificado Bootstrap",
    filename: "images/bootstrap.pdf",
    category: "certificado",
    description:
      "Certificado de conclusão do curso de construção de páginas com Bootstrap.",
  },
  {
    id: 5,
    title: "Certificado Node.js",
    filename: "images/certificate.pdf",
    category: "certificado",
    description: "Certificado de conclusão da trilha de Introdução a Node.js.",
  },
  {
    id: 6,
    title: "Certificado Ciência de Dados",
    filename: "images/Ciencia de dados.pdf",
    category: "certificado",
    description:
      "Certificado de conclusão do curso de Introdução à Ciência de Dados.",
  },
  {
    id: 7,
    title: "Inteligência Coletiva e Colaboração",
    filename: "images/Edduz - 20-08 (2).jpeg",
    category: "apresentacao",
    description: "Slide sobre inteligência coletiva e colaboração.",
  },
  {
    id: 8,
    title: "Perfil Henrico Ibanez",
    filename: "images/Edduz - 20-08.jpeg",
    category: "apresentacao",
    description: "Apresentação do perfil profissional de Henrico Ibanez.",
  },
  {
    id: 9,
    title: "Flávia Freitas",
    filename: "images/Educação 17-10-24.jpeg",
    category: "apresentacao",
    description: "Slide com o nome de Flávia Freitas.",
  },
  {
    id: 10,
    title: "Certificado Flutter",
    filename: "images/FLUTTER.pdf",
    category: "certificado",
    description:
      "Certificado de conclusão do curso de primeiros passos com Flutter.",
  },
  {
    id: 11,
    title: "Hacker do Bem - Segurança Digital",
    filename: "images/Hacker do Bem 31-07-24.jpeg",
    category: "tecnologia",
    description:
      "Convite para palestra sobre segurança digital e hackers éticos.",
  },
  {
    id: 12,
    title: "Problemas Reais e Impactantes",
    filename: "images/IA - 23-05-24.jpeg",
    category: "apresentacao",
    description:
      "Slide sobre identificação de problemas impactantes nas empresas.",
  },
  {
    id: 13,
    title: "Certificado Internet das Coisas",
    filename: "images/Internet das Coisas.pdf",
    category: "certificado",
    description: "Certificado de conclusão do curso de Internet das Coisas.",
  },
  {
    id: 14,
    title: "Fatec",
    filename: "images/Itix - 04-05-23.jpeg",
    category: "apresentacao",
    description: "Slide com menção à Fatec.",
  },
  {
    id: 15,
    title: "Image Data Lake - Amaggi",
    filename: "images/Itix - 16-09.jpeg",
    category: "tecnologia",
    description:
      "Case sobre uso de Data Lake para armazenamento de imagens de satélite.",
  },
  {
    id: 16,
    title: "Sistema Anti-Fraude",
    filename: "images/Itix 16-09 (2).jpeg",
    category: "tecnologia",
    description: "Apresentação sobre uso de IA para detecção de fraudes.",
  },
  {
    id: 17,
    title: "Certificado JavaScript ES6",
    filename: "images/JS E6.pdf",
    category: "certificado",
    description:
      "Certificado de conclusão do curso de JavaScript ES6 essencial.",
  },
  {
    id: 18,
    title: "Live Eduzz - Organização",
    filename: "images/Live Edduz(Organizado) - 28-08-24.jpeg",
    category: "apresentacao",
    description: "Convite para palestra sobre organização pessoal.",
  },
  {
    id: 19,
    title: "Live Iochpe",
    filename: "images/Live Iochpe.jpeg",
    category: "apresentacao",
    description: "Informações sobre live da empresa Iochpe.",
  },
  {
    id: 20,
    title: "Desenvolvimento Low Code",
    filename: "images/LowCode 10-10-24.jpeg",
    category: "tecnologia",
    description: "Convite para palestra sobre desenvolvimento Low Code.",
  },
  {
    id: 21,
    title: "Certificado Node.js - Venturus",
    filename: "images/Mateus De Campos Oliveira - Introdução a Node.js.pdf",
    category: "certificado",
    description:
      "Certificado de conclusão da trilha de Introdução a Node.js pela Venturus.",
  },
  {
    id: 22,
    title: "Web 2.0 e Web 3.0 - Near X",
    filename: "images/Near X 05-11-24.jpeg",
    category: "tecnologia",
    description: "Apresentação sobre as diferenças entre Web 2.0 e Web 3.0.",
  },
  {
    id: 23,
    title: "Certificado Node.js Back-end",
    filename: "images/NODE JS.pdf",
    category: "certificado",
    description:
      "Certificado de conclusão do curso de Desenvolvimento back-end com Node.js.",
  },
  {
    id: 24,
    title: "Cursos Recomendados",
    filename: "images/Palestra Sede.jpeg",
    category: "apresentacao",
    description:
      "Slide com recomendações de cursos para desenvolvimento profissional.",
  },
  {
    id: 25,
    title: "Palestra Tegra - IA Generativa",
    filename: "images/Palestra Tegra 05 - 09 - 24.jpeg",
    category: "tecnologia",
    description:
      "Convite para palestra sobre tendências de TI e IA Generativa.",
  },
  {
    id: 26,
    title: "Certificado Python com IA",
    filename: "images/Python.pdf",
    category: "certificado",
    description:
      "Certificado de conclusão do curso de Python com desenvolvimento inteligente com IA.",
  },
  {
    id: 27,
    title: "Riscos e Segurança Digital - Parte 1",
    filename: "images/Segurança Digital 03-09(2).jpeg",
    category: "tecnologia",
    description:
      "Apresentação sobre proteção de dados e boas práticas de segurança digital.",
  },
  {
    id: 28,
    title: "Riscos e Segurança Digital - Parte 2",
    filename: "images/Segurança Digital 03-09.jpeg",
    category: "tecnologia",
    description: "Apresentação sobre identificação de e-mails de phishing.",
  },
  {
    id: 29,
    title: "Certificado Segurança Digital",
    filename: "images/Segurança Digital.pdf",
    category: "certificado",
    description:
      "Certificado de conclusão do curso de Segurança digital para o seu dia a dia.",
  },
  {
    id: 30,
    title: "Soft Skills - Itix (2)",
    filename: "images/SoftSkills - Itix (2).jpeg",
    category: "apresentacao",
    description: "Slide sobre soft skills e desenvolvimento profissional.",
  },
  {
    id: 31,
    title: "Soft Skills - Itix (3)",
    filename: "images/SoftSkills - Itix (3).jpeg",
    category: "apresentacao",
    description: "Slide sobre soft skills e desenvolvimento profissional.",
  },
];

// Função para renderizar os itens do portfólio
function renderPortfolioItems(filter = "all") {
  const container = document.getElementById("portfolio-container");
  container.innerHTML = "";

  const filteredItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  filteredItems.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.className = "portfolio-item";
    itemElement.setAttribute("data-category", item.category);

    // Determinar se é PDF ou imagem
    const isPDF = item.filename.toLowerCase().endsWith(".pdf");
    const thumbnailSrc = isPDF
      ? "https://cdn-icons-png.flaticon.com/512/337/337946.png" // Ícone de PDF
      : item.filename; // Usar a própria imagem como miniatura

    itemElement.innerHTML = `
            <div class="portfolio-category">${item.category}</div>
            <img src="${thumbnailSrc}" alt="${
      item.title
    }" class="portfolio-img" data-filename="${
      item.filename
    }" data-is-pdf="${isPDF}">
            <div class="portfolio-content">
                <h3 class="portfolio-title">${item.title}</h3>
                <p class="portfolio-desc">${item.description}</p>
                <p class="portfolio-filename">${item.filename.replace(
                  "images/",
                  ""
                )}</p>
            </div>
        `;

    container.appendChild(itemElement);
  });

  // Adicionar eventos de clique para abrir modal
  document.querySelectorAll(".portfolio-img").forEach((img) => {
    img.addEventListener("click", function () {
      const filename = this.getAttribute("data-filename");
      const isPDF = this.getAttribute("data-is-pdf") === "true";

      if (isPDF) {
        // Abrir PDF em nova aba
        window.open(filename, "_blank");
      } else {
        // Abrir imagem no modal
        openModal(filename);
      }
    });
  });
}

// Função para abrir modal com imagem
function openModal(filename) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");

  modalImg.src = filename;
  modal.style.display = "flex";
  document.body.style.overflow = "hidden"; // Previne scroll da página
}

// Função para fechar modal
function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Restaura scroll da página
}

// Menu mobile toggle
function setupMobileMenu() {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      navToggle.classList.toggle("active");
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        navToggle.classList.remove("active");
      });
    });
  }
}

// Form submission
function setupContactForm() {
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Simulação de envio do formulário
      const formData = new FormData(this);
      const name =
        formData.get("name") || document.getElementById("name").value;

      alert(
        `Obrigado, ${name}! Sua mensagem foi enviada com sucesso. Entrarei em contato em breve.`
      );
      this.reset();
    });
  }
}

// Header scroll effect
function setupHeaderScroll() {
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.style.background = "rgba(255, 255, 255, 0.98)";
      header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
    } else {
      header.style.background = "rgba(255, 255, 255, 0.95)";
      header.style.boxShadow = "0 1px 2px rgba(0, 0, 0, 0.05)";
    }
  });
}

// Inicialização
document.addEventListener("DOMContentLoaded", function () {
  // Renderizar todos os itens inicialmente
  renderPortfolioItems();

  // Adicionar eventos aos botões de filtro
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remover classe active de todos os botões
      document.querySelectorAll(".filter-btn").forEach((b) => {
        b.classList.remove("active");
      });

      // Adicionar classe active ao botão clicado
      this.classList.add("active");

      // Filtrar itens
      const filter = this.getAttribute("data-filter");
      renderPortfolioItems(filter);
    });
  });

  // Fechar modal ao clicar no X
  document.getElementById("closeModal").addEventListener("click", closeModal);

  // Fechar modal ao clicar fora da imagem
  document.getElementById("imageModal").addEventListener("click", function (e) {
    if (e.target === this) {
      closeModal();
    }
  });

  // Fechar modal com a tecla ESC
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeModal();
    }
  });

  // Configurações adicionais
  setupMobileMenu();
  setupContactForm();
  setupHeaderScroll();
});
