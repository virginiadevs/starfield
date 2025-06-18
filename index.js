const audio = document.querySelector(".space-song");
audio.volume = 0;
audio.pause();

document.getElementById("toggleBtn").addEventListener("click", () => {
    const icon = document.querySelector(".fas");

    if(icon.classList.contains("fa-circle-play")) {
        let fadeInterval = setInterval(() => {
            if(audio.volume < 0.9) {
                audio.volume += 0.1; // Sube el volumen gradualmente
            }
            else {
                audio.volume = 1;
                audio.play(); // Activa cuando el volumen es 1
                clearInterval(fadeInterval);
            }
        }, 50);
        icon.classList.replace("fa-circle-play", "fa-circle-pause");
    }
    else {
        let fadeInterval = setInterval(() => {
            if(audio.volume > 0.1) {
                audio.volume -= 0.1; // Baja el volumen gradualmente
            }
            else {
                audio.volume = 0;
                audio.pause(); // Pausa cuando el volumen es 0
                clearInterval(fadeInterval);
            }
        }, 100);
        icon.classList.replace("fa-circle-pause", "fa-circle-play");
    }
});

const COLORS = ["#fff2", "#fff4", "#fff7", "#fffc"];

const generateSpaceLayer = (size, selector, totalStars, duration) => {
    const layer = [];

    for (let i = 0; i < totalStars; i++) {
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 100);
        layer.push(`${x}vw ${y}vh 0 ${color}, 
            ${x}vw ${y + 100}vh 0 ${color}`);
    }

    const container = document.querySelector(selector);
    container.style.setProperty("--space-layer", layer.join(","));
    container.style.setProperty("--size", size);
    container.style.setProperty("--duration", duration);
}

generateSpaceLayer("1px", ".space-1", 500, "25s");
generateSpaceLayer("2px", ".space-2", 300, "20s");
generateSpaceLayer("4px", ".space-3", 25, "15s");