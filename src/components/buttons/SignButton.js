import styled from 'styled-components';
import Button from './Button';

const SignButton = styled(Button)`
  width: 60%;
  height: 45px;
  margin: ${({ margin }) => margin || '100px 0 10px 0'};
  font-size: 24px;
`;

export default SignButton;
