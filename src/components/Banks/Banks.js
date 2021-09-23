import React, {Component} from 'react';
import {delBank, getList} from "../../services/bankApi";
import {Button} from "@material-ui/core";
import Calculator from "../Calculator/Calculator";


export default class Banks extends Component {
    state = {
        banks: [],
        id: '',
    }

    componentDidMount() {
        const getData = () => {
            getList().then(response =>
                this.setState({banks: response.data})
            )
        }
        getData()
    }


    deleteBank = (id) => {
       delBank(id)
    }

    render () {
        const { banks } = this.state
        return <>
            <p>CALCULATOR</p>
            <Calculator banks={this.state.banks}/>
            {banks.length !== 0
                ? <ul>
                {banks.map(({_id, name, interestRate, loanTerm, maxLoan, minDownPayment}) =>
                    <li key={_id}>
                        <h3>{name}</h3>
                        <p>interest rate: {interestRate}%</p>
                        <p>maximum loan: {maxLoan} hrn.</p>
                        <p>minimum down payment: {minDownPayment} hrn.</p>
                        <p>loan term: {loanTerm} months</p>
                        <Button onClick={()=>{this.deleteBank(_id)}}>delete</Button>
                    </li>)}
            </ul>
                : <p>...Loading</p>}
        </>
    }

};

