const faqs = document.querySelectorAll(".faq");
const icon = document.querySelectorAll("i")

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});