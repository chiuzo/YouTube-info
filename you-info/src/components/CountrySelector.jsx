import React from 'react';
import Select from 'react-select';
import countries from './countries'; // Assume this is an array of country objects

const CountrySelector = ({ selectedCountry, onCountryChange }) => {
  const options = [
    { value: 'General', label: '🌐 General (Global)' },
    ...countries.map(c => ({ value: c.code, label: c.name }))
  ];

  return (
    <div className="w-full md:w-80">
      <Select
        options={options}
        value={options.find(opt => opt.value === selectedCountry)}
        onChange={e => onCountryChange(e.value)}
        placeholder="Select Country"
        isSearchable
      />
    </div>
  );
};

export default CountrySelector;
