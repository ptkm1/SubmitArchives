import React from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text} from 'react-native';
import {Container} from '../../components/Global';
import {
  FirstPart,
  SecondPart,
  Texto,
  ProsseguirBTN,
  Bloco,
  BotaoAzul,
  FormLogin,
  BotaoVermelho,
} from '../../components/HomePage';
import {InputNoBorder} from '../../components/UIKits/Inputs';

export default function Index({navigation}) {
  return (
    <Container>
      <FirstPart>
        <Texto>Bem vindo!</Texto>
      </FirstPart>
      <View>
        <View style={{width: '100%', marginLeft: 15, marginTop: 15}}>
          <FormLogin>
            <InputNoBorder />
            <InputNoBorder />
          </FormLogin>
          <BotaoVermelho
            onPress={() => navigation.navigate('SubmeterMaisDocumentos')}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
              }}>
              Incluir
            </Text>
          </BotaoVermelho>
        </View>
      </View>
    </Container>
  );
}
