import { useUnit } from 'effector-react'
import { $counter, incremented, decremented, resetCounter } from './store'
import './index.scss'

function App() {
  const [counter, onIncremented, 
    onDecremented, onReseted] = useUnit([$counter, incremented, decremented, resetCounter])

  return (
      <div className="app">
        <div className={counter > 0 ? "positive" : counter < 0 ? "negative" : undefined}>
            {counter}
        </div>
        <div className='button__wrapper'>
            <div className='button__group'>
              <button onClick={onDecremented}>-</button>
              <button onClick={onIncremented}>+</button>
            </div>
            <button className="button__reset" onClick={onReseted}>Reset</button>
        </div>
      </div>
  )
}

export default App
