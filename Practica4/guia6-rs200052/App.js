import React, {useState} from 'react';
import { Text, View, StyleSheet,Image, ScrollView,Modal,Button,TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';

const App = () =>{
  const[modalVisibleplaya, setModalVisibleplaya]=useState(false);
  const[modalComida, setModalComida]=useState(false);
    const[modalTurismo, setModalTurismo]=useState(false);

 return(
 <>
<ScrollView>
<Modal transparent={true} animationType="slide" visible={modalVisibleplaya} onRequestClose={()=>{alert('Modal has been closed');
}}>
  <View style={styles.vistaModal}>
  <View style={styles.Modal}>
    <Text style={styles.subtitulo}>Ir a la playa</Text>
    <Button title="Cerrar" onPress={()=>(setModalVisibleplaya(!modalVisibleplaya))}></Button>
    </View>
    </View>
    </Modal>

    <Modal transparent={true} animationType="slide" visible={modalComida} onRequestClose={()=>{alert('Modal has been closed');
}}>
  <View style={styles.vistaModal}>
  <View style={styles.Modal}>
    <Text style={styles.subtitulo}>Prueba los Platillos salvadoreños</Text>
    <Button title="Cerrar" onPress={()=>(setModalComida(!modalComida))}></Button>
    </View>
    </View>
    </Modal>

      <Modal transparent={true} animationType="slide" visible={modalTurismo} onRequestClose={()=>{alert('Modal has been closed');
}}>
  <View style={styles.vistaModal}>
  <View style={styles.Modal}>
    <Text style={styles.subtitulo}>Visita los lugares turisticos</Text>
    <Button title="Cerrar" onPress={()=>(setModalTurismo(!modalTurismo))}></Button>
    </View>
    </View>
    </Modal>

  <Text style={styles.titulo}>Platillos salvadoreños</Text>
  <View>
    <View>
    <TouchableHighlight onPress={()=>{setModalComida(!modalComida)}}>
      <Image style={styles.mejores} source={require('./src/mejores1.jpg')}/>
      </TouchableHighlight>
    </View>
    <View>
      <Image style={styles.mejores} source={require('./src/mejores2.jpg')}/>
    </View>
    <View>
      <Image style={styles.mejores} source={require('./src/mejores3.jpg')}/>
    </View>
    <View>
      <Image style={styles.mejores} source={require('./src/mejores3.jpg')}/>
    </View>
  </View>

  <Text style={styles.titulo}>Rutas Turisticas</Text>
  <View style={styles.listado}>
    <View style={styles.listaItem}>
        <TouchableHighlight onPress={()=>{setModalTurismo(!modalTurismo)}}>
      <Image style={styles.mejores} source={require('./src/ruta1.jpg')}/></TouchableHighlight>
    </View>
     <View style={styles.listaItem}>
      <Image style={styles.mejores} source={require('./src/ruta2.jpg')}/>
    </View>
     <View style={styles.listaItem}>
      <Image style={styles.mejores} source={require('./src/ruta3.jpg')}/>
    </View>
     <View style={styles.listaItem}>
      <Image style={styles.mejores} source={require('./src/ruta4.jpg')}/>
    </View>
  </View>
      <View style={{flexDirection:'row'}}>
      <Image style={styles.banner}
      source={require('./src/bg.jpg')}/>
        <View style={styles.contenedor}>
      <Text style={styles.titulo}>Que hacer en El Salvador</Text>
      <ScrollView horizontal>
          <View>
          <TouchableHighlight onPress={()=>{setModalVisibleplaya(!modalVisibleplaya)}}>
          <Image style={styles.ciudad}
          source={require('./src/actividad1.jpg')}/></TouchableHighlight>
          </View>
          <View>
          <Image style={styles.ciudad}
          source={require('./src/actividad2.jpg')}/>
          </View>
          <View>
          <Image style={styles.ciudad}
          source={require('./src/actividad3.jpg')}/>
          </View>
          <View>
          <Image style={styles.ciudad}
          source={require('./src/actividad4.jpg')}/>
          </View>
          <View>
          <Image style={styles.ciudad}
          source={require('./src/actividad5.jpg')}/>
          </View>
      </ScrollView>
      </View>
      </View>
</ScrollView>
</>
 );
};
const styles = StyleSheet.create({
 banner:{
   height:250,
   flex:1
 },
 titulo:{
   fontweight: 'bold',
   fontSize:24,
   marginvertical:10
 },
 contenedor:{
   marginHorizontal:10,
 },
 ciudad:{
   width:250,
   height:300,
   marginRigth:10
 },
 mejores:{
   width:'100%',
   height:200,
   marginVertical:5
 },
 listaItem:{
   flexBasis:'49%'
 },
 listado:{
   flexDirection:'row',
   flexWrap:'wrap',
   justifyContent:'space-between'
 },
vistaModal:{
  backgroundColor:'#000000aa',
  flex:1
},
Modal:{
  backgroundColor:'#fff',
  margin:50,
  padding:40,
  borderRadius:10,
  flex:1
},
subtitulo:{
  fontWeight:'bold',
  fontSize:14,
  justifyContent:'center',
}
});
export default App;
