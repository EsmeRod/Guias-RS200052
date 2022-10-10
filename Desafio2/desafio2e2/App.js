import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BTab from "./src/navbar/BTab";

const App = () =>{
 return(
   <NavigationContainer>
   <BTab/>
   </NavigationContainer>
 );
};
 export default App;
