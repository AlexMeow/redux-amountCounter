/* eslint-disable import/no-anonymous-default-export */
// import {onDeposit, onWithdraw} from '../actions'

export default (state = 0, action) => {
  switch (action.type) {
    case 'DEPOSIT':
      return state + 10;
    case 'WITHDRAW':
      return state - 10;
    default:
      return state
  }
}
