import React from 'react'

export default class Income extends React.Component {

    render () {
        const { incomeArticle, incomeTotal } = this.props;
        console.log(this.props)


        return (
            <div>
                <table border='1'>
                    <thead alighn='center'>
                        <tr>
                            <td colSpan='4'>Income</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td width='100'>title</td>
                            <td width='100'>amount</td>
                            <td width='100'>data</td>
                            <td width='100'>delete</td>
                        </tr>
                        {incomeArticle.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>{value.title}</td>
                                    <td>{value.amount}</td>
                                    <td>{value.data}</td>
                                    <td><button onClick={this.props.deleteIncomeArticle} id={index}>x</button></td>
                                </tr>
                            )
                        })}
                        <tr>
                            <td colSpan='2'>total</td>
                            <td colSpan='2'>{incomeTotal}</td>
                        </tr>
                    </tbody>
                </table>
                <form>
                    <p>add income article</p>
                    <input onChange={this.props.getIncomeTitle} placeholder='title' value={this.props.incomeTitle}></input><br/>
                    <input onChange={this.props.getIncomeAmount} placeholder='amount'value={this.props.incomeAmount}></input><br/>
                    <input onChange={this.props.getIncomeData} placeholder='data'value={this.props.incomeData}></input><br/>
                    <input onClick={this.props.addIncomeArticle} type='button'value='Add'></input>
                </form>
            </div>
        )
    }
}