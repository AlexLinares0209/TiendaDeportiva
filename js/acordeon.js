var acc = document.getElementsByClassName("accordion-header");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                // Cerrar el acordeón anterior
                var activePanel = document.querySelector(".accordion-panel.active");
                if (activePanel && activePanel.previousElementSibling !== this) {
                    activePanel.classList.remove("active");
                    activePanel.style.maxHeight = null;
                    activePanel.previousElementSibling.classList.remove("active");
                    activePanel.previousElementSibling.querySelector(".accordion-icon").classList.remove("fa-chevron-up");
                    activePanel.previousElementSibling.querySelector(".accordion-icon").classList.add("fa-chevron-down");
                }

                // Abrir o cerrar el acordeón seleccionado
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
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