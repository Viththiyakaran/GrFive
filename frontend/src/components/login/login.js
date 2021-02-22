import React, { Component } from 'react';
//import Date from 'react-datetime';

class Login extends Component{
    constructor(props)
    {
        super(props);
        this.state = { value : ''};
        this.handleChange =this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value : event.target.value});
    }

    handleSubmit(event){
        alert('A name was submitted' + this.state.value);
        event.preventDefault();
    }



    render(){
        return(
            <div className="container col-md-4 mt-6 " >
                <form onSubmit={this.handleSubmit} >
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" value={this.state.value}  onChange={this.handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <p className="mt-5 mb-3 text-muted text-center">{(new Date().getFullYear())}</p>
        </form>
            </div>
        );
    }

}

export default Login;