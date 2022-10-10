import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Modal,
  Button,
  TouchableHighlight,
} from 'react-native';
import ReactPlayer from 'react-player';
const ProxScreen =()=> {
  return(
    <ScrollView>
<Text style={styles.titulo}>Proximos Estrenos</Text>
    <View>
   <ReactPlayer url="https://youtu.be/j5FtXiIzWGo" style={styles.player} muted loop={true} playing={true}/>
   <Text style={styles.titulo}>La mujer rey</Text>
   <Text>Reverencia ante la guerrera más excepcional que jamás ha vivido. Mirá cómo LaMujerRey nace este 29 de septiembre.</Text>
  </View>
   <View>
   <ReactPlayer url="https://youtu.be/SRZAPBLkiTo" style={styles.player} muted loop={true} playing={true}/>
   <Text style={styles.titulo}>Manifiesto</Text>
   <Text>Estamos comenzando el descenso final. La temporada 4 de «Manifiesto» se estrena el 4 de noviembre.</Text>
  </View>
   <View>
   <ReactPlayer url="https://youtu.be/KS0A3PqHK_E" style={styles.player} muted loop={true} playing={true}/>
   <Text style={styles.titulo}>El Prodigio</Text>
   <Text>Protagonizada por Florence Pugh y basada en el libro de Emma Donoghue, autora de «La habitación», «El prodigio» es la historia de Anna O'Donnell, una niña irlandesa de once años cuya familia católica asegura que lleva cuatro meses sin comer.</Text>
  </View>
   <View>
   <ReactPlayer url="https://youtu.be/6mgek159VZs" style={styles.player} muted loop={true} playing={true}/>
   <Text style={styles.titulo}>‘Blonde’</Text>
   <Text>Todo el mundo creía conocerla, pero era una gran desconocida. En esta película audaz e imaginativa, el director Andrew Dominik explora la complicada vida de Marilyn Monroe, la leyenda de Hollywood. Basada en la novela homónima de Joyce Carol Oates, ‘Blonde’.</Text>
  </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
 titulo:{
   fontweight: 'bold',
   fontSize:24,
   marginvertical:10
 },
player: {
  width:'100%',
  height:'100%',
}
});
export default ProxScreen;