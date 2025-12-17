document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            if (!formData.name || !formData.email || !formData.message) {
                showFormMessage('Molimo popunite sva obavezna polja.', 'error');
                return;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                showFormMessage('Molimo unesite validnu email adresu.', 'error');
                return;
            }
            
            submitForm(formData);
        });
    }
});

function submitForm(data) {
    const formMessage = document.getElementById('form-message');
    const submitButton = document.querySelector('.btn-submit');
    
    submitButton.disabled = true;
    submitButton.textContent = 'Šaljem...';
    
    setTimeout(() => {
        showFormMessage('Hvala vam! Vaša poruka je uspešno poslata. Odgovorićemo vam u najkraćem roku.', 'success');
        
        document.getElementById('contact-form').reset();
        
        submitButton.disabled = false;
        submitButton.textContent = 'Pošalji Poruku';
        
        console.log('Form submitted:', data);
    }, 1500);
}

function showFormMessage(message, type) {
    const formMessage = document.getElementById('form-message');
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
    
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('h3');
    
    if (question) {
        question.style.cursor = 'pointer';
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    }
});
