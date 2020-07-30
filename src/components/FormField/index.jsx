import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`

`;

function FormField({
  value, onChange, type, name, label,
}) {
  const fieldId = `id_${name}`;
  const isTextArea = type === 'textarea';
  const tag = isTextArea === 'textarea' ? 'textarea' : 'input';
  return (
    <div>
      <label htmlFor={fieldId}>
        { label }
        :
        <Input as={tag} id={fieldId} type={type} onChange={onChange} value={value} />
      </label>
    </div>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
};

export default FormField;
