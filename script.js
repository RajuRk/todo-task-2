async function start(){
    const res = await fetch('https://dog.ceo/api/breeds/list/all');
    const data = await res.json()
    console.log(data)
    createList(data.message)
}

start();

function createList(breedList){
   document.getElementById('breed').innerHTML = `
   <select onchange="loadBreed(this.value)">
      <option>Choose a Dog Breed</option>
      ${
        Object.keys(breedList).map((breed) => {
            return `<option>${breed}</option>`
        }).join('')
      }
   </select>`
}

async function loadBreed(breed){
    if(breed != "Choose a Dog Breed"){
        const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        const data =await res.json()
        creteSlideShow(data.message)
    }
}

function creteSlideShow(images){
   document.getElementById("slideshow").innerHTML = `
   <div class="slide" style="background-image: url(${images})"></div>
   `
}