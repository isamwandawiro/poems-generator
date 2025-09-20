alert("Welcome to the Poem Generator!");
function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}


function generatePoem(event) {
  event.preventDefault();

  let instructionsInputElement = document.querySelector("#user-instructions");
  let apiKey = "103e0470750babf36f99e08ddo7f31ta";
  let prompt = `Generate a poem about ${instructionsInputElement.value}`;
  let context =
    "You are a romantic Poem expert and love to write short poems. You mission is to generate a 4 line poem and separate each line with a <br />. Make sure to follow the user instructions.Include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


  axios.get(apiUrl).then(displayPoem);
  console.log("generating poem");
  
}

let poemformElement = document.querySelector("#poem-generator-form");
  poemformElement.addEventListener("submit", generatePoem);