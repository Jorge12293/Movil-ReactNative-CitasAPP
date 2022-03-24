import React,{useState,useEffect} from 'react'

import {Text,Modal,SafeAreaView,StyleSheet,TextInput,View,ScrollView,Pressable,Alert} from 'react-native';

import DatePicker from 'react-native-date-picker'


export const Formulario = ({
  modalVisible,
  setModalVisible,
  pacientes,
  setPacientes,
  paciente:pacienteObj,
  setPaciente:setPacienteApp}) => {

  const [paciente,setPaciente] = useState();
  const [id,setId] = useState();
  const [propietario,setPropietario] = useState('');
  const [email,setEmail] = useState('');
  const [telefono,setTelefono] = useState('');
  const [fecha,setFecha] = useState(new Date());
  const [sintomas,setSintomas] = useState('');

  useEffect(()=>{
    console.log(pacienteObj);

    if(Object.keys(pacienteObj).length>0){

      console.log('USE EFCTE 1');
      setId(pacienteObj.id);
      setPaciente(pacienteObj.paciente);
      setPropietario(pacienteObj.propietario);
      setEmail(pacienteObj.email);
      setTelefono(pacienteObj.telefono);
      setFecha(pacienteObj.fecha);
      setSintomas(pacienteObj.sintomas);
    }  
    console.log('USE EFCTE 2');
  },[pacienteObj])


  const handleCita = () =>{
    
    if([paciente,propietario,email,telefono,fecha,sintomas].includes('')){
      Alert.alert(
        'Error',
        'Todos Los campos son obligatorios',
        [{text:'Ok'}]
      );
      return;
    }
  
    const nuevoPaciente={
      paciente,
      propietario,
      email,
      telefono,
      fecha,
      sintomas
    }

    if(id){
      nuevoPaciente.id=id;
      const pacientesActualizados=pacientes.map(pacienteState=>
        pacienteState.id===nuevoPaciente.id? nuevoPaciente:pacienteState);
      setPacientes(pacientesActualizados);
      setPacienteApp({});

    }else{
      nuevoPaciente.id= Date.now();
      setPacientes([...pacientes, nuevoPaciente]);
    }



    setModalVisible(!modalVisible);
    setId('');
    setPaciente('');
    setPropietario('');
    setEmail('');
    setTelefono('');
    setFecha(new Date());
    setSintomas('');

  }


  return (

        <Modal
            animationType='slide'
            visible={modalVisible}>
            <SafeAreaView style={styles.container}>
                <ScrollView>

                  <Text style={styles.titulo}>{pacienteObj.id ? 'EDITAR' : 'NUEVA'} {''}
                      <Text style={styles.tituloBold}>Cita</Text></Text>

                  <Pressable style={styles.btnCancelar}
                    onPress={()=>{
                      setModalVisible(!modalVisible);
                      setPacienteApp({});
                      setId('');
                      setPaciente('');
                      setPropietario('');
                      setEmail('');
                      setTelefono('');
                      setFecha(new Date());
                      setSintomas('');
                    }}>
                    <Text style={styles.btnCancelarTexto}> X CANCELAR</Text>
                  </Pressable>

                  <View  style={styles.campo}>
                      <Text style={styles.label}> Nombre Paciente </Text>
                      <TextInput
                        style={styles.input}
                        placeholder='Nombre Paciente'
                        placeholderTextColor={'#666'}
                        value={paciente}
                        onChangeText={setPaciente}/>    
                  </View> 

                  <View  style={styles.campo}>
                      <Text style={styles.label}> Nombre Propietario </Text>
                      <TextInput
                        style={styles.input}
                        placeholder='Nombre Propietario'
                        placeholderTextColor={'#666'}
                        value={propietario}
                        onChangeText={setPropietario}/>    
                  </View> 
                  
                  <View  style={styles.campo}>
                      <Text style={styles.label}> Email </Text>
                      <TextInput
                        style={styles.input}
                        placeholder='Email Propietario'
                        placeholderTextColor={'#666'}
                        keyboardType='email-address'
                        value={email}
                        onChangeText={setEmail}/>     
                  </View>  

                  
                  <View  style={styles.campo}>
                      <Text style={styles.label}> Telefono </Text>
                      <TextInput
                        style={styles.input}
                        placeholder='Telefono Propietario'
                        placeholderTextColor={'#666'}
                        keyboardType='number-pad'
                        value={telefono}
                        onChangeText={setTelefono}
                        maxLength={10}/>    
                  </View>

                  <View  style={styles.campo}>
                      <Text style={styles.label}> Fecha Alta </Text>
                      <View style={styles.fechaContenedor}>
                        <DatePicker 
                          date={fecha}
                          locale='es'
                          onDateChange={(date)=>setFecha(date)}
                        />
                      </View>
                   
                  </View>

                  <View  style={styles.campo}>
                      <Text style={styles.label}> Sintomas </Text>
                      <TextInput
                        style={[styles.input,styles.sintomasInput]}
                        placeholder='Sintomas Paciente'
                        placeholderTextColor={'#666'}
                        value={sintomas}
                        onChangeText={setSintomas}
                        multiline={true}
                        numberOfLines={4}/>   
                  </View>

                  <Pressable 
                    style={styles.btnNuevaCita}
                    onPress={handleCita}>
                    <Text style={styles.btnNuevaCitaTexto}> {pacienteObj.id ? 'ACTUALIZAR' : 'NUEVO'} Paciente</Text>
                  </Pressable>

                </ScrollView>
            </SafeAreaView>    
        </Modal>
    
  )
}

const styles = StyleSheet.create({
    container:{
      backgroundColor:'#6D28D9',
      flex: 1
    },
    titulo:{
      fontSize:38,
      fontWeight:'600',
      textAlign:'center',
      marginTop:30,
      color:'#FFF'
      
    },
    tituloBold:{
      fontWeight:'900',
    },
    btnCancelar:{
      marginVertical:15,
      backgroundColor:'#5827A4',
      marginHorizontal:30,
      padding:15,
      borderRadius:10,
      borderWidth:1,
      borderColor:'#FFF'
    },
    btnCancelarTexto:{
      color:'#FFF',
      textAlign:'center',
      fontWeight:'900',
      fontSize:16,
      textTransform:'uppercase'
    },
    campo:{
        marginTop:10,
        marginHorizontal:30,

    },
    label:{
        color:'#fff',
        marginBottom:10,
        marginTop:15,
        fontSize:20,
        fontWeight:'600'
    },
    input:{
        backgroundColor:'#fff',
        padding:15,
        borderRadius:10,
      
    },
    sintomasInput:{
      height:100
    
    },
    fechaContenedor:{
      backgroundColor:'#fff',
      borderRadius:10,
    },
    btnNuevaCita:{
      marginVertical:50,
      backgroundColor:'#F59E0B',
      paddingVertical:15,
      marginHorizontal:30,
      borderRadius:10
    },
    btnNuevaCitaTexto:{
      color:'#5827A4',
      textAlign:'center',
      fontWeight:'900',
      fontSize:16,
      textTransform:'uppercase'
    },
  })
  

export default Formulario;