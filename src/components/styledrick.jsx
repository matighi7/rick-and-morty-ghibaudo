import styled from 'styled-components';

const DivButtons = styled.div`
  padding: 1em 2em;
  border-radius: 10px;
  background-color: coral;
  font-size: 1.2em;
  color: #fff;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff6f00;
  }

  &:active {
    transform: translateY(2px);
  }
`;

export default DivButtons;

