import React, { Component } from 'react';

class Login extends Component{
    render(){
        return(
            <div className="container col-md-4 mt-6 " >
                <form >
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <p className="mt-5 mb-3 text-muted text-center">&copy; 2017–2021</p>
        </form>
            </div> 
        );
    }

}

export default Login;