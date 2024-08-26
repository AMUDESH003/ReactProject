import React, { Component } from "react";
export default class ContactAPIProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formdata: {
        name: "",
        email: "",
        phone: "",
      },
      contactList: []
    };
  }
  componentWillMount = () => {
    this.getContactList()
  }
  getContactList = async () => {
    let resp = await fetch("http://localhost:3000/items")
    console.log(resp)
    let result = await resp.json()
    console.log(result)
    this.setState({
      contactList: result
    })
  }
 
 
  handlechange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      formdata: { ...this.state.formdata, [name]: value }
    })
  };
 
  handleSubmit = (event) => {
    event.preventDefault()
    this.addContact()
  };
 
  addContact = async () => {
    let headers = {
      method: "POST",
      body: JSON.stringify(this.state.formdata),
      headers: {
        'Content-type': 'application/json'
      }
    }
 
    let resp = await fetch("http://localhost:3000/items", headers)
    let result = await resp.json()
    this.getContactList()
    this.formEmpty()
 
  }
  handleDelete = async (id) => {
   
    let headers = {
      method: "DELETE"
    }
    let response = await fetch(http:localhost:3000/items/${id}, headers)
    let result = await response.json()
    this.getContactList()
  }
 
  handleEdit = (contact)=>{
    this.setState({
      formdata : contact
    }, ()=>{console.log(this.state.formdata)})
  }
 
  editContact = async()=>{
    let headers = {
      method: "PUT",
      body: JSON.stringify(this.state.formdata),
      headers: {
        'Content-type': 'application/json'
      }
    }
    let id = this.state.formdata.id
    let response = await fetch(http:localhost:3000/items/${id}, headers)
    let result = await response.json()
    this.getContactList()
    this.formEmpty()
  }
 
  formEmpty = ()=>{
    this.setState({
      formdata : {name:"",email:"",phone:""}
    })
  }
 
  render() {
 
    return (
      <div>
        <h3>Contact API - Student Record System</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
           Name:  <input
              type="text"
              name="name"
              value={this.state.formdata.name}
              onChange={this.handlechange}
            />
          </div>
          <div>
           Email:  <input
              type="email"
              name="email"
              value={this.state.formdata.email}
              onChange={this.handlechange}
            />
          </div>
          <div>
            Phone Number: <input
              type="text"
              name="phone"
              value={this.state.formdata.phone}
              onChange={this.handlechange}
            />
          </div>
          <input type="submit" value="Submit" />
          <input type="button" value="ReEdit" onClick={this.editContact}/>
        </form>
 
        {JSON.stringify(this.state.formdata)}
 
        <div>
          <h5>List of Contacts</h5>
          {
            this.state.contactList.map((contact, index) => {
              return (<>
                <li>Name -  {contact.name} Email -  {contact.email} Phone Number - {contact.phone}
                  <button onClick={() => this.handleDelete(contact.id)}>Delete</button>
                  <button onClick={()=>{this.handleEdit(contact)}}>Edit</button>
                </li>
 
              </>)
            })
          }
        </div>
      </div>
    );
  }
}