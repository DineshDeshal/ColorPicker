import { useState } from 'react'

import './App.css'
import Color_picker from './Color-Picker-app/ColorPicker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Color_picker></Color_picker>

    </>
  )
}

export default App
