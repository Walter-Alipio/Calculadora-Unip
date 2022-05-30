import { useState } from "react";
import { InputFields } from "../../types/inputFields";
import { propsMedias } from "../../types/propsMedias";
import { Input } from "../input";




export function Gestao({calcMedia}: propsMedias){
  const [valueAva, setValueAva] = useState('');
  const [valueProva, setValueProva] = useState('');
  const [valuePim, setValuePim] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=> {
    event.preventDefault()
  //permite apenas o registro dos caracteres ",." e números
    const result = event.target.value.replace(/[A-Za-z!@#$%*():;?/]/g, '');
    return result;
  };
//array com o conteúdo de cada input a ser renderizado 
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
