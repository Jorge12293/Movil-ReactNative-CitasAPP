

import React, {useState} from 'react';

import {
  SafeAreaView,
  Text,
  Pressable,
  StyleSheet
} from 'react-native';
import { Formulario } from './src/components/Formulario';



const App= () => {

  const [modalVisible,setModalVisible]= useState(false);

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.titulo}>  Administrador de Citas  
        <Text style={styles.tituloBold}> Veterinaria</Text>
      </Text>
      
      <Pressable
        style={styles.btnNuevaCita}
        onPress={()=>setModalVisible(!modalVisible)}
        
      >
        <Text style={styles.btnTextNuevaCita}>Nueva Cita</Text>
      </Pressable>
      
      
      <Formulario 
        modalVisible = {modalVisible}
        setModalVisible = {setModalVisible} />

    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#F3F4F6',
    flex: 1
  },
  titulo:{
    textAlign:'center',
    textTransform:'uppercase',
    fontSize:30,
    color:'#374151',
    fontWeight:'600'
  },
  tituloBold:{
    fontWeight:'900',
    color:'#6D28D9',
  },
  btnNuevaCita:{
    backgroundColor:'#6D28D9',
    padding:15,
    marginTop:30,
    marginHorizontal:20,
    borderRadius:10

  },
  btnTextNuevaCita:{
    textAlign:'center',
    color: '#FFF',
    fontSize:18,
    fontWeight:'900'
  }
})


export default App;
