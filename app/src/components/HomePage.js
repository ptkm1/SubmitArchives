import styled from 'styled-components/native';

export const FirstPart = styled.View`
  height: 30%;
  width: 100%;
  margin-top: 10%;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

export const Texto = styled.Text`
  color: #f7595d;
  font-weight: 700;
  font-size: 25px;
`;

export const SecondPart = styled.View`
  height: 60%;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

export const ProsseguirBTN = styled.TouchableOpacity`
  background-color: #f7595d;
  padding: 15px;
  border-radius: 9px;
`;

export const BotaoVermelho = styled.TouchableOpacity`
  background-color: #f7595d;
  width: 300px;
  padding: 15px;
  border-radius: 9px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
`;

export const Bloco = styled.View`
  background-color: white;
  width: 90%;
  height: 100%;
  margin-top: 30%;
  border-radius: 5px;
`;

export const FormLogin = styled.View`
  flex-direction: column;
  align-items: center;
  width: 300px;
`;
