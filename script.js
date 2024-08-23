function encryptText() {
    let inputText = document.getElementById('inputText').value;
    let encryptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    
    displayResult(encryptedText);
}

function decryptText() {
    let inputText = document.getElementById('inputText').value;
    let decryptedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    
    displayResult(decryptedText);
}

function displayResult(result) {
    let placeholderImage = document.getElementById('placeholderImage');
    let outputText = document.getElementById('outputText');
    let copyButton = document.getElementById('copyButton');

    placeholderImage.style.display = 'none';
    outputText.style.display = 'block';
    outputText.value = result;
    copyButton.style.display = 'block';
}

function copyToClipboard() {
    let outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}

