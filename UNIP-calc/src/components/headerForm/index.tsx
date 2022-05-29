
export function Header(){
  function handleButtonChange (e: React.FormEvent){
    e.preventDefault();
  }
  
  return(
       <header className=" w-full h-20 flex items-stretch text-slate-50 " >
        <span 
        className="bg-amber-500 grow hover:bg-amber-700 hover:text-xl flex justify-center items-center text-xl"
        >Técnico Superior</span>
      </header>
  )
}