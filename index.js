document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector(".loader")
    const container = document.querySelector(".container")

    window.addEventListener('load', () => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = "none"
            container.style.opacity = "1"
            document.body.style.backgroundImage = `url("https://picsum.photos/1600/900?random=${Math.trunc(Math.random() * 1000)}")`
        }, 1000);
    });
});

document.querySelector('.button-reload').addEventListener('click', () => {
    location.reload(true);
});