import styled from 'styled-components';

const Input = styled.input`
  width: 85%;
  height: 60px;
  font-size: 22px;
  border-radius: 8px;
  border: 1px solid #604848;
  padding: 8px;
  margin-bottom: 8px;

  ::placeholder {
    color: #b8b8b8;
    font-weight: 700;
  }

  :focus {
    outline: none;
  }
`;

export default Input;
