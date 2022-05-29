
import { useState } from "react";
import { setValue } from "../../types/setValue";
import { Gestao } from "../gestao";
import { Header } from "../headerForm";



export function Card(){

  const [ava,setAva] = useState(Number);
  const [prova, setProva] = useState(Number);
  const [pim,setPim] = useState(Number)

  const calcMedia = ({valueAva, valueProva, valuePim}: setValue)=>{
    setAva(parseFloat(valueAva) || 0);
    setProva(parseFloat(valueProva) || 0);
    setPim(parseFloat(valuePim) || 0);

  }

  const score = ()=> {
    return (((prova * 7) + (ava * 1) + (pim * 2)) / 10)
  }
  
  let target;
  ava > 0 && prova > 0 ?  target = (((5.7*10)-(prova*7+ava))/2).toFixed(2) : target = '';    

  return(
    <form className="bg-stone-200 w-80 m-auto rounded-md mt-12 p-4 text-sm">
      <Header />
      <Gestao calcMedia = {calcMedia}/>
      <p className="m-1 text-cyan-600 text-lg">
        PIM Target = { target < 0 ? target = '': target }
        </p>
      <p>MD = [(AP x 7) + (AVA x 1) + (PIM x 2)] / 10 </p>
      {
        score() > 5.6? 
        <p className="text-lime-600 text-xl">Média =  {score().toFixed(2)}</p> :
        <p className="text-red-700  text-xl">Média =  {score().toFixed(2)}</p>
      }
      
    </form>
  )
}