import PokemonCard from "./components/PokemonCard"
import NavBar from "./components/navBar"
import axios from "axios"
import React, {useEffect, useState} from "react"


export const App = () => {
  const [pokemons, setPokemons] = useState([])
      useEffect(() => {
        getPokemons()
      },[])
      const getPokemons = async () => {
        var endpoints = [];
        for(var i = 1;i < 50 ; i++ ){
          endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        var response =  axios.all(endpoints.map(endpoints => axios.get(endpoints))).then((res) => setPokemons(res))
        return response; 
            
      }
      console.log(pokemons)
      const pokemonsFilter = (name) =>{
       var arraypokemons = []
       if(name == ""){
        getPokemons();
       }
       for(var i in pokemons){
        if(pokemons[i].data.name.includes(name)){
          arraypokemons.push(pokemons[i])
        }
       }

        setPokemons(arraypokemons)
       
      }
   
  return(
    <>
   <NavBar pokemonsFilter={pokemonsFilter} />

   {pokemons.map((pokemons, key) => (<PokemonCard name={pokemons.data.name} types={pokemons.data.types} imagem={pokemons.data.sprites.front_default} key={key} />))}
   

  
    </> 
  )
  
}

export default App
