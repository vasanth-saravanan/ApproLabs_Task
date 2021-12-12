import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AddNewSlot from '../screens/AddNewSlot';
import BookingHistory from '../screens/BookingHistory';
import GroundListScreen from '../screens/GroundListScreen';
import GroundStatus from '../screens/GroundStatus';
import SlotDetails from '../screens/SlotDetails';

const Stack = createStackNavigator();

function Route() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GroundListScreen"
        options={{headerShown: false}}
        component={GroundListScreen}
      />
      <Stack.Screen
        name="AddNewSlot"
        options={{headerShown: false}}
        component={AddNewSlot}
      />
      <Stack.Screen
        name="BookingHistory"
        options={{headerShown: false}}
        component={BookingHistory}
      />
      <Stack.Screen
        name="GroundStatus"
        options={{headerShown: false}}
        component={GroundStatus}
      />
      <Stack.Screen
        name="SlotDetails"
        options={{headerShown: false}}
        component={SlotDetails}
      />
    </Stack.Navigator>
  );
}

export default Route;
