import React , {useState,useEffect}from 'react';


function App() {

  const [contagem , setContagem] = useState(0);

  useEffect (()=>{
    document.title = 'Contagem:' + contagem;
  }, [contagem]);
    
  }

  const aumentarAction = () => {
    setContagem (contagem+ 1);
  }


  return (
    <main>
    <h1>Contagem : {contagem}</h1>

    <button onClick = {aumentarAction}>Aumentar número</button>



    </main>
  );
}

export default App;

