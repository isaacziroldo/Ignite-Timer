import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Button } from './components/Button'


export function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <Button variant='primary'/>
      <Button variant='secondary'/>
      <Button variant='danger'/>
      <Button variant='success'/>
      <Button />
    </div>
  )
}

