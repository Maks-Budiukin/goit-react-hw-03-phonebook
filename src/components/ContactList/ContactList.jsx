import React from "react"
import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledList = styled.ul`
  list-style: none;
  width: 300px;
  padding: 0;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4px;
    font-weight: bold;
  }

  button {
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
  li span {
    color: black;
    display: inline-block;
    margin-left: auto;
    margin-right: 8px;
    font-weight: normal;
  }

`


export function ContactList({contacts, filter, deleteHandler }) {
    
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    return (
        <StyledList>
      {filteredContacts.map((item) => {
        return(<li key={item.id}>{item.name} <span>{item.number}</span> <button onClick={() => deleteHandler(item.id)}>Del</button></li>)
      })}
    </StyledList>
    )
}

ContactList.propTypes = {
    deleteHandler: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
    contacts: PropTypes.array.isRequired,
}