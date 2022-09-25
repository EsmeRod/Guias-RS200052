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
  const[Nombre,setNombre]= useState(null);
  const[SalarioB,setSalarioB]=useState(null);
  const[total, setTotal]=useState(null);
  const[errorMessage, setErrorMessage]=useState("");

  useEffect(()=>{
    if(Nombre&& SalarioB)calculate();
    else reset();
  },[Nombre,SalarioB]);

  const calculate=()=>{
    reset();
    if(!Nombre){
      setErrorMessage('Añade tu nombre');
    }
    else if(!SalarioB){
      setErrorMessage('Añade tu salario');
    }else{
      const isss=SalarioB*0.03;
      const afp=SalarioB*0.04;
      const renta=SalarioB*0.05;
      const salarioN = SalarioB-(isss+afp+renta);
      setTotal({
        totalPayable:(salarioN).toFixed(2),
      });
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
 <Text style={styles.HeadApp}>Cotizador de Salarios</Text>
 <Form
      setNombre={setNombre}
      
      setSalarioB={setSalarioB}
      />
 </SafeAreaView>
 <Result
      Nombre={Nombre}
      SalarioB={SalarioB}
      total={total}
      errorMessage={errorMessage}
/>
 <Footer></Footer>
 </>
);
}
const styles = StyleSheet.create({
 Header:{
 backgroundColor: colors.PRIMARY_COLOR_DARk,
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


