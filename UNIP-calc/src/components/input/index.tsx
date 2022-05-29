

interface Props{
  id: string,
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => string,
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>
}

export function Input({id, handleChange, value, setValue}: Props){
  return (
      <input 
            type="text" 
            id={id} 
            className="w-48 text-center m-2" 
            inputMode="numeric" 
            pattern="\d*" 
            onChange={event => setValue(handleChange(event))}
            value={value.replace(",",'.')}
            min = "0"
            max = "10"
            maxLength = {3}
          />
  )
}
//React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
//https://bobbyhadz.com/blog/react-only-number-input