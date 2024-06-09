document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // Typing animation
    const text1 = "خوش آمدید";
    const text2 = "به سوی سلامت با حرکت صحیح";
    let index1 = 0;
    let index2 = 0;
    const typingSpeed = 150; // Adjust typing speed here

    function typeFirstText() {
        if (index1 < text1.length) {
            document.querySelector('#typed-text-1').textContent += text1.charAt(index1);
            index1++;
            setTimeout(typeFirstText, typingSpeed);
        } else {
            setTimeout(typeSecondText, typingSpeed); // Start typing second text after first is complete
        }
    }

    function typeSecondText() {
        if (index2 < text2.length) {
            document.querySelector('#typed-text-2').textContent += text2.charAt(index2);
            index2++;
            setTimeout(typeSecondText, typingSpeed);
        }
    }

    typeFirstText();
});
