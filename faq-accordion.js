// FAQ Accordion - Simple Version
console.log('FAQ Script loaded!');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded!');
    
    const faqItems = document.querySelectorAll('.faq-item');
    console.log('Found FAQ items:', faqItems.length);
    
    faqItems.forEach((item, index) => {
        console.log('Setting up item', index);
        const question = item.querySelector('h2');
        
        if (question) {
            question.addEventListener('click', function(e) {
                console.log('Clicked on question', index);
                e.preventDefault();
                e.stopPropagation();
                
                // Toggle active class
                const wasActive = item.classList.contains('active');
                item.classList.toggle('active');
                
                console.log('Item is now', wasActive ? 'closed' : 'open');
            });
            
            // Make it clear it's clickable
            question.style.cursor = 'pointer';
        }
    });
});
