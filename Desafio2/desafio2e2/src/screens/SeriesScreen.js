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
const SeriesScreen = () => {
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
                    source={require('../img/serie/images-22.jpeg')}
                  />
                </TouchableHighlight>
                <Text>Barry</Text>
                  <Text>3 Temporadas </Text>
              </View>
              <View>
                <Image
                  style={styles.ciudad}
                  source={require('../img/serie/images-23.jpeg')}
                />
                <Text>Rick y Morty</Text>
                  <Text>6 Temporadas </Text>
              </View>
              <View>
                <Image
                  style={styles.ciudad}
                  source={require('../img/serie/Unknown-10.jpeg')}
                />
                <Text>The Office</Text>
                  <Text>9 Temporadas </Text>
              </View>
              <View>
                <Image
                  style={styles.ciudad}
                  source={require('../img/serie/Unknown-11.jpeg')}
                />
                <Text>Friends</Text>
                  <Text>10 Temporadas </Text>
              </View>
              <View>
                <Image
                  style={styles.ciudad}
                  source={require('../img/serie/Unknown-12.jpeg')}
                />
                <Text>Yo Nunca</Text>
                  <Text>2 Temporadas </Text>
              </View>
              <View>
                <Image
                  style={styles.ciudad}
                  source={require('../img/serie/Unknown-13.jpeg')}
                />
                <Text>ShameLess</Text>
                  <Text>11 Temporadas </Text>
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
                    source={require('../img/serie/images-19.jpeg')}
                  />
                </TouchableHighlight>
                 <Text>Hawkeye</Text>
                  <Text>1 Temporada </Text>
              </View>
              <View>
                <Image
                  style={styles.ciudad}
                  source={require('../img/serie/images-20.jpeg')}
                />
                 <Text>BlindSpot</Text>
                  <Text>5 Temporadas </Text>
              </View>
              <View>
                <Image
                  style={styles.ciudad}
                  source={require('../img/serie/images-21.jpeg')}
                />
                 <Text>BlackList</Text>
                  <Text>9 Temporadas </Text>
              </View>
              <View>
                <Image
                  style={styles.ciudad}
                  source={require('../img/serie/Unknown-7.jpeg')}
                />
                 <Text>The boys</Text>
                  <Text>3 Temporadas </Text>
              </View>
              <View>
                <Image
                  style={styles.ciudad}
                  source={require('../img/serie/Unknown-8.jpeg')}
                />
                 <Text>The Witcher</Text>
                  <Text>2 Temporadas </Text>
              </View>
              <View>
                <Image
                  style={styles.ciudad}
                  source={require('../img/serie/Unknown-9.jpeg')}
                />
                 <Text>Frontier</Text>
                  <Text>3 Temporadas </Text>
              </View>
            </ScrollView>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.contenedor}>
            <Text style={styles.titulo}>SciFi</Text>
            <ScrollView horizontal>
              <View>
                <TouchableHighlight
                  onPress={() => {
                    SetComedy1(true);
                  }}>
                  <Image
                    style={styles.ciudad}
                    source={require('../img/serie/Unknown-6.jpeg')}
                  />
                </TouchableHighlight>
                 <Text>Foundation</Text>
                  <Text>1 Temporada </Text>
              </View>
              <View>
                <Image
                  style={styles.ciudad}
                  source={require('../img/serie/Unknown-5.jpeg')}
                />
                 <Text>StrangerThings</Text>
                  <Text>3 Temporadas </Text>
              </View>
              <View>
                <Image
                  style={styles.ciudad}
                  source={require('../img/serie/images-18.jpeg')}
                />
                 <Text>Under the dome</Text>
                  <Text>3 Temporadas </Text>
              </View>
              <View>
                <Image
                  style={styles.ciudad}
                  source={require('../img/serie/images-17.jpeg')}
                />
                 <Text>The Rain</Text>
                  <Text>3 Temporadas </Text>
              </View>
              <View>
                <Image
                  style={styles.ciudad}
                  source={require('../img/serie/images-16.jpeg')}
                />
                 <Text>Oreville</Text>
                  <Text>3 Temporadas </Text>
              </View>
              <View>
                <Image
                  style={styles.ciudad}
                  source={require('../img/serie/images-15.jpeg')}
                />
                 <Text>Travelers</Text>
                  <Text>3 Temporadas </Text>
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
export default SeriesScreen;