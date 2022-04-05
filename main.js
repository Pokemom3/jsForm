
    async function getCharacters(){
        const response = await fetch("https://rickandmortyapi.com/api/character/")
        console.log(response);
        let data = await response.json();
console.log(data);
let mortyCharacter = data.image;
console.log(mortyCharacter)
document.getElementById('newAvatarImg').src = data.image;
    }
    getCharacters()

// const image = document.querySelector("#newAvatarImg");
// image.addEventListener("click", getCharacters);

//PLAN:
    //await fetch character (GET)
    //store character 
    //display character on page

   
