import React from 'react'
import {Text,View,StyleSheet,Pressable} from 'react-native';

export const Paciente = ({item,modalVisible,setModalVisible,pacienteEditar}) => {

  const {paciente,fecha,id} =item;

  const formatearFecha = fecha =>{
      const nuevaFecha = new Date(fecha);

      const opciones ={
          weekday:'long',
          year:'numeric',
          month:'long',
          day:'numeric'
      }

      return nuevaFecha.toLocaleDateString('es-ES',opciones);
  }


  return (
    <View style={styles.contenedor}>
        <Text style={styles.label}>Paciente:</Text>
        <Text style={styles.texto}>{paciente}</Text>
        <Text style={styles.fecha}>{formatearFecha(fecha)}</Text>

        <View style={styles.contenedorBotones}>
            <Pressable 
                style={[styles.btn,styles.btnEditar]}
                onPress={()=>{
                    setModalVisible(!modalVisible),
                    pacienteEditar(id)
                }}>
                <Text style={styles.btnTexto}>Editar</Text>
            </Pressable>
            <Pressable style={[styles.btn,styles.btnEliminar]}>
                <Text style={styles.btnTexto}>Eliminar</Text>
            </Pressable>
        </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
    contenedor:{
        backgroundColor:'#FFF',
        padding:20,
        borderBottomColor:'#94a3b8',
        borderBottomWidth:1
    },
    label:{
        color:'#374151',
        textTransform:'uppercase',
        fontWeight:'700',
        marginBottom:10
    },
    texto:{
        color:'#6D28D9',
        fontSize:24,
        fontWeight:'700',
        marginBottom:10
    },
    fecha:{
        color:'#374151',
    },
    contenedorBotones:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20
    },
    btn:{
        paddingVertical:5,
        paddingHorizontal:20,
        borderRadius:5
    },
    btnEditar:{
        backgroundColor:'#F59E0B'
    },
    btnEliminar:{
        backgroundColor:'#EF4444'
    },
    btnTexto:{
        textTransform:'uppercase',
        fontWeight:'700',
        fontSize:12,
        color:'#FFF'
    }

})

export default Paciente;