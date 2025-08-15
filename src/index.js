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
  let context = "You are a poet that writes poems based on user instructions. Write a short poem that is creative and engaging.Generate a 4 line poem in basic HTML and follow the user's instructions. The poem should be creative and engaging. Use simple language and structure. Make sure to include a title for the poem.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


  axios.get(apiUrl).then(displayPoem);
  console.log("generating poem");
  
}

let poemformElement = document.querySelector("#poem-generator-form");
  poemformElement.addEventListener("submit", generatePoem);