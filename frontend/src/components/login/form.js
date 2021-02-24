
import React, { Component } from 'react';
import axios from 'axios';
import { data } from 'jquery';


class Formtest extends Component{
    

 
constructor(props){ 
    super(props);
    this.state = { username : '', data : [] , record : {  username : "NA"}}
    this.handleUsername = this.handleUsername.bind(this);
    this.subForm = this.subForm.bind(this);
};


get = () =>{
    axios.get("http://localhost:3001/user/api").then(result => {
        console.log(result.data)
        this.setState({ data : result.data})
    })
}


post = () =>{
    const abc = {about: "A beautiful ",
    address: "397, maim road,navatkuda, batticaloa",
    city: "Batticaloa",
    email: "battikaran6@gmail.com",
    fullname: "Raja Kumar",
    password: "12345",
    phone: 652223037,
    username: "Techcube"};
    axios.post("http://localhost:3001/user/NewUser/api",abc).then(result => {
        console.log(result.data)
        this.setState({ record : result.data})
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
                    <button className="btn btn-primary" onClick={this.post}>POST </button>
            
                { this.state.data.map(x=> <div key={x._id} >{x.username} </div>)}

                { this.state.record.username};
            </div>
        )
    }
}



export default Formtest;