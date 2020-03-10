import React from 'react';
import './App.css';
import Exes from './Exes'

export class App extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            exesTitle: '', exesAmount: '', exesData: '',
            exesArticle: [],
        };
    };

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

    render () {
        return (            
            <div>
                <Exes
                
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
            </div>
        ) //return
    }; //render
}; //export
export default App;
