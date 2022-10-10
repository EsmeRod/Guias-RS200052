import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { QuantityPicker } from 'react-qty-picker';
import colors from '../utils/colors';
export default function Form(props) {
  const { setTamaño, setTipo, setPago, setCantidad } = props;
  return (
    <View style={styles.viewForm}>
      <RNPickerSelect
        style={picketSelectStyles}
        onValueChange={(value) => setTamaño(value)}
        placeholder={{
          label: 'Seleccióna tamaños',
          value: null,
        }}
        items={[
          { label: 'short', value: 1 },
          { label: 'tall', value: 1.5 },
          { label: 'grande', value: 2 },
        ]}
      />
      <RNPickerSelect
        style={picketSelectStyles}
        onValueChange={(value) => setTipo(value)}
        placeholder={{
          label: 'Seleccióna tipo de cafe',
          value: null,
        }}
        items={[
          { label: 'Mocha', value: 2 },
          { label: 'Te Chai', value: 2.5 },
          { label: 'Americano', value: 1.5 },
          { label: 'Frapper', value: 3 },
        ]}
      />
      <View style={styles.viewInputs}>
      <TextInput
          placeholder="Cantidad"
          keyboardType="numeric"
          style={styles.input}
          onChange={(e) => setCantidad(e.nativeEvent.text)}
        />
        <RNPickerSelect
          style={picketSelectStyles}
          onValueChange={(value) => setPago(value)}
          placeholder={{
            label: 'Tipo de pago',
            value: null,
          }}
          items={[
            { label: 'Tarjeta', value: 0.05 },
            { label: 'Efectivo', value: 0.15 },
          ]}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  viewForm: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 50,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 30,
    height: 150,
    justifyContent: 'center',
  },
  viewInputs: {
    flexDirection: 'row',
  },
  input: {
    height: 45,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    width: '50%',
    marginRight: 10,
    marginLeft: 1,
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 20,
  },
  inputPercentage: {
    width: '40%',
    marginLeft: 10,
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
