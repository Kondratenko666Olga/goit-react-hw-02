// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Description from './components/Description/Description'
import description from '../description.json'

function App() {
  // const [count, setCount] = useState(0)

  return (<>   
            <div>
            <Description
            name={description.name}
            description={description.descr}
            />
            </div>
          </>

  )
}

export default App
