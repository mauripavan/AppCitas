import React, {useState} from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import ModalCita from './src/components/ModalCita';

const App = () => {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Administrador de citas</Text>
      <Text style={styles.tituloBold}>Veterinaria</Text>
      <Pressable
        onPress={() => {
          console.log("asd");
          setVisibleModal(true);
        }}
        style={styles.btnNuevaCita}>
        <Text style={styles.btnTextNuevaCita}>Nueva Cita</Text>
      </Pressable>
      <ModalCita data={visibleModal}></ModalCita>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DFD3E3',
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '400',
  },
  tituloBold: {
    fontWeight: '900',
    color: '#7209b7',
    textAlign: 'center',
    fontSize: 20,
  },
  btnNuevaCita: {
    backgroundColor: '#c77dff',
    padding: 10,
    marginTop: 30,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  btnTextNuevaCita: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
});

export default App;
