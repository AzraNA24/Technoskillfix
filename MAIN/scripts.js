function loadScript(src, callback) {
    const existingScript = document.querySelector(`script[src="${src}"]`);
    if (existingScript) {
        existingScript.remove();
    }

    const script = document.createElement('script');
    script.src = src;
    script.onload = callback;
    document.head.appendChild(script);
}


function cleanUp() {
}

function loadPage(page) {
    cleanUp();
    const contentDiv = document.getElementById('content');
    fetch(page)
        .then(response => response.text())
        .then(html => {
            contentDiv.innerHTML = html;
            const scriptFile = page.replace('.html', '.js');
            loadScript(scriptFile, () => {
                console.log(`${scriptFile} loaded`);
            });
        });
}
