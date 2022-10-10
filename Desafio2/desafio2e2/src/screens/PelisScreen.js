import React, { useState } from 'react';
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
import Constants from 'expo-constants';
const PelisScreen = () => {
  const [Comedy1, SetComedy1] = useState(false);
  return (
    <>
      <ScrollView>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.contenedor}>
            <Text style={styles.titulo}>Comedia</Text>
            <ScrollView horizontal>
              <View>
                <TouchableHighlight
                  onPress={() => {
                    SetComedy1(true);
                  }}>
                  <Image
                    style={styles.ciudad}
                    source={require('../img/pelicula/com1.jpeg')}
                  />
                </TouchableHighlight>
              </View>
              <View>
                <Image
                  style={styles.ciudad}
                  source={require('../img/pelicula/com2.jpeg')}
                />
              </View>
              <View>
                <Image
                  style={styles.ciudad}
                  source={require('../img/pelicula/com3.jpeg')}
                />
              </View>
              <View>
                <Image
                  style={styles.ciudad}
                  source={require('../img/pelicula/com4.jpeg')}
                />
              </View>
              <View>
                <Image
                  style={styles.ciudad}
                  source={require('../img/pelicula/com5.jpeg')}
                />
              </View>
              <View>
                <Image
                  style={styles.ciudad}
                  source={require('../img/pelicula/com6.jpeg')}
                />
              </View>
            </ScrollView>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.contenedor}>
            <Text style={styles.titulo}>Accion</Text>
            <ScrollView horizontal>
              <View>
                <TouchableHighlight
                  onPress={() => {
                    SetComedy1(true);
                  }}>
                  <Image
                    style={styles.ciudad}
                    source={require('../img/pelicula/images-5.jpeg')}
                  />
                </TouchableHighlight>
              </View>
              <View>
                <Image
                  style={styles.ciudad}
                  source={require('../img/pelicula/images-6.jpeg')}
                />
              </View>
              <View>
                <Image
                  style={styles.ciudad}
                  source={require('../img/pelicula/images-10.jpeg')}
                />
              </View>
              <View>
                <Image
                  style={styles.ciudad}
                  source={require('../img/pelicula/images-7.jpeg')}
                />
              </View>
              <View>
                <Image
                  style={styles.ciudad}
                  source={require('../img/pelicula/images-8.jpeg')}
                />
              </View>
              <View>
                <Image
                  style={styles.ciudad}
                  source={require('../img/pelicula/images-9.jpeg')}
                />
              </View>
            </ScrollView>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.contenedor}>
            <Text style={styles.titulo}>Thriller</Text>
            <ScrollView horizontal>
              <View>
                <TouchableHighlight
                  onPress={() => {
                    SetComedy1(true);
                  }}>
                  <Image
                    style={styles.ciudad}
                    source={require('../img/pelicula/Unknown-4.jpeg')}
                  />
                </TouchableHighlight>
              </View>
              <View>
                <Image
                  style={styles.ciudad}
                  source={require('../img/pelicula/Unknown-3.jpeg')}
                />
              </View>
              <View>
                <Image
                  style={styles.ciudad}
                  source={require('../img/pelicula/images-14.jpeg')}
                />
              </View>
              <View>
                <Image
                  style={styles.ciudad}
                  source={require('../img/pelicula/images-13.jpeg')}
                />
              </View>
              <View>
                <Image
                  style={styles.ciudad}
                  source={require('../img/pelicula/images-12.jpeg')}
                />
              </View>
              <View>
                <Image
                  style={styles.ciudad}
                  source={require('../img/pelicula/images-11.jpeg')}
                />
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  titulo: {
    fontweight: 'bold',
    fontSize: 24,
    marginvertical: 10,
  },
  contenedor: {
    marginHorizontal: 10,
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRigth: 10,
  },
});
export default PelisScreen;
