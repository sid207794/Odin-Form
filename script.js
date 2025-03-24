const root = document.documentElement;
const theme = document.querySelector(".theme");

const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
switch (isDarkMode) {
    case true:
        root.className = "dark";
        break;
    case false:
        root.className = "light";
        break;
}

theme.addEventListener("click", () => {
    const newTheme = root.className === "dark" ? "light" : "dark";
    root.className = newTheme;
});

const triquetra = document.querySelector("#triquetra");
const logo = document.querySelector(".logo");
const logoText = document.querySelector(".logoText");

triquetra.addEventListener("mouseover", () => {
    logo.style.paddingLeft = "1.627vw"; /*25px*/
    logo.style.clipPath = "inset(0 28.84vw 0 0)"; /*443px*/
    logo.style.transition = "padding-left 0.6s ease-in-out, clip-path 0.6s ease-in-out";
});

triquetra.addEventListener("mouseout", () => {
    logo.style.paddingLeft = "3.2vw"; /*55px*/
    logo.style.clipPath = "inset(0 0 0 0)";
    logo.style.transition = "padding-left 0.6s ease-in-out, clip-path 0.6s ease-in-out";
});