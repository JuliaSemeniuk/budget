import React from 'react'
import './App.css'
import Exes from './Exes'
import Income from './Income'
import Menu from './Menu'
import { Route, Switch } from 'react-router-dom'

export class App extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            exesTitle: '', exesAmount: '', exesData: '',
            exesArticle: [],

            incomeTitle: '', incomeAmount: '', incomeData: '',
            incomeArticle: [],
        };
    };
    //exes part
    getExesTitle = (event) => {
        const newExesTitle = event.target.value;
        this.setState({ exesTitle: newExesTitle })
    };

    getExesAmount = (event) => {
        const newExesAmount = event.target.value;
        this.setState({ exesAmount: newExesAmount })
    };

    getExesData = (event) => {
        const newExesData = event.target.value;
        this.setState({ exesData: newExesData })
    };

    addExesArticle = () => {
        const { exesArticle } = this.state;
        const newExesArticle = exesArticle.slice();
        const article = {
            title: this.state.exesTitle,
            amount: this.state.exesAmount,
            data: this.state.exesData,
        };
        newExesArticle.push(article);
        this.setState({ exesArticle: newExesArticle, exesTitle: '', exesAmount: '', exesData: ''})
    };

    deleteExesArticle = (event) => {
        const { exesArticle } = this.state;
        const newExesArticle = exesArticle.slice();
        const index = parseInt(event.target.id);
        newExesArticle.splice(index, 1);
        this.setState({ exesArticle: newExesArticle })
    }
    //income part
    getIncomeTitle = (event) => {
        const newIncomeTitle = event.target.value;
        this.setState({ incomeTitle: newIncomeTitle })
    };

    getIncomeAmount = (event) => {
        const newIncomeAmount = event.target.value;
        this.setState({ incomeAmount: newIncomeAmount })
    };

    getIncomeData = (event) => {
        const newIncomeData = event.target.value;
        this.setState({ incomeData: newIncomeData })
    };

    addIncomeArticle = () => {
        const { incomeArticle } = this.state;
        const newIncomeArticle = incomeArticle.slice();
        const article = {
            title: this.state.incomeTitle,
            amount: this.state.incomeAmount,
            data: this.state.incomeData,
        };
        newIncomeArticle.push(article);
        this.setState({ incomeArticle: newIncomeArticle, incomeTitle: '', incomeAmount: '', incomeData: ''})
    };

    deleteIncomeArticle = (event) => {
        const { incomeArticle } = this.state;
        const newIncomeArticle = incomeArticle.slice();
        const index = parseInt(event.target.id);
        newIncomeArticle.splice(index, 1);
        this.setState({ incomeArticle: newIncomeArticle })
    }

    render () {
        
        const { exesArticle, incomeArticle } = this.state;

        let exesTotal = 0;
        exesArticle.map(value => {
            exesTotal = exesTotal + parseInt(value.amount);
        });

        let incomeTotal = 0;
        incomeArticle.map(value => {
            incomeTotal = incomeTotal + parseInt(value.amount);
        });


        let totalBalance = incomeTotal - exesTotal;

        return (            
            <div>
                <Menu/>
               
                <Switch>

                    <Route path={'/exes'}>
                        <Exes
                        exesTotal={exesTotal}
                        exesArticle={this.state.exesArticle}
                        exesTitle={this.state.exesTitle}
                        exesAmount={this.state.exesAmount}
                        exesData={this.state.exesData}
                        getExesTitle={this.getExesTitle}
                        getExesAmount={this.getExesAmount}
                        getExesData={this.getExesData}
                        addExesArticle={this.addExesArticle}
                        deleteExesArticle={this.deleteExesArticle}
                         />
                    
                    </Route>
                    <Route path={'/income'}>
                        <Income
                        incomeTotal={incomeTotal}
                        incomeArticle={this.state.incomeArticle}
                        incomeTitle={this.state.incomeTitle}
                        incomeAmount={this.state.incomeAmount}
                        incomeData={this.state.incomeData}
                        getIncomeTitle={this.getIncomeTitle}
                        getIncomeAmount={this.getIncomeAmount}
                        getIncomeData={this.getIncomeData}
                        addIncomeArticle={this.addIncomeArticle}
                        deleteIncomeArticle={this.deleteIncomeArticle}
                        />
                          
                    </Route>
                </Switch> 
                              
                <div>
                <table border='1'>
                        <thead>
                            <tr>
                                <td>Total Balance<b></b></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td width='320'>{totalBalance}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>              
            </div>
        ) //return
    }; //render
}; //export
export default App;
