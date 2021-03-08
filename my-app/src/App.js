import './App.css';
import React, { useState } from 'react';
let valores = [];
let texto = "";
let lugar = -1;

function App() {  
  const [count, setCount] = useState(0);
  return (
    <div className="App">
    <section className="App-content-left">
    <h1 className="App-content-h2">LIST</h1>  
      <ul>
        <li><input type="text" className="first" value={valores[0]}/></li>
        <button onClick={()=>{ valores[0] = prompt("Que desea modificar?"); setCount(count + 1)}}>Edit</button>
        <li><input type="text" className="first" value={valores[1]}/></li>
        <button onClick={()=>{ valores[1] = prompt("Que desea modificar?"); setCount(count + 1)}}>Edit</button>
        <li><input type="text" className="first" value={valores[2]}/></li>
        <button onClick={()=>{ valores[2] = prompt("Que desea modificar?"); setCount(count + 1)}}>Edit</button>
        <li><input type="text" className="first" value={valores[3]}/></li>
        <button onClick={()=>{ valores[3] = prompt("Que desea modificar?"); setCount(count + 1)}}>Edit</button>
        <li><input type="text" className="first" value={valores[4]}/></li>
        <button onClick={()=>{ valores[4] = prompt("Que desea modificar?"); setCount(count + 1)}}>Edit</button>
        <li><input type="text" className="first" value={valores[5]}/></li>
        <button onClick={()=>{ valores[5] = prompt("Que desea modificar?"); setCount(count + 1)}}>Edit</button>
        <li><input type="text" className="first" value={valores[6]}/></li>
        <button onClick={()=>{ valores[6] = prompt("Que desea modificar?"); setCount(count + 1)}}>Edit</button>
      </ul>
    </section>
    
    <section className="App-content-right">
      <h1 className="App-content-h1">Creation Section</h1>
      <form>
        <input type="text" className="texto" required="" onChange={(e)=> texto = e.target.value}/>
        <input type="submit" className="cargar" onClick={(e)=>{
          normalize(e);
          cargar(texto);
          setCount(count + 1)
        }}
        />
      </form>
    </section>  
      
      
    </div>
  );
}
function cargar(texto){
  lugar = lugar + 1
  valores[lugar] = texto
  

}
function normalize (e){
  e.preventDefault(e);
}

export default App;