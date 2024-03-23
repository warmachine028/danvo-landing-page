// Select the Elements

var toogleBtn;
var bigWrapper;
let darkModeEnabled = false;
var hamburgerMenu;
const main = document.querySelector("main");

const initialize = () => {
	toogleBtn = document.querySelector(".toggle-btn");
	bigWrapper = document.querySelector(".big-wrapper");
    hamburgerMenu = document.querySelector(".hamburger-menu");

    toogleBtn.addEventListener("click", toggleTheme);
    hamburgerMenu.addEventListener("click", toggleHamburgerMenu)
};
const toggleHamburgerMenu = () => {
    bigWrapper.classList.toggle("active")
}
const toggleTheme = () => {
	darkModeEnabled = !darkModeEnabled;

	let clone = bigWrapper.cloneNode(true);
	if (darkModeEnabled) {
		clone.classList.remove("light");
		clone.classList.add("dark");
	} else {
		clone.classList.remove("dark");
		clone.classList.add("light");
	}

	clone.addEventListener("animationend", () => {
		bigWrapper.remove();
		clone.classList.remove("copy");
		initialize();
	});
	clone.classList.add("copy");
	main.appendChild(clone);
};

initialize();

