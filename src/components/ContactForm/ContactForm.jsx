import React from "react";
import { Component } from "react";
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledForm = styled.form`
display: flex;
flex-wrap: wrap;
justify-content: space-between;

gap: 4px;
width: 300px;

    input {
        display: flex;
        width: 200px;
        flex-direction: column;
        border: 1px solid silver;
        border-radius: 4px;

        &:hover,
        &:focus  {
        outline: none;
        border: 1px solid skyblue;
        }
    }
    button {
    margin-left: auto;
    background-color: #fff;
    padding: 5px 10px;
    border: 1px solid silver;
    border-radius: 4px;

    &:hover,
    &:focus  {
      outline: none;
      border: 1px solid skyblue;
    }
  }
`

export class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }

    nameInpudId = nanoid();
    numberInpudId = nanoid();

    onInputChange = (event) => {

  this.setState({
    [event.target.name]: event.target.value})
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state)
        this.setState({
            name: '',
            number: ''
        })
  }

    render() {
        return(
        <StyledForm onSubmit={this.handleSubmit}>
    <label htmlFor={this.nameInpudId}>Name </label>
    <input
      type="text"
      name="name"
      id={this.nameInpudId}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      value={this.state.name}
      onChange={this.onInputChange}
      required
        />
    <label htmlFor={this.numberInpudId}>Number </label>    
    <input
      type="tel"
          name="number"
          id={this.numberInpudId}
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={this.state.number}
      onChange={this.onInputChange}
      required
    />

        <button type="submit">Add contact</button>
        
    </StyledForm>)
    }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}