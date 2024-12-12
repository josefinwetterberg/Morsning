const currentUrl = window.location.href;

const url = new URL(currentUrl);

const morse = url.searchParams.get("translateToMorse");

let morseUrl = "https://api.funtranslations.com/translate/morse.json?text="+morse;

  fetch(morseUrl)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    const morseCode = json; 
    const mainContent = document.getElementById('code-sun');

    let morseContainer = document.createElement('div');
    morseContainer.textContent = morseCode.contents.translated;
    morseContainer.classList.add('morse-text');

    mainContent.appendChild(morseContainer) // add morsecode to a new div.
    
    let textContainer = document.createElement('div');
    const codeFormSection = document.getElementById('codeFormSection')
    textContainer.textContent = "Översatt text: " + morseCode.contents.text;

    codeFormSection.appendChild(textContainer) // add translated text to a new div.
  })
  .catch((error) => {
    console.error("Error:", error);
  });