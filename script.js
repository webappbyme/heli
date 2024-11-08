function calculateMortgage() {
    const amount = parseFloat(document.getElementById('amount').value);
    const interest = parseFloat(document.getElementById('interest').value) / 100 / 12;
    const years = parseFloat(document.getElementById('years').value) * 12;

    const x = Math.pow(1 + interest, years);
    const monthly = (amount * x * interest) / (x - 1);

    document.getElementById('result').textContent = 
        `Estimated Monthly Payment: $${monthly.toFixed(2)}`;
}

// Scroll Animation for Images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.property-image, .about-image');
    
    function animateOnScroll() {
        images.forEach(img => {
            const rect = img.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            
            if (rect.top <= windowHeight - 50) {
                img.classList.add('scroll-animate');
            }
        });
    }
    
    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Trigger once on load
});