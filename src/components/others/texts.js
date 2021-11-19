import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  text-align: center;

  .semibold {
    font-weight: 500;
  }
`;

const Subtext = styled.p`
  font-size: 1.3rem;
  margin-top: 25px;
  text-align: ${({ center }) => (center ? 'center' : 'start')};
`;

export { Title, Subtext };
