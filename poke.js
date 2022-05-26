const pokeBody$$=document.querySelector(".pokeBody")
let maxN=151;
const PokeApis="https://pokeapi.co/api/v2/pokemon/"

const PokeApi={};
const PokeJSONS=[];
const PokeAll=async ()=>{
    for (i=1;i<=maxN;i++) {
        PokeApi[i]= await fetch(PokeApis+i);
        const PokeJSON=await PokeApi[i].json();
        PokeJSONS.push(PokeJSON);
        
    }
    
    mapPokemons(PokeJSONS);
}
   
const mapPokemons = (array) => {
    const mappedPokemons=array.map((pokemon)=>({
     name:pokemon.name,
     id:pokemon.id,
     type:pokemon.types,
     photo:pokemon.sprites.front_default,
    stats:pokemon.stats,
    }));
//luego queremos comparar las stats principales de cada pokemon. AKA attack special.
//Me gustaria poder ver quien ganaria entre dos pokemons luchando
console.log(mappedPokemons);
paintPokemon(mappedPokemons);
} 

const paintPokemon=(array)=>{
    const pokemonHTML=array.map((pokemon)=>`
    <div class="poki">
    <h2>${pokemon.name}</h2>
    <img 
    src=${pokemon.photo}
    alt=${pokemon.name}
    >
    <p>${pokemon.id}</p>
    </div>
    
    `
    ).join("");
    pokeBody$$.innerHTML=pokemonHTML;
   /*  for(let i=0;i<3;i++){
    if(pokemon.type[i] !=="undefined"){
        const type${i}= pokemon.type[i].type.name;
        
        console.log()
    }


    } */
}

PokeAll();