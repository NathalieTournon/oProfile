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
                button.addEventListener('click', this.previousSlide);
            } else {
                // Slide suivante
                button.addEventListener('click', this.nextSlide);
            }
        })
    }

    nextSlide() {
        console.log('Slide suivante');
        // On doit récupérer la slide affichée et sélectionner la suivante
        // On doit afficher la suivante et cacher toutes les autres
        // S'il n'y a pas de slide suivante, on revient au début
    }

    previousSlide() {
        console.log('Slide précédente');
        // On doit récupérer la slide affichée et sélectionner la précédente
        // On doit afficher la précédente et cacher toutes les autres
        // S'il n'y a pas de slide précédente, on revient à la fin
    }

    
    // Quand je clique qur le bouton suivant, ça affiche la slide suivante
    // et ça cache les autres

    // Quand je clique sur le bouton précédent, ça affiche la slide précédente
    // et ça cache les autres

   // Le carousel doit pouvoir boucler

};

export default Carousel;