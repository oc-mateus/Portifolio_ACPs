// Função para filtrar os itens
      function filterPortfolio(category) {
        const items = document.querySelectorAll('.portfolio-item');
        
        items.forEach(item => {
          if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
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

      // Configuração dos eventos
      document.addEventListener('DOMContentLoaded', function() {
        // Filtros
        document.querySelectorAll('.filter-btn').forEach(btn => {
          btn.addEventListener('click', function() {
            // Remover classe active de todos os botões
            document.querySelectorAll('.filter-btn').forEach(b => {
              b.classList.remove('active');
            });
            
            // Adicionar classe active ao botão clicado
            this.classList.add('active');
            
            // Filtrar itens
            const filter = this.getAttribute('data-filter');
            filterPortfolio(filter);
          });
        });

        // Modal para imagens
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

        // Fechar modal
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

        // Menu mobile (se necessário)
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (navToggle) {
          navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
          });
        }
      });