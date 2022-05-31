import React from 'react';
import {Modal, Text} from 'react-native';


const ModalCita = (data) => {
  return (
    <Modal visible={data} animationType="slide">
      <Text>Hola Mauricio</Text>
    </Modal>
  )
}

export default ModalCita;
