import styled from 'styled-components/native';

const Wrapper = styled.View`
  height: 100%;
  background-color: #ffffff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  color: #000000;
  font-size: 40px;
  font-weight: 800;
`;
const ItalicText = styled.Text`
  color: #000000;
  font-size: 36px;
  font-weight: 100;
  font-style: italic;
  font-stretch: ultra-expanded;
  text-align: center;
`;

const NormalText = styled.Text`
  color: #000000;
  font-size: 16px;
  font-weight: 300;
`;

const StyleInput = styled.TextInput`
  padding: 5px;
  margin: 5px;
  width: 80%;
  color: #3a3939;
  background: rgba(154, 154, 154, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(12.2px);
  border: none;
  border-radius: 3px;
`;

const Button = styled.TouchableOpacity`
  background: #030316;
  color: #fcfcff;
  font-size: 16px;
  margin: 1px;
  padding: 0.25px 1px;
  border-radius: 3px;
  min-width: 12%;
  height: 36px;
`;

const Card = styled.TouchableOpacity`
  padding: 2px;
  margin-top: 5px;
  margin-bottom: 5px;
  border: 2px solid #000000;
  border-radius: 3px;
`;

export {Wrapper, Title, Button, ItalicText, NormalText, StyleInput, Card};
