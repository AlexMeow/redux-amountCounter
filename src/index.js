import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'
import './index.css';

const store = createStore(counter)

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onDeposit={() => store.dispatch({ type: 'DEPOSIT' })}
    onWithdraw={() => store.dispatch({ type: 'WITHDRAW' })}
  />,
  document.getElementById('root')
)

render()
store.subscribe(render)
