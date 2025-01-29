import { Button } from "./components/ui/button"
import { Progress } from "./components/ui/progress"


function App() {


  return (
    <div className="container mx-auto space-y-2"> 
      <h1 className="p-5 font-bold text-4xl">SUBRELLA</h1>
      <Button className="bg-red-500">Click me</Button>
      <Progress value={50} />
    </div>
  )
}

export default App
