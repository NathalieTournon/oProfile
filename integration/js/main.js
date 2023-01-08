
// on peut aller chercher des dépendances dans les nodes_modules
// si on ne précise de chemin, mais directement le nom d'une dépendance, on va chercher le code dans les node_modules
import 'reset-css';
// on va chercher un node module mais en spécifiant un chemin pour aller chercher un fichier à l'intérieur de ce module
import '@fortawesome/fontawesome-free/css/all.css';

// Chargement des modules / classes
import Whack from './Whack';
import Carousel from  './Carousel';
import Menu from './Menu';

let menu = new Menu();
let carousel = new Carousel();


// On laisse la ligne suivante commentée pour ne
// pas être submergé de GIF puisque leur apparition est automatisée avec setInterval()
//let jcvd = new Whack();
