import React, {Component} from 'react';
import {delBank, getList} from "../../services/bankApi";
import {Button, Card} from "@material-ui/core";
import Calculator from "../Calculator/Calculator";
import s from './Banks.module.css'
import Pure from "react";


export default class Banks extends Pure.Component {
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

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.banks !== this.state.banks) {
            const getData = () => {
                getList().then(response =>
                    this.setState({banks: response.data})
                )
            }
            getData()
        }
    }


    deleteBank = (id) => {
        try {
            delBank(id)
        }
        catch (e) {
            console.log(e.message)
        }
    }

    render () {
        const { banks } = this.state
        return <div className={s.container}>
            <div className={s.item}>
                <p>CALCULATOR</p>
                <Calculator banks={this.state.banks}/>
            </div>
            <div className={s.item}>
                {banks.length !== 0
                    ? <ul className={s.cardContainer}>
                        {banks.map(({_id, name, interestRate, loanTerm, maxLoan, minDownPayment}) =>
                            <Card
                                className={s.card}
                                raised={true}
                                key={_id}>
                                <h3 className={s.cardTitle}>{name}</h3>
                                <p>interest rate: {interestRate}%</p>
                                <p>maximum loan: {maxLoan} hrn.</p>
                                <p>minimum down payment: {minDownPayment} hrn.</p>
                                <p>loan term: {loanTerm} months</p>
                                <p className={s.cardBtn}><Button className={s.btn} onClick={()=>{this.deleteBank(_id)}}>delete</Button></p>
                            </Card>
                        )}
                    </ul>
                    : <p>...Loading</p>}
            </div>
        </div>
    }

};

