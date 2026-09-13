const themes = ["default", "purple", "icy-blue", "light", "black-white", "dark-black"];
const savedTheme = localStorage.getItem("portfolio-theme");

document.documentElement.dataset.theme = themes.includes(savedTheme) ? savedTheme : "default";

window.addEventListener("DOMContentLoaded", () => {
    const themeSelect = document.querySelector(".theme-select");
    if (!themeSelect) {
        return;
    }

    themeSelect.value = document.documentElement.dataset.theme;
    themeSelect.addEventListener("change", () => {
        document.documentElement.dataset.theme = themeSelect.value;
        localStorage.setItem("portfolio-theme", themeSelect.value);
    });
});
