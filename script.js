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