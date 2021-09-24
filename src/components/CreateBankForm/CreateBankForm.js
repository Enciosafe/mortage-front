import React, {Component} from 'react';
import {Button, Card, TextField} from "@material-ui/core";
import {addBank} from "../../services/bankApi";
import s from './CreateBankForm.module.css'

class CreateBankForm extends Component {

    state = {
        name: '',
        interestRate: '',
        maxLoan: '',
        minDownPayment: '',
        loanTerm: '',
    }

    handleChange = (e) => {
        const {name, value} = e.target
        switch (name) {
            case 'bankName':
                this.setState({name: value})
                break
            case 'interestRate':
                this.setState({interestRate: value})
                break
            case 'maximumLoan':
                this.setState({maxLoan: value})
                break
            case 'minimumDawnPayment':
                this.setState({minDownPayment: value})
                break
            case 'loanTerm':
                this.setState({loanTerm: value})
                break
            default:
                return console.log('error')

        }
    }

    cleanState = () => {
        this.setState({
            name: '',
            interestRate: '',
            maxLoan: '',
            minDownPayment: '',
            loanTerm: '',
        })
    }

    addBank = (e) => {
        e.preventDefault()
        addBank(this.state)
        this.cleanState()
    }



    render () {
       const {name, interestRate, maxLoan, minDownPayment, loanTerm } = this.state
        return (
            <div className={s.card}>
                <form onSubmit={this.addBank}>
                    <div>
                        <TextField
                            id="standard-basic"
                            label="bank name"
                            type="text"
                            name="bankName"
                            value={name.toLowerCase()}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            onChange={this.handleChange}
                            required
                        >
                        </TextField>
                    </div>
                    <div>
                        <TextField
                            id="standard-basic"
                            label="interest rate (%)"
                            type="number"
                            name="interestRate"
                            value={interestRate}
                            onChange={this.handleChange}
                            required>
                        </TextField>
                    </div>
                    <div>
                        <TextField
                            id="standard-basic"
                            label="maximum loan (hrn.)"
                            type="number"
                            name="maximumLoan"
                            value={maxLoan}
                            onChange={this.handleChange}
                            required>
                        </TextField>
                    </div>
                    <div>
                        <TextField
                            id="standard-basic"
                            label="min payment (hrn.)"
                            type="number"
                            name="minimumDawnPayment"
                            value={minDownPayment}
                            onChange={this.handleChange}
                            required>
                        </TextField>
                    </div>
                    <div>
                        <TextField
                            id="standard-basic"
                            label="loan term (months)"
                            type="number"
                            name="loanTerm"
                            value={loanTerm}
                            onChange={this.handleChange}
                            required>
                        </TextField>
                    </div>

                    <div>
                        <Button className={s.btn} type="submit">Add bank</Button>
                    </div>
                </form>
            </div>
        );
    }

};

export default CreateBankForm;