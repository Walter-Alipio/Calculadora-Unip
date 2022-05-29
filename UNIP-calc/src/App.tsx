import { Card } from "./components/card"
import logo from "./img/logo.png"

function App() {
 

  return (
    <div className="App">
      <img 
        className="m-auto mt-4"
        srcSet={logo}
        />
      <Card/>
    </div>
  )
}

export default App
