/*
 * action type
 */
// export const DEPOSIT = 'deposit';
// export const WITHDRAW = 'withdraw';

/*
 * action creator
 */

export const onDeposit = payload => ({
    type: 'DEPOSIT',
    payload
})

export const onWithdraw = payload => ({
    type: 'WITHDRAW',
    payload
})