

import imagenRickMorty from './img/lcofy7f2.bmp'
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';


function App() {

  const [characters,setCharacters] = useState(null);

  const reqApi = async () => {
     const api = await fetch ('https://rickandmortyapi.com/api/character')
     const characterApi = await api.json();
     //console.log(characterApi); 
     //console.log(api);
     //console.log(characterApi);
     setCharacters(characterApi.results);
  };
  //console.log(characters);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
          {characters ?(
            <Characters characters={characters} setCharacters={setCharacters}/>
          ) : (
            <>
              <img src={imagenRickMorty} alt="Rick & Morty" className="img-home" />
              <button onClick={reqApi} className="btn-search">Buscar Personajes</button>
              </>
          )}
      </header>
    </div>
  );
}

export default App;



