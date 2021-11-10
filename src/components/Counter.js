/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import PropTypes from 'prop-types';

class Counter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { value, onDeposit, onWithdraw } = this.props;

        return (
            <div style={{ listStyleType: "none"}}>
                <li>
                    <button onClick={onDeposit}>
                        Deposit $10
                    </button>
                </li>
                <li>
                    <button onClick={onWithdraw}>
                        Withdraw $10
                    </button>
                </li>
                $ {value} 
            </div>
        );
    }  
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onDeposit: PropTypes.func.isRequired,
    onWithdraw: PropTypes.func.isRequired,
};

export default Counter;