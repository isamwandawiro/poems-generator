alert("Welcome to the Poem Generator!");

function generatePoem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: "At the drive-thru line\nat Taco Bell",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemformElement = document.querySelector("#poem-generator-form");
  poemformElement.addEventListener("submit", generatePoem);