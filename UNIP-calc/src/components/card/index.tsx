
import { useState } from "react";
import { setValue } from "../../types/setValue";
import { Gestao } from "../gestao";
import { Header } from "../headerForm";



export function Card(){

  const [ava,setAva] = useState(Number);
  const [prova, setProva] = useState(Number);
  const [pim,setPim] = useState(Number)

  //pega os estados dos inputs para fazer o calculo da média
  const calcMedia = ({valueAva, valueProva, valuePim}: setValue)=>{
    setAva(parseFloat(valueAva) || 0);
    setProva(parseFloat(valueProva) || 0);
    setPim(parseFloat(valuePim) || 0);

  }
  //calcula a média do bimestre
  const score = ()=> {
    return (((prova * 7) + (ava * 1) + (pim * 2)) / 10)
  }
  //Estimativa de nota necessária no PIM para atingir a média
  let target;
  ava > 0 && prova > 0 ?  target = (((5.7*10)-(prova*7+ava))/2).toFixed(2) : target = '';   
  //caso a média seja maior/igual 5.57, arredonda para 6
  let finalScore;
  score()>= 5.569 && score() < 6? finalScore = 6 : finalScore = score().toFixed(2)


  return(
    <form className="bg-stone-200 w-80 m-auto rounded-md mt-12 p-4 text-sm">
      <Header />
      <Gestao calcMedia = {calcMedia}/>
      <p className="m-1 text-cyan-600 text-lg">
        PIM Target = { parseFloat(target) < 0 ? target = '': target }
        </p>
      <p>MD = [(AP x 7) + (AVA x 1) + (PIM x 2)] / 10 </p>
      {
        finalScore> 5.6? 
        <p className="text-lime-600 text-xl">Média =  { finalScore} APROVADO!</p>
        :
        <p className="text-red-700  text-xl">Média =  {finalScore} Exame!</p>
      }
    </form>
  )
}