import React from 'react';
import { UserList } from "../user";


export class Home extends React.Component {

    constructor(props) {
        console.log('comp fist')
        super(props);
        this.state = {
            name: 'anvesh',
            count: 0,
            userId: '',
            formObj:{
                email:'text',
                password:'',
                fname:'',
                isChecked:false
            }
        };
    }



    handleChangeName = () => {

        this.setState({ count: this.state.count + 1 });

        this.setState({ name: 'xyz' })
    }

    getUserId = (id) => {
        console.log('parent khgjhgjh', id);
        this.setState({ userId: id })
    }


    callBack = () => {
        return 'xyz'
    }

    handleFormSubmit = () => {
        console.log('form submit',this.state.formObj)
    }

    handleChangeForm=(event)=>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(name);
        // this.setState({formObj})
    // formObj[name]=value;
    // setFormOb(formObj)
        // this.setState({formObj:this.state.formObj})
        this.setState({
            formObj: {
                ...this.state.formObj,
                [name]: value
            }
        })
    }

    render() {
        console.log('render--->')
        return (
            <>
                {/* <button onClick={this.handleChangeName}>change Text</button>
                <h4>name:{this.state.count}</h4>
                <h4>last name:{this.state.name}</h4>
                <h4>call back:{this.callBack()}</h4>
                <h4>child UserId:{this.state.userId}</h4>
                <hr/> */}
                <div class="container mt-5">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>

                        <input type="email" class="form-control" value={this.state.formObj.email} name="email"  onChange={this.handleChangeForm} placeholder="Enter email" />


                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" value={this.state.formObj.password} name="password" onChange={this.handleChangeForm} id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">f name</label>
                        <input type="password" class="form-control" value={this.state.formObj.fname} name="fname" onChange={this.handleChangeForm} id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" name="isChecked" checked={this.state.formObj.isChecked} onChange={this.handleChangeForm} />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
                </div>
                {/* <UserList count={this.state.count}  getUser={this.getUserId} /> */}
            </>


        )
    }





}