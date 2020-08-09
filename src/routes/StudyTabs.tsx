import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favorites from '../pages/Favorites';

function StudyTabs(): JSX.Element {
  const { Navigator, Screen } = createBottomTabNavigator();

  return (
    <Navigator>
      <Screen name="Favorites" component={Favorites}></Screen>
    </Navigator>
  );
}

export default StudyTabs;
