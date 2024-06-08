//Elvish Code Cipher

function solve(encryptedText, n) {
    let decryptedText = '';

    for (let i = 0; i < encryptedText.length; i++) {
        let charValue = encryptedText.charCodeAt(i) - n;
        decryptedText += String.fromCharCode(charValue);
    }

    console.log(decryptedText);
}

solve('Uifsf!jt!b!tfdsfu"', 1);
solve('Wkurz#lw#lq#wkh#iluh$', 3);
solve("Fwfltws", 5);