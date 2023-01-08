// Création d'un Whack(ici mais ça peut être autre chose) contenant la classe JS
let Whack = class Whack {
    // A l'instanciation de ma classe,
    // je veux afficher un gif sur ma page
    constructor() {
        console.log('Le jeu commence');
        // Cette syntaxe () => {} permet de dire à JS qu'il ne faut pas
        // changer le contexte de this
        setInterval(() => {
            this.createGif();
    }, 50000);
        
    }
    createGif(){

        const height = window.innerHeight;
        const width = window.innerWidth;
        console.log(height, width);
        // On crée un objet qui n'est pas présent dans le DOM
        const img = document.createElement('img');
        // On modifie ses propriétés pour lui ajouter une image
        img.src = "https://tenor.com/fr/view/yes-high-jcvd-jean-caude-gif-5733070";
        // On ajoute un style à notre objet
        img.style.position = 'absolute';
        // Permet de positionner le gif de manière aléatoire dans le viewport actuel
        img.style.top = Math.floor(Math.random() * height) + "px";
        img.style.left = Math.floor(Math.random() * width) + "px";

        img.style.zIndex = 100;
        // On l'insère dans le DOM
        document.querySelector('body').prepend(img);
        // Quand on clique sur le GIF, on le supprime
        img.addEventListener('click', this.removeGif);
    }

    removeGif(event) {
        event.currentTarget.remove();
    }
    
};

export default Whack;