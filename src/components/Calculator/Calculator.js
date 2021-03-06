import React, {Component} from 'react';
import {Button, Input} from "@material-ui/core";
import s from './Calculator.module.css'

export default class Calculator extends Component {

    state = {
        selectedBank: '',
        initialLoan: '',
        downPayment: '',
        calculationResult: '',
    }

    handleChange = (e) => {
        const {name, value} = e.target
        switch (name) {
            case 'loan':
                this.setState({initialLoan: value})
                break
            case 'payment':
                this.setState({downPayment: value})
                break
            case 'bank':
                this.setState({selectedBank: value})
                break
            default:
                return console.log('error')
        }
    }

    filterBanks = () => {
        const result =  this.props.banks.find(bank => bank.name === this.state.selectedBank)
        const { loanTerm, interestRate, maxLoan, minDownPayment } = result
        const { downPayment, initialLoan } = this.state
        if (maxLoan < initialLoan) {
            this.clear()
            return alert ('the initial loan is more than the bank can provide ')
        } else if (minDownPayment > downPayment) {
            this.clear()
            return alert ('the minimum down payment is lower than the bank asks for')
        }
        return Math.round((initialLoan / loanTerm) * (interestRate / 12) - (downPayment / 12))


    }

    clear = () => {
        this.setState({
            selectedBank: '',
            initialLoan: '',
            downPayment: '',
        })
    }

    send = (e) => {
        e.preventDefault()
        this.setState({calculationResult: this.filterBanks()})
        console.log(this.filterBanks())
    }


    render () {
        const {initialLoan, downPayment, selectedBank } = this.state
        return (
            <div>
                <form onSubmit={this.send}>
                    <p><Input className={s.item} onChange={this.handleChange} name='bank' type='text' value={selectedBank.toLowerCase()} placeholder='bank name'/></p>
                    <p><Input className={s.item} onChange={this.handleChange} name='loan' type="number" value={initialLoan} placeholder='initial loan'/></p>
                    <p><Input className={s.item} onChange={this.handleChange} name='payment' type="number" value={downPayment} placeholder='down payment'/></p>
                    <p><Button className={s.item} type='submit'>calculate</Button></p>
                </form>
                {this.state.calculationResult && <p>MONTHLY PAYMENT: <p className={s.payment}>{this.state.calculationResult} hrn.</p></p>}
            </div>
        );
    }

};