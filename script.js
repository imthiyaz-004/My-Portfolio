document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for reaching out! I'll get back to you soon.");
        contactForm.reset();
    });
});
