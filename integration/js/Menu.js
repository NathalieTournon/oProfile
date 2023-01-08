let Menu = class Menu {
    // Contient l'élément DOM du menu, définition d'une propriété
    menuElement;
    
    constructor() {
        this.getMenu();
        // Ajouter la classe top-bar--sticky à mon menu
        //this.addStickyToMenu();
        window.addEventListener('scroll', () => {
            this.toggleStickyMenu();
        })
    }

    getMenu() {
        this.menuElement = document.querySelector('.header top-bar');
    }

    toggleStickyMenu() {
        // Récupération de la height de mon menu
        const menuHeight = document.querySelector('.top-bar').offsetHeight;
        console.log(menuHeight, window.scrollY);
        // Si la distance entre le sommet de la page et le viewport est supérieure 
        // ou égale à la height de mon menu
        if(window.scrollY >= menuHeight) {
            this.menuElement.classList.add('top-bar--sticky');
        } else {
            this.menuElement.classList.remove('top-bar--sticky');
        }
        // Ajouter la classe top-bar--sticky à mon menu
        //this.menuElement.classList.add('top-bar--sticky');
    }

};

export default Menu;