import { useState } from "react";
import { setValue } from "../../types/setValue";
import { Input } from "../input";


interface InputFields{
  name: string,
  id: string,
  value: string,
  setValue:  React.Dispatch<React.SetStateAction<string>>
}
interface Props {
  calcMedia: ({valueAva, valuePim, valueProva}: setValue)=> void
}

export function Gestao({calcMedia}: Props){
  const [valueAva, setValueAva] = useState('');
  const [valueProva, setValueProva] = useState('');
  const [valuePim, setValuePim] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=> {
    event.preventDefault()
    console.log(event.target.value)
    const result = event.target.value.replace(/[A-Za-z!@#$%*():;?/]/g, '');
    return result;
  };

  const inputFields: InputFields[] = [
    {
      name: 'Nota AVA',
      id: 'ava',
      value: valueAva,
      setValue: setValueAva
    },
    {
      name: 'Nota Prova',
      id: 'prova',
      value: valueProva,
      setValue: setValueProva
    },
    {
      name: 'Nota PIM',
      id: 'pim',
      value: valuePim,
      setValue: setValuePim
    }
  ]

  return (
  <>
      <section >
      
       { inputFields.map( item => (
         <label className="flex flex-col justify-around items-center m-2" key={item.id}>{item.name}
           <Input 
             id= {item.id}
             handleChange = {handleChange}
             value={item.value}
             setValue = {item.setValue}
             
           />
         </label>
        ))}
      </section>
      {calcMedia({valueAva,valueProva,valuePim})}
  </>
  )
}
