document.addEventListener('DOMContentLoaded', function() {
    // Анимация при прокрутке
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .process-step, .testimonial-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Инициализация анимации
    const animatedElements = document.querySelectorAll('.service-card, .process-step, .testimonial-card');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Запустить при загрузке
    
    // Мобильное меню
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav ul');
    
    mobileMenuBtn.addEventListener('click', function() {
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });
    
    // Закрытие меню при клике на ссылку
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                nav.style.display = 'none';
            }
        });
    });
    
    // Обработка формы
    const form = document.getElementById('consultation-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Здесь можно добавить отправку формы на сервер
            // Например, через fetch или XMLHttpRequest
            
            // Временное сообщение об успехе
            alert('Ваша заявка отправлена! Я свяжусь с вами в ближайшее время.');
            form.reset();
        });
    }
});