document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    mobileToggle.addEventListener('click', function() {
        mainNav.style.display = mainNav.style.display === 'block' ? 'none' : 'block';
        if (mainNav.style.display === 'block') {
            mainNav.style.position = 'absolute';
            mainNav.style.top = '100%';
            mainNav.style.left = '0';
            mainNav.style.width = '100%';
            mainNav.style.backgroundColor = 'white';
            mainNav.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
            mainNav.style.padding = '20px';
            mainNav.querySelector('ul').style.flexDirection = 'column';
        }
    });

    // Donation card selection interaction
    const optionCards = document.querySelectorAll('.option-card');
    optionCards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove active style from all
            optionCards.forEach(c => {
                c.style.borderColor = '#ddd';
                c.style.boxShadow = 'none';
            });
            // Add active style to clicked
            card.style.borderColor = '#00aeef';
            card.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            
            // Trigger radio check
            const radio = card.querySelector('input[type="radio"]');
            radio.checked = true;
        });
    });
});
