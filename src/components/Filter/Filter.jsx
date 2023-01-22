import React from "react";
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledFilter = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    margin-bottom: 20px;
    label {
        font-weight: 500;
        margin-bottom: 8px;
    }
    input {
        width: 200px;
        border: 1px solid silver;
        border-radius: 4px;

        &:hover,
        &:focus  {
        outline: none;
        border: 1px solid skyblue;
        }
    }
`

export function Filter({ inputChangeHandler, filterValue }) {
    const filterInpudId = nanoid();
    return (
        <StyledFilter>
        <label htmlFor={filterInpudId}>Find contacts by name </label>  
    <input
        type="text"
        name="filter"
        id={filterInpudId}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={filterValue}
        onChange={inputChangeHandler}
            />  
        </StyledFilter>
    )
}

Filter.propTypes = {
    inputChangeHandler: PropTypes.func.isRequired,
    filterValue: PropTypes.string.isRequired,
}

