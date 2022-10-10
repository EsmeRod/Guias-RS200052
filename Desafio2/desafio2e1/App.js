
/**
* @format
* @flow strict-local
*/
import React, {useState, useEffect} from 'react';
import {
 SafeAreaView,
 StyleSheet,
 View,
 Text,
 StatusBar,
} from 'react-native';

import colors from './src/utils/colors';
import Form from './src/components/Forms';
import Footer from './src/components/Footer';
import Result from './src/components/Result';
export default function App(){
  const[cantidad, setCantidad]= useState(null);
  const[tamaño, setTamaño]= useState(null);
  const[tipo, setTipo]=useState(null);
  const[pago, setPago]=useState(null);
  const[total, setTotal]=useState(null);
  const[errorMessage, setErrorMessage]=useState("");

  useEffect(()=>{
    if(cantidad&&tamaño&&tipo&&pago)calculate();
    else reset();
  },[cantidad, tamaño, tipo, pago]);

  const calculate=()=>{
    reset();
    if(!cantidad){
      setErrorMessage('Añade la cantidad que quieres solicitar');
    }
    else if(!tamaño){
      setErrorMessage('Añade el tamaño');
    }else if(!tipo){
      setErrorMessage('Selecciona el tipo de cafe');
    }else if(!pago){
      setErrorMessage('Selecciona el tipo de pago');
      }else{
        lb= String;
        if(tipo==2){lb='Mocha'}
            else if(tipo==2.5){lb='Te Chai'}
            else  if(tipo==1.5){lb='Americano'}
            else  if(tipo==3){lb='Frapper'} 
         setTipo({
            namet: lb,
          }); 
           tm=String;
          if(tamaño==1){tm= 'Short'}
            else if(tamaño==1.5){tm='Tall'}
            else  if(tamaño==2){tm='Grande'}
          setTamaño({
            nameta: tm,
          });
        const p= cantidad*(tamaño+tipo);
        if(pago==0.15){
          const des= p*pago;
          const tot= p-desc;
          setPago({
              namep: 'Tarjeta',
          });
         setTotal({
        descuento: des.toFixed(2).replace('.',','),
        totalPayable:tot.toFixed(2).replace('.',','),
      }); 
        }else if(pago==0.05){
          const desc= p*pago;
          const tot= p-desc;
          setPago({
              namep: 'Efectivo',
          });
         setTotal({
        descuento: desc.toFixed(2).replace('.',','),
        totalPayable:tot.toFixed(2).replace('.',','),
      }); 
        }
    }
  };

  const reset=()=>{
    setErrorMessage("");
    setTotal(null);
  };
return(
 <>
 <StatusBar barStyle="light-content"/>
 <SafeAreaView style={styles.Header}>
 <Text style={styles.HeadApp}>StarBosco App</Text>
 <Form
      setCantidad={setCantidad}
      setPago={setPago}
      setTamaño={setTamaño}
      setTipo={setTipo}
      />
 </SafeAreaView>
 <Result
      cantidad={cantidad}
      pago={pago}
      tamaño={tamaño}
      tipo={tipo}
      total={total}
      errorMessage={errorMessage}
/>
 <Footer></Footer>
 </>
);
}
const styles = StyleSheet.create({
 Header:{
 backgroundColor: colors.PRIMARY_COLOR,
 height:290,
 borderBottomLeftRadius:30,
 borderBottomRightRadius:30,
 alignItems:'center'
 },
HeadApp:{
  fontSize:25,
  fontWeight:'bold',
  color:'#fff',
  marginTop:15,
},
})

