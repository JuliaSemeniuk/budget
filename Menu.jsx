import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class Menu extends React.Component {
    render () {
        return (
                <div>
                    <Link style={{color: this.props.location.pathname === '/income' ? 'green' : 'grey'}}to='/income'>INCOME</Link> <br/>
                    <Link style={{color: this.props.location.pathname === '/exes' ? 'green' : 'grey'}} to='/exes'>EXES</Link>
                </div>
            )
        console.log('this.props', this.props);
    }
}

export default withRouter(Menu);