import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationStrings from '../constants/navigationStrings';
import * as Screens from '../Screens';

function Routes() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName={navigationStrings.HOME}
      screenOptions={{headerShown:false}}
      >
           <Stack.Screen name={navigationStrings.HOME} component={Screens.Home} />
        <Stack.Screen  name={navigationStrings.SECOND_SCREEN} component={Screens.SecondScreen} />
        <Stack.Screen  name={navigationStrings.THIRD_SCREEN} component={Screens.ThirdScreen} />
     
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;
