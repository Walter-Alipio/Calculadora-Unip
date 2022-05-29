import { Card } from "./components/card"
import logo from "./img/logo.png"

function App() {
 

  return (
    <div className="App">
      <img 
        className="m-auto mt-4"
        srcSet={logo}
        />
        <p className="flex justify-center text-lg text-zinc-50">Protótipo não oficial</p>
      <Card/>
      <span className="m-auto flex justify-center text-white mt-4">Desenvolvido por 
      <a href="https://www.linkedin.com/in/walter-al%C3%ADpio-silva-738a1821b/" className="text-amber-500 ml-1"> Walter Alípio </a>
      </span>
    </div>
  )
}

export default App
