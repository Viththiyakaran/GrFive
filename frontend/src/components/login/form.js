
import React, { Component } from 'react';
 


class Formtest extends Component{
    
constructor(props){ 
    super(props);
    this.state = { username : ''}
    this.handleUsername = this.handleUsername.bind(this);
    this.subForm = this.subForm.bind(this);
};

handleUsername(event){ 
    this.setState ({username : event.target.value })
}


subForm(event){
    alert('A name was submitted' + this.state.username);
    event.preventDefault();
}


    render(){
        return(
            <div className="container col-md-4">
                 <form onSubmit={this.subForm} >
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" value={this.state.username} onChange={this.handleUsername} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <button className="btn btn-primary" type="submit"> Submit </button>
                </form>
            </div>
        )
    }
}

export default Formtest;