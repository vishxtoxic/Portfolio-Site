const loader = document.querySelector(".page-loader");
const pageContent = document.querySelector(".page-content");

function showPage() {
    window.setTimeout(() => {
        loader.classList.add("hidden");
        pageContent.classList.add("ready");
    }, 450);
}

document.querySelectorAll('a[href$=".html"]').forEach((link) => {
    link.addEventListener("click", (event) => {
        const target = new URL(link.href, window.location.href);
        if (target.origin !== window.location.origin || link.target === "_blank") {
            return;
        }

        event.preventDefault();
        pageContent.classList.add("leaving");
        window.setTimeout(() => {
            window.location.href = link.href;
        }, 300);
    });
});

window.addEventListener("load", showPage);
