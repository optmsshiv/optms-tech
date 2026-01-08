document.addEventListener("DOMContentLoaded", function () {
    const readToggleButtons = document.querySelectorAll(".read-toggle");
    
    readToggleButtons.forEach(button => {
        button.addEventListener("click", function () {
            const content = this.parentElement.querySelector(".additional-content");
            content.classList.toggle("show");
            
            if (content.classList.contains("show")) {
                this.textContent = "Read Less";
            } else {
                this.textContent = "Read More";
            }
        });
    });
});
