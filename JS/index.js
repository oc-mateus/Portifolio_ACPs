// Função para renderizar os itens do portfólio
function renderPortfolioItems(filter = 'all') {
    const container = document.getElementById('portfolio-container');
    container.innerHTML = '';
    
    const filteredItems = filter === 'all' 
        ? portfolioItems 
        : portfolioItems.filter(item => item.category === filter);
    
    filteredItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'portfolio-item';
        itemElement.setAttribute('data-category', item.category);
        
        // Determinar se é PDF ou imagem
        const isPDF = item.filename.toLowerCase().endsWith('.pdf');
        const thumbnailSrc = isPDF 
            ? 'https://cdn-icons-png.flaticon.com/512/337/337946.png' // Ícone de PDF
            : item.filename; // Usar a própria imagem como miniatura
        
        itemElement.innerHTML = `
            <div class="portfolio-category">${item.category}</div>
            <img src="${thumbnailSrc}" alt="${item.title}" class="portfolio-img" data-filename="${item.filename}" data-is-pdf="${isPDF}" onerror="this.src='https://via.placeholder.com/350x200/667eea/ffffff?text=Imagem+Não+Encontrada'">
            <div class="portfolio-content">
                <h3 class="portfolio-title">${item.title}</h3>
                <p class="portfolio-desc">${item.description}</p>
                <p class="portfolio-filename">${item.filename.replace('./Images/', '')}</p>
            </div>
        `;
        
        container.appendChild(itemElement);
    });
    
    // Adicionar eventos de clique para abrir modal
    document.querySelectorAll('.portfolio-img').forEach(img => {
        img.addEventListener('click', function() {
            const filename = this.getAttribute('data-filename');
            const isPDF = this.getAttribute('data-is-pdf') === 'true';
            
            if (isPDF) {
                // Abrir PDF em nova aba
                window.open(filename, '_blank');
            } else {
                // Abrir imagem no modal
                openModal(filename);
            }
        });
    });
}

// Função para abrir modal com imagem
function openModal(filename) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    
    modalImg.src = filename;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Função para fechar modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Menu mobile toggle
function setupMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
}

// Form submission
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = formData.get('name') || document.getElementById('name').value;
            
            alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso. Entrarei em contato em breve.`);
            this.reset();
        });
    }
}

// Header scroll effect
function setupHeaderScroll() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
        }
    });
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    renderPortfolioItems();
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => {
                b.classList.remove('active');
            });
            
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            renderPortfolioItems(filter);
        });
    });
    
    document.getElementById('closeModal').addEventListener('click', closeModal);
    
    document.getElementById('imageModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    setupMobileMenu();
    setupContactForm();
    setupHeaderScroll();
});