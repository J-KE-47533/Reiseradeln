function loadContent(page, elementId) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            // Erstellen eines temporären DOM-Elements
            let tempDiv = document.createElement('div');
            tempDiv.innerHTML = data;

            // Finden des ersten p-Tags und Extrahieren der ersten 15 Wörter
            let paragraph = tempDiv.querySelector('p').innerText;
            let words = paragraph.split(' ').slice(0, 10).join(' ') + " [...]";

            // Anzeige auf der index.html
            document.getElementById(elementId).innerText = words;
        })
        .catch(error => console.error('Error:', error));
}


loadContent('beine.html', 'beine-content');
loadContent('brust.html', 'brust-content');
loadContent('ruecken.html', 'rücken-content');
loadContent('rudern.html', 'rudern-content');
loadContent('bauch.html', 'bauch-content');

