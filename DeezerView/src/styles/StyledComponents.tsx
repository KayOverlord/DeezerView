import styled from 'styled-components/native';

const Wrapper = styled.View`
  height: 100%;
  background-color: #160f24;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  color: #fcfcff;
  font-size: 16px;
`;

const Button = styled.Button`
  background: #3c3abe;
  color: #fcfcff;
  font-size: 16sp;
  margin: 1px;
  padding: 0.25px 10px;
  border: 2px solid #3c3abe;
  border-radius: 3px;
  width: 60%;
`;

const Input = styled.TextInput`
  padding: 0.5em;
  margin: 0.5em;
  color: #fcfcff;
  background: #2d2e37;
  border: none;
  border-radius: 3px;
`;

export {Wrapper, Title, Input, Button};
