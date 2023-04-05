import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { useEffect } from "react";
import * as Font from 'expo-font';


function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

let AppEntryPoint = App;

let StorybookApp = require("./.storybook").default;

function StorybookAppWithConfig() {
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'ProximaNova-Semibold': require('./Assets/fonts/ProximaNova-Semibold.otf'),
        'ProximaNova-Medium': require('./Assets/fonts/ProximaNova-Medium.otf'),
        'ProximaNova-Regular': require('./Assets/fonts/ProximaNova-Regular.otf'),
        'ProximaNova-Bold': require('./Assets/fonts/ProximaNova-Bold.otf'),
      });
    }
    loadFonts();
  }, [])
  return (
      <StorybookApp/>
  );
}

if (Constants.expoConfig.extra.storybookEnabled === "true") {
  AppEntryPoint = StorybookAppWithConfig;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppEntryPoint;
