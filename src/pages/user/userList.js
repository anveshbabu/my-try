import React from 'react';




export class UserList extends React.Component {



    constructor(props) {
        console.log('comp fist')
        super(props);
        this.state = {
           userId:'123'
        };
    }





    render() {
        console.log('prop-->',this.props.count)
        return (
            <>
            <h4>get home value:{this.props.count}</h4>
            <button onClick={()=>this.props.getUser(this.state.userId)}>Send User Id</button>
            <h4>UserId:{this.state.userId}</h4>

</>

        )
    }





}