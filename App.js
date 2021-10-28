import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>TrainnerBrains</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
