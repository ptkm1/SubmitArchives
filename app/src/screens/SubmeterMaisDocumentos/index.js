import React from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text} from 'react-native';
import {Container} from '../../components/Global';
import {
  SecondPart,
  Texto,
  ProsseguirBTN,
  Bloco,
  BotaoVermelho,
} from '../../components/HomePage';

import {FirstPart} from '../../components/Layout';

export default function SubmeterMaisDocumentos({navigation}) {
  return (
    <Container>
      <FirstPart>
        <Texto>Submeter documentos</Texto>
      </FirstPart>
      <View>
        <View style={{width: '50%'}}>
          <Text style={{marginBottom: 15}}>Certidão de nascimento</Text>
          <BotaoVermelho
            onPress={() => navigation.navigate('UploadDeDocumentos')}>
            <Text style={{color: 'white'}}>Incluir</Text>
          </BotaoVermelho>
        </View>

        <View style={{width: '50%'}}>
          <Text style={{marginBottom: 15}}>Declaração de nome social</Text>
          <BotaoVermelho
            onPress={() => navigation.navigate('UploadDeDocumentos')}>
            <Text style={{color: 'white'}}>Incluir</Text>
          </BotaoVermelho>
        </View>

        <View style={{width: '50%'}}>
          <Text style={{marginBottom: 15}}>Relatório médico</Text>
          <BotaoVermelho onPress={() => navigation.navigate('VerDocumentos')}>
            <Text style={{color: 'white'}}>Incluir</Text>
          </BotaoVermelho>
        </View>

        <View style={{width: '50%'}}>
          <Text style={{marginBottom: 15}}>Tipagem sanguínea</Text>
          <BotaoVermelho
            onPress={() => navigation.navigate('UploadDeDocumentos')}>
            <Text style={{color: 'white'}}>Incluir</Text>
          </BotaoVermelho>
        </View>
      </View>
    </Container>
  );
}
