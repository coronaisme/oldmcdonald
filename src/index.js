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
  species : "cow",
  avatar : "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwiseacre-gardens.com%2Fcows%2Fcow-redhead-face.jpg&f=1&nofb=1",
  name: "Bessie",
  gender: "female",
  owner: "David"
}

const animal2 = {
  id: 2,
  species : "pig",
  avatar : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3-eu-west-1.amazonaws.com%2Ffolly-farm.co.uk%2Fuploads%2F2018%2F04%2Fpig-810x1024.jpg&f=1&nofb=1",
  name: "Pig",
  gender: "female",
  owner: "David"
}

const animalArray = [animal1, animal2]



const renderAnimal = (animal) => {
  return `<div class="animal" id=${animal.id}>
            <h2>${ animal.name }</h2> 
            
            <h3>${animal.gender}</h3></br>

            <img class="animalImage" src=${animal.avatar}/>

            <p> Owner: ${animal.owner}</p>

          </div>`
}

const renderPen = (animalArray) => {

  let str = '';

  animalArray.map(animal => {
    str += renderAnimal(animal)
  })

  return `<div class="animalPen">

            <h3 class="penTitle" > ${animalArray[0].species} Pen</h3>

            ${str}
  
         </div>`
}



window.addEventListener('DOMContentLoaded', (event) => {
  let barnyard = document.getElementById("barnyard")
  barnyard.innerHTML += renderPen(animalArray)
});
