import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import {View, Text, Image, StyleSheet} from 'react-native';
import {BotaoVermelho} from '../../components/HomePage';
import {Container} from '../../components/Styles/MostrarImagens';

export default function VerDocumentos({navigation}) {
  const [Foto, setFoto] = useState();

  console.log(Foto);

  useEffect(() => {}, []);

  async function VerDocumentos() {
    const data = await Axios.get('http://192.168.0.100:8080/cliente/4');
    return setFoto(data.data[0].imagem);
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: Foto
            ? Foto
            : 'https://mltmpgeox6sf.i.optimole.com/w:761/h:720/q:auto/https://redbanksmilesnj.com/wp-content/uploads/2015/11/man-avatar-placeholder.png',
        }}
        style={styles.avatar}
      />
      <View>
        <Text style={{marginBottom: 15}}>
          Clique para ver documentos do usuario
        </Text>
        <BotaoVermelho onPress={() => VerDocumentos()}>
          <Text style={{color: 'white'}}>Incluir</Text>
        </BotaoVermelho>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  avatar: {
    width: 300,
    height: 300,
    borderColor: '#f7595d',
    borderWidth: 1,
  },
});
