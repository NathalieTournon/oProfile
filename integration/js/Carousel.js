let Carousel = class Carousel {
    // On définit 2 propriétéspour nous permettre de les utiliser sans refaire de requête :
    buttons;
    slides;

    constructor() {
        this.getButtonsAndSlides();

        // Définir les event listener sur les boutons
        this.enableEventListenerOnButtons();
    }

    // Cette méthode permet de récupérer la liste
        // des boutons et des slides en tant que propriétés de notre objet
    getButtonsAndSlides() {
        this.slides = document.querySelectorAll('.carousel__content div');
        this.buttons = document.querySelectorAll('.carousel__navigation button');
        //console.log(this.buttons, this.slides);
    }

    enableEventListenerOnButtons() {
        this.buttons.forEach((button) => {
            if(button.dataset.action === "previous") {
                // Slide précédente
                button.addEventListener('click', () => {
                    this.previousSlide();
                });
            } else {
                // Slide suivante
                button.addEventListener('click', () => {
                    this.nextSlide();
                });
            }
        })
    }

    nextSlide() {
        console.log('Slide suivante');

        // On récupére la slide affichée
        const currentSlide = document.querySelector('.carousel__slide--show');

        // Je cache la slide en cours
        currentSlide.classList.remove('carousel__slide--show');
        currentSlide.classList.add('carousel__slide--hidden');

        // On vérifie si la slide suivante existe
        if(currentSlide.nextElementSibling) {
            // Elle existe et je l'affiche
            currentSlide.nextElementSibling.classList.remove('carousel__slide--hidden');
            currentSlide.nextElementSibling.classList.add('carousel__slide--show');
        } else {
        // S'il n'y a pas de slide suivante, on revient au début
        this.slides[0].classList.remove('carousel__slide--hidden');
        this.slides[0].classList.add('carousel__slide--show');
        }
    }

    previousSlide() {
        console.log('Slide précédente');
        // On doit récupérer la slide affichée
        const currentSlide = document.querySelector('.carousel__slide--show');

        // Je cache la slide en cours
        currentSlide.classList.remove('carousel__slide--show');
        currentSlide.classList.add('carousel__slide--hidden');

        // On vérifie si la slide précédente existe
        if(currentSlide.previousElementSlibling) {
            // Elle existe et je l'affiche
            currentSlide.previousElementSibling.classList.remove('carousel__slide--hidden');
            currentSlide.previousElementSibling.classList.add('carousel__slide--show');
        } else {
            // S'il n'y a pas de slide précédente, on revient au début
            // Calcul du dernier élément du tableau de slides
            const lastKey = this.slides.length - 1;
            this.slides[lastKey].classList.remove('carousel__slide--hidden');
            this.slides[lastKey].classList.add('carousel__slide--show');
        }
    }

};

export default Carousel;