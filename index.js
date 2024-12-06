document.getElementById('generate-button').addEventListener('click', async () => {

  let helloUrl = "https://api.datamuse.com/words?ml=hello&max=8";

  fetch(helloUrl)
  .then((response) => {
      return response.json();
  })
  .then((json) => {
      console.log(json);
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