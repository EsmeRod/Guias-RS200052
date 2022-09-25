import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import colors from '../utils/colors';
export default function Form(props) {
 const {setNombre, setSalarioB} = props;
 return (
 <View style={styles.viewForm}>
 <View style={styles.viewInputs}>
 <TextInput
 placeholder="Nombre"
 keyboardType="strings"
 style={styles.input}
 onChange={(e) => setNombre(e.nativeEvent.text)}
 />
 <TextInput
 placeholder="Salario Base"
 keyboardType="numeric"
 style={[styles.input, styles.input]}
 onChange={(e) => setSalarioB(e.nativeEvent.text)}
 />
 </View>
 </View>
 );
}
const styles = StyleSheet.create({
 viewForm: {
 position: 'absolute',
 bottom: 0,
 width: '85%',
 paddingHorizontal: 50,
 backgroundColor: colors.PRIMARY_COLOR_DARK,
 borderRadius: 30,
 height: 180,
 justifyContent: 'center',
 },
 viewInputs: {
 flexDirection: 'column',
 },
 input: {
 height: 50,
 backgroundColor: '#fff',
 borderWidth: 1,
 borderColor: colors.PRIMARY_COLOR_DARk,
 borderRadius: 5,
 width: '100%',
 marginRight: 5,
 marginLeft: -5,
 marginBottom: 10,
 color: '#000',
 paddingHorizontal: 20,
 },
});
const picketSelectStyles = StyleSheet.create({
 inputIOS: {
 fontSize: 16,
 paddingVertical: 12,
 paddingHorizontal: 10,
 borderWidth: 1,
 borderColor: 'grey',
 borderRadius: 4,
 color: 'black',
 paddingRight: 30,
 backgroundColor: '#fff',
 marginLeft: -5,
 marginRight: -5,
 },
 inputAndroid: {
 fontSize: 16,
 paddingHorizontal: 10,
 paddingVertical: 8,
 borderWidth: 0.5,
 borderColor: 'grey',
 borderRadius: 8,
 color: 'black',
 paddingRight: 30,
 backgroundColor: '#fff',
 },
});