/**
 * Welcome to Old McDonald's farm.  In this exercise we're going to create a digital
 * representation of the McDonald family farm.
 * Requirements:
 *  1. Create programmatic representations of our barnyarn friends.  This structure is
 *    totally up to you.  Feel free to get creative and use the tools you have available
 *    and any stategy you can think of.
 *  2. Create a "barnyard" programmatic representation.  This model should contain "pens"
 *    for the animals to live.
 *  3. Introduce a basic way of interacting with the animals in our barnyard.  For example,
 *    create a button on the page that would pet the animals which in turn would make a
 *    "noise", (in this case it would print something in the HTML).  Get creative here!
 *    I'd love to see the unique solutions you come up with!
 */

// import "./styles.css";

const animal1 = {
  id: 1,
  species: "cow",
  avatar:
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwiseacre-gardens.com%2Fcows%2Fcow-redhead-face.jpg&f=1&nofb=1",
  name: "Bessie",
  gender: "female",
  owner: "David",
};

const animal2 = {
  id: 2,
  species: "pig",
  avatar:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3-eu-west-1.amazonaws.com%2Ffolly-farm.co.uk%2Fuploads%2F2018%2F04%2Fpig-810x1024.jpg&f=1&nofb=1",
  name: "Pig",
  gender: "female",
  owner: "David",
};
const animal3 = {
  id: 3,
  species: "chicken",
  avatar:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.justataste.com%2Fwp-content%2Fuploads%2F2014%2F09%2Froast-chicken-garlic-lemon-recipe.jpg&f=1&nofb=1",
  name: "Chicken",
  gender: "female",
  owner: "David",
};

const animalArray = [animal1, animal2, animal3];

const penArray = [
  {
    title: "cow",
    animals: [],
  },
  {
    title: "chicken",
    animals: [],
  },
  {
    title: "pig",
    animals: [],
  },
  {
    title: "sheep",
    animals: [],
  },
];

const addToPen = () => {
  animalArray.forEach((animal) => {
    penArray
      .find((pen) => {
        return pen.title === animal.species;
      })
      .animals.push(animal);
  });
};

addToPen();

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(e.target);
};

const renderAnimalForm = () => {
  return `
  <h5 class="creation">Create an Animal</h5>

  <form class="animal-form" action=>

  <label>Species</label>
  <input type="text" name="species-input" id="speciesId"/>

  <label>Avatar</label>
  <input type="text" name="avatar-input" id="avatarId"/>

  <label>Name</label>
  <input type="text" name="name-input" id="nameId"/>

  <label>Gender</label>
  <input type="text" name="gender-input" id="genderId"/>

  <label>Owner</label>
  <input type="text" name="owner-input" id="ownerId"/>

  <input type="submit" id="submit" />
  
  
  </form>`;
};

const renderAnimal = (animal) => {
  return `<div class="animal" id=${animal.id}>
            <h2>${animal.name}</h2> 
            
            <h3>${animal.gender}</h3></br>

            <img class="animalImage" src=${animal.avatar}/>

            <p> Owner: ${animal.owner}</p>

          </div>`;
};

const renderPen = (penArray) => {
  let str = "";
  let currentPenStr = "";

  penArray.map((pen) => {
    pen.animals.map((animal) => {
      let penContent = "";

      penContent += renderAnimal(animal);
      currentPenStr = `<div class="penContent"> ${penContent} </div>`;
    });
    str += currentPenStr;
  });

  return `<div class="animalPen">
            
            ${str}
  
         </div>`;
};

const createAnimal = (species, avatar, name, gender, owner) => {
  let nextId = animalArray[animalArray.length - 1].id + 1;

  return {
    id: nextId,
    species: species,
    avatar: avatar,
    name: name,
    gender: gender,
    owner: owner,
  };
};

window.addEventListener("DOMContentLoaded", (event) => {
  let barnyard = document.getElementById("barnyard");
  let form = document.getElementById("form");

  barnyard.innerHTML += renderPen(penArray);
  form.innerHTML += renderAnimalForm();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let speciesVal = document.getElementById("speciesId").value;
    let avatarVal = document.getElementById("avatarId").value;
    let nameVal = document.getElementById("nameId").value;
    let genderVal = document.getElementById("genderId").value;
    let ownerVal = document.getElementById("ownerId").value;

    let newAnimal = createAnimal(
      speciesVal,
      avatarVal,
      nameVal,
      genderVal,
      ownerVal
    );

    animalArray.push(newAnimal);
    barnyard.innerHTML = "";
    barnyard.innerHTML += renderPen(animalArray);
    console.log(animalArray, "array of animals");
  });
});
