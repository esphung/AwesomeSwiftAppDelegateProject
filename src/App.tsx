import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

function isHermes(): boolean {
  // @ts-ignore
  return !!global?.HermesInternal;
}

function isFabric(): boolean {
  // @ts-ignore
  return !!global?.nativeFabricUIManager;
}

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.centeredView}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <Text>{`Hermes is ${isHermes() ? 'enabled' : 'disabled'}`}</Text>
        <Text>{`Fabric is ${isFabric() ? 'enabled' : 'disabled'}`}</Text>
        <Text>React {React.version}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
