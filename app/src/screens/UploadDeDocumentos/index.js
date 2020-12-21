import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Platform,
} from 'react-native';

import ImagePicker from 'react-native-image-picker';
import Axios from 'axios';

export default function UploadDeDocumentos() {
  const [avatar, setAvatar] = useState();
  const [photo, setPhoto] = useState();

  console.log(avatar);
  const imagePickerOptions = {
    title: 'Selecione uma imagem',
  };

  function imagePickerCallback(data) {
    if (data.didCancel) {
      return;
    }

    if (data.error) {
      return;
    }

    if (data.customButton) {
      return;
    }

    if (!data.uri) {
      return;
    }

    setAvatar(data);
  }

  function createFormData(photo, body) {
    const data = new FormData();

    data.append('photo', {
      name: avatar.fileName,
      type: avatar.type,
      uri:
        Platform.OS === 'android'
          ? avatar.uri
          : avatar.uri.replace('file://', ''),
    });

    Object.keys(body).forEach(key => {
      data.append(key, body[key]);
    });

    return data;
  }

  function uploadImage() {
    // IP servidor WEBLINK: 31.220.48.33

    fetch('http://192.168.0.100:8080/cadastrarCliente', {
      method: 'POST',
      body: createFormData(avatar, {userId: '123'}),
      headers: {
        Accept: 'application/json, application/xml, text/plain, text/html, *.*',
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => {
        console.log('upload succes', response);
        alert('Upload success!');
        setAvatar(null);
      })
      .catch(error => {
        console.log('upload error', error);
        alert('Upload failed!');
      });

    // await Axios.post(
    //   'http://localhost:3000/api/upload',
    //   createFormData(avatar, {userId: '123'}),
    // );
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: avatar
            ? avatar.uri
            : 'https://mltmpgeox6sf.i.optimole.com/w:761/h:720/q:auto/https://redbanksmilesnj.com/wp-content/uploads/2015/11/man-avatar-placeholder.png',
        }}
        style={styles.avatar}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          ImagePicker.showImagePicker(imagePickerOptions, imagePickerCallback)
        }>
        <Text style={styles.buttonText}>Escolher imagem</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => uploadImage()}>
        <Text style={styles.buttonText}>Enviar imagem</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 150,
    height: 50,
    borderRadius: 3,
    backgroundColor: '#f7595d',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  avatar: {
    width: 300,
    height: 300,
  },
});
