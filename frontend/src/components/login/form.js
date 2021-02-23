
import React, { Component } from 'react';
import axios from 'axios';
import { data } from 'jquery';


class Formtest extends Component{
    

 
constructor(props){ 
    super(props);
    this.state = { username : '', data : [] }
    this.handleUsername = this.handleUsername.bind(this);
    this.subForm = this.subForm.bind(this);
};


get = () =>{
    axios.get("https://jsonplaceholder.typicode.com/todos").then(result => {
        console.log(result.data)
        this.setState({ data : result.data})
    })
}

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

                <button className="btn btn-primary" onClick={this.get}> GET </button>
                    <button className="btn btn-primary" onClick={this.get}>POST </button>
            
                { this.state.data.map(x=> <div key={x.id} >{x.title} </div>)}
            </div>
        )
    }
}

export default Formtest;