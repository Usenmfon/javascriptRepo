const replaceImages = function() {
    let images = document.getElementsByTagName('img')
    for (let i = images.length - 1; i >= 0; i--) {
        let image = images[i];
        if (image.alt) {
            let text = document.createTextNode(image.alt)
            image.parentNode.replaceChild(text, image);
        }
    }

    let paras = document.getElementsByTagName('p');
    for (let para of Array.from(paras)) {
        if (para.getAttribute("data-classified") == 'secret') {
            para.remove();
        }
    }

    window.addEventListener("click", () => console.log("You clicked"));
}