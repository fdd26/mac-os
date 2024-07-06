import svgMappings from '../../../assets/index.js';

function menuBar(params) {

    // main_menu
    const mainMenuBar = document.createElement("div")
    mainMenuBar.classList.add("main_menu");

    // left main_menu
    const menuLeftDiv = document.createElement("div")
    menuLeftDiv.classList.add("main_menu_left")

    const appleIcon = document.createElement("img")
    appleIcon.src = svgMappings["apple-icon"];
    menuLeftDiv.appendChild(appleIcon)
    mainMenuBar.appendChild(menuLeftDiv)

    const rootElement = document.getElementById("__root");
    rootElement.appendChild(mainMenuBar)

}
export default menuBar