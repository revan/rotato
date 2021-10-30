let params = (new URL(document.location)).searchParams;
let urls = params.getAll("url")
let delay = params.get("delay") * 1000 || 60000;

let frameHolder = document.getElementById("frames");

let iframes = urls.map(url => {
    let frame = document.createElement("iframe");
    frame.style.display = "none";
    frame.style.width = "100vw";
    frame.style.height = "100vh";
    frame.style.border = "none";
    frame.src = url;
    frameHolder.appendChild(frame);

    return frame;
});

let frameNumber = 0;

window.setInterval(() => {
    iframes.forEach((frame, i) => {
        if (i == frameNumber) {
            frame.style.display = "inherit";
        } else {
            frame.style.display = "none";
        }
    });

    if (++frameNumber >= iframes.length) {
        frameNumber = 0;
    }
}, delay);

iframes[0].style.display = "inherit";
