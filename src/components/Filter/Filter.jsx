<<<<<<< Updated upstream
import {
  FilterWrapper,
  FilterInput,
  FilterLabel,
} from 'components/Filter/Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter, getContactsData } from 'redux/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector(getContactsData);

  const onFilterChange = e => {
    dispatch(updateFilter(e.currentTarget.value));
  };

  return (
    <FilterWrapper>
      <FilterLabel htmlFor="text">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
      />
    </FilterWrapper>
=======
import React from 'react';
import { addFilter } from 'redux/contactSlice';
import { useDispatch, useSelector } from 'react-redux';
import { InputForm } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.contacts.filter);

  return (
    <InputForm>
      <label>
        <h3>Find contact by name</h3>
        <input
          type="text"
          value={filterValue}
          onChange={e => dispatch(addFilter(e.target.value))}
          style={{ borderRadius: '10px', marginTop: '5px' }}
        />
      </label>
    </InputForm>
>>>>>>> Stashed changes
  );
};
