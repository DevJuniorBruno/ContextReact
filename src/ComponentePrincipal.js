import React, {createContext, useContext, useState} from "react";

function ComponentePrincipal() {

  const [fundo, setFundo] = useState("blue");
  
const handleFundo = () =>{
  
    setFundo( fundo === "blue" ? "orange": "blue" )  

  }


  const Contexto = createContext();

  let text = "Context React ao invés de props";



  return(
    <div>
      <Contexto.Provider value = {{text, fundo, handleFundo}}>
        <Camada0/>
      </Contexto.Provider>
    </div>
  )

 function Camada0(){
  return (
    <div style={{width:"500px", height: "500px",backgroundColor:"red"}}>
      

      <Camada1/>
    </div>
  );
 }

  function Camada1(){
    return(
       <div style={{width:"400px", height: "400px",backgroundColor:"yellow", margin: "50px", display: "inline-block"}}>
      
        <Camada2 />
       </div>
    )
   
  }

  function Camada2(){

    const{ text, setFundo } = useContext(Contexto);

    return(
       <div style={{width:"300px", height: "300px",backgroundColor:fundo, margin: "50px", display: "inline-block"}}>
        <p>{text}</p>
        <button onClick={handleFundo} >Mudar fundo</button>
    </div>
    )
   
  }

}


export default ComponentePrincipal;

