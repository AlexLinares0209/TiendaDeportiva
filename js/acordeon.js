let acordeon = document.getElementsByClassName("accordion-header");

for (let i = 0; i < acordeon.length; i++) {
    acordeon[i].addEventListener("click", function () {
        
        // Cerrar el acordeón anterior
        
        let activarPanel = document.querySelector(".accordion-panel.active");

        if (activarPanel && activarPanel.previousElementSibling !== this) {
            activarPanel.classList.remove("active");
            activarPanel.style.maxHeight = null;
            activarPanel.previousElementSibling.classList.remove("active");
            activarPanel.previousElementSibling.querySelector(".accordion-icon").classList.remove("fa-chevron-up");
            activarPanel.previousElementSibling.querySelector(".accordion-icon").classList.add("fa-chevron-down");
        }

        // Abrir o cerrar el acordeón seleccionado

        this.classList.toggle("active");
        let panel = this.nextElementSibling;

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            this.querySelector(".accordion-icon").classList.remove("fa-chevron-up");
            this.querySelector(".accordion-icon").classList.add("fa-chevron-down");
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            this.querySelector(".accordion-icon").classList.remove("fa-chevron-down");
            this.querySelector(".accordion-icon").classList.add("fa-chevron-up");
        }
        panel.classList.toggle("active");
    });
}