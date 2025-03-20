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
    logo.style.paddingLeft = "25px";
    logo.style.transition = "translateX(-25px)";
    logo.style.clipPath = "inset(0 443px 0 0)";
});

triquetra.addEventListener("mouseout", () => {
    logo.style.paddingLeft = "55px";
    logo.style.transition = "translateX(0px)";
    logo.style.clipPath = "inset(0 0 0 0)";
});