import React from 'react'

export default class Exes extends React.Component {

    render () {
        const { exesArticle, exesTitle, exesAmount, exesData} = this.props;

        let exesTotal = 0;
        exesArticle.map(value => {
            exesTotal = exesTotal + parseInt(value.amount);
        });

        return (            
            <div>
                <table border='1'>
                    <thead alighn='center'>
                        <tr>
                            <td colSpan='4'>Expands</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td width='100'>title</td>
                            <td width='100'>amount</td>
                            <td width='100'>data</td>
                            <td width='100'>delete</td>
                        </tr>
                        {exesArticle.map((value, index) => {
                            return (
                                <tr key={value}>
                                    <td>{value.title}</td>
                                    <td>{value.amount}</td>
                                    <td>{value.data}</td>
                                    <td><button onClick={this.props.deleteExesArticle} id={index}>x</button></td>
                                </tr>
                            )
                        })}
                        <tr>
                            <td colSpan='2'>total</td>
                            <td colSpan='2'>{exesTotal}</td>
                        </tr>
                    </tbody>
                </table>
                <form>
                    <p>add exes article</p>
                    <input onChange={this.props.getExesTitle} placeholder='title' value={this.props.exesTitle}></input><br/>
                    <input onChange={this.props.getExesAmount} placeholder='amount'value={this.props.exesAmount}></input><br/>
                    <input onChange={this.props.getExesData} placeholder='data'value={this.props.exesData}></input><br/>
                    <input onClick={this.props.addExesArticle} type='button'value='Add'></input>
                </form>
            </div>
        )
    }
}