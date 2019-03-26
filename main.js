let wrapper = document.querySelector(".wrapper");
let startWordBtn = document.querySelector("#start-word");
let anyWordBtn = document.querySelector("#any-word");
let reverseBtn = document.querySelector(".reverse");
let searchInput = document.querySelector(".search");
let text = document.querySelector(".text");

//create the random color -generator
const rgbColorGenerator = function() {
  let red = Math.floor(Math.random() * 255).toString();
  let blue = Math.floor(Math.random() * 255).toString();
  let green = Math.floor(Math.random() * 255).toString();
  let color = `rgb(${red}, ${blue}, ${green})`;
  return color;
};

// create the default divs with country-names and random background-color
const defaultFunction = () => {
  wrapper.innerHTML = "";
  countries.forEach(country => {
    let box = document.createElement("div");
    let color = rgbColorGenerator();
    let theColor = color;
    box.style.backgroundColor = theColor;
    box.style.height = "100px";
    box.style.width = "400px";
    box.style.margin = "auto";
    box.textContent = country;
    const blackOrWhite = () => {
      let red = theColor.slice(4, 7);
      let green = theColor.slice(9, 12);
      let blue = theColor.slice(14, 17);
      if (red + green + blue > 400) {
        return "black";
      } else {
        return "white";
      }
    };
    box.style.color = blackOrWhite();
    wrapper.appendChild(box);
  });
};
defaultFunction();
// function to print the countries in reverse order
const reverseCountries = () => {
  wrapper.innerHTML = "";

  // reverse the copy of the countries so it doesn't change the original countries array
  const reversedCountries = countries.slice().reverse();
  reversedCountries.forEach(country => {
    let box = document.createElement("div");
    let color = rgbColorGenerator();
    let theColor = color;
    box.style.backgroundColor = theColor;
    box.style.height = "100px";
    box.style.width = "400px";
    box.style.margin = "auto";
    box.textContent = country;
    const blackOrWhite = () => {
      let red = theColor.slice(4, 7);
      let green = theColor.slice(9, 12);
      let blue = theColor.slice(14, 17);
      if (red + green + blue > 400) {
        return "black";
      } else {
        return "white";
      }
    };
    box.style.color = blackOrWhite();
    wrapper.appendChild(box);
  });
};

// function for the reverse-button
function buttonFunction() {
  let i = document.querySelector("i");
  if (i.className === "fas fa-sort-alpha-down") {
    reverseCountries();
    i.className = "fas fa-sort-alpha-up";
    reverseBtn.style.backgroundColor = "#5e360a";
  } else if (i.className === "fas fa-sort-alpha-up") {
    i.className = "fas fa-sort-alpha-down";
    reverseBtn.style.backgroundColor = "#b37c3c";
    defaultFunction();
  }
}
// using the function in the reverse-button
reverseBtn.addEventListener("click", buttonFunction);

const searchCountryContains = () => {
  wrapper.innerHTML = "";
  const arrCountries = [];
  for (let i = 0; i < countries.length; i++) {
    let input = searchInput.value.toUpperCase();
    let upperCaseCountry = countries[i].toUpperCase();
    if (upperCaseCountry.includes(input)) {
      arrCountries.push(countries[i]);
      let box = document.createElement("div");
      let color = rgbColorGenerator();
      let theColor = color;
      box.style.backgroundColor = theColor;
      box.style.height = "100px";
      box.style.width = "400px";
      box.style.margin = "auto";
      box.textContent = countries[i];
      const blackOrWhite = () => {
        let red = theColor.slice(4, 7);
        let green = theColor.slice(9, 12);
        let blue = theColor.slice(14, 17);
        if (red + green + blue > 400) {
          return "black";
        } else {
          return "white";
        }
      };
      box.style.color = blackOrWhite();
      wrapper.appendChild(box);
    }
    text.innerHTML = `Countries containing ${searchInput.value} are ${
      arrCountries.length
    }`;
  }
};

const searchCountryStarts = () => {
  wrapper.innerHTML = "";
  const arrCountries = [];
  for (let i = 0; i < countries.length; i++) {
    let input = searchInput.value.toUpperCase();
    let upperCaseCountry = countries[i].toUpperCase();
    if (upperCaseCountry.startsWith(input)) {
      arrCountries.push(countries[i]);
      let box = document.createElement("div");
      let color = rgbColorGenerator();
      let theColor = color;
      box.style.backgroundColor = theColor;
      box.style.height = "100px";
      box.style.width = "400px";
      box.style.margin = "auto";
      box.textContent = countries[i];
      const blackOrWhite = () => {
        let red = theColor.slice(4, 7);
        let green = theColor.slice(9, 12);
        let blue = theColor.slice(14, 17);
        if (red + green + blue > 400) {
          return "black";
        } else {
          return "white";
        }
      };
      box.style.color = blackOrWhite();
      wrapper.appendChild(box);
    }
    text.innerHTML = `Countries start with ${searchInput.value} are ${
      arrCountries.length
    }`;
  }
};

// the default is that it search the country with starting letters
searchInput.addEventListener("keyup", searchCountryStarts);

// function for the start-word and any-word buttons
const buttonCheck = () => {
  searchInput.removeEventListener("keyup", searchCountryStarts);
  searchInput.removeEventListener("keyup", searchCountryContains);
  if (anyWordBtn.checked === true) {
    searchInput.addEventListener("keyup", searchCountryContains);
  } else if (startWordBtn.checked === true) {
    searchInput.addEventListener("keyup", searchCountryStarts);
  }
};
startWordBtn.addEventListener("click", buttonCheck);
anyWordBtn.addEventListener("click", buttonCheck);
