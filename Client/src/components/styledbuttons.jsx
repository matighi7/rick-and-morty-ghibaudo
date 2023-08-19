import styled from 'styled-components';

const button= styled.div`
 padding: 2em 2em;
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

`
export default button;