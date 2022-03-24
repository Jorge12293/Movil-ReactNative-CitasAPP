

import React, {useState} from 'react';

import {
  SafeAreaView,
  Text,
  Pressable,
  StyleSheet,
  FlatList
} from 'react-native';
import { Formulario } from './src/components/Formulario';
import Paciente from './src/components/Paciente';



const App= () => {

  const [modalVisible,setModalVisible]= useState(false);
  const [pacientes,setPacientes] = useState([]);
  const [paciente,setPaciente] = useState({});

  const pacienteEditar = id =>{
    const pacienteEditar= pacientes.filter(paciente=>paciente.id===id);
    setPaciente(pacienteEditar[0]);
  }

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.titulo}>  Administrador de Citas  
        <Text style={styles.tituloBold}> Veterinaria</Text>
      </Text>
      
      <Pressable
        style={styles.btnNuevaCita}
        onPress={()=>setModalVisible(!modalVisible)}>
        <Text style={styles.btnTextNuevaCita}>Nueva Cita</Text>
      </Pressable>
      
      {pacientes.length === 0 ? 
        <Text style={styles.noPacientes}>No hay Pacientes...</Text>:   
        <FlatList
          style={styles.listado} 
          data={pacientes}
          keyExtractor={(item)=>item.id}
          renderItem={({item})=>{
            return(
              <Paciente
                item={item}
                modalVisible = {modalVisible}
                setModalVisible = {setModalVisible}
                pacienteEditar={pacienteEditar}
              />
            )
          }}
        />
      }

      <Formulario 
        modalVisible = {modalVisible}
        setModalVisible = {setModalVisible}
        pacientes={pacientes}
        setPacientes = {setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}/>

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
  noPacientes:{
    marginTop:40,
    textAlign:'center',
    fontSize:24,
    fontWeight:'600'
  },
  btnTextNuevaCita:{
    textAlign:'center',
    color: '#FFF',
    fontSize:18,
    fontWeight:'900'
  },
  listado:{
    marginTop:50,
    marginHorizontal:30
  }
})


export default App;
