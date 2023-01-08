let Menu = class Menu {
    // Contient l'élément DOM du menu, définition d'une propriété
    menuElement;
    
    constructor() {
        this.getMenu();
        // Ajouter la classe top-bar--sticky à mon menu
        this.addStickyToMenu();
    }

    getMenu() {
        this.menuElement = document.querySelector('.header top-bar');
    }

    addStickyToMenu() {
        // Ajouter la classe top-bar--sticky à mon menu
        this.menuElement.classList.add('top-bar--sticky');
    }

    
};

export default Menu;