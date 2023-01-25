import React from "react";
import { Component } from "react";
import { nanoid } from 'nanoid'
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import styled from "styled-components";


const Wrapper = styled.div`
  width: 300px;
  margin-left: 50px;
  h1 {
    font-size: 2.1em;
    text-align: right;
  }
  h2 {
    font-size: 2.1em;
  }
  span {
    color: skyblue;
  }
`


export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  
}

  componentDidMount = () => {
    const contacts = JSON.parse(localStorage.getItem("contacts"))
    
    this.setState(() => ({contacts}))
  }

  componentDidUpdate = (prevProps, prevState) => {
    
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    } 
  }

  submitHandler = data => {
    const normalizedName = data.name.toLowerCase();
    this.state.contacts.find(contact => contact.name.toLowerCase() === normalizedName) ? 
      alert(`${data.name} is already in contacts `) :
      this.setState(prevState => ({
    contacts: [...prevState.contacts,
      {
        id: nanoid(),
        name: data.name,
        number: data.number,
    }]
  })
  )
}
  
   onInputChange = (event) => {

  this.setState({
    [event.target.name]: event.target.value})
    }

  deleteHandler = (contactID) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactID)
    }))
  }

  render() {
  
    
  return (
      <Wrapper>
      <h1><span>P</span>honebook</h1>
      <ContactForm onSubmit={this.submitHandler} />
      <h2>Contact<span>s</span></h2>
      <Filter inputChangeHandler={this.onInputChange} filterValue={this.state.filter} />
      <ContactList contacts={this.state.contacts} filter={this.state.filter} deleteHandler={this.deleteHandler} />
      </Wrapper>
    
   )
}

}

const x = 0;