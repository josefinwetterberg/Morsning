document.getElementById('generate-button').addEventListener('click', async () => { // generate hello from api

  let helloUrl = "https://api.datamuse.com/words?ml=hello&max=8";

  fetch(helloUrl)
  .then((response) => {
      return response.json();
  })
  .then((json) => {
      const generatedHellos = json; 

      let i = Math.floor(Math.random() * generatedHellos.length);
      let r = generatedHellos[i];
      let exampleGreeting = r.word

      document.getElementById('translateToMorse').value = exampleGreeting;

  })
  .catch((error) => {
      console.error("Error:", error);
  })
})


function remainingChar () { // character remaining function
  

const inputField = document.getElementById('translateToMorse');
const charCounter = document.getElementById('charCounter');
const maxLength = inputField.maxLength;

    inputField.addEventListener('input', () => {
      const remaining = maxLength - inputField.value.length;
      charCounter.textContent = `${remaining}/${maxLength}`;
    }) 
    
  }


remainingChar ()