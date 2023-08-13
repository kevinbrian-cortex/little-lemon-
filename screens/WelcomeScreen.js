import * as React from "react";
import { Image, Pressable, Text, View } from "react-native";
import styles from "../styles/welcome-screen.style";

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <Image
          source={require("../assets/little-lemon-logo.png")}
          style={{
            height: 250,
            width: 250,
          }}
          resizeMethod="resize"
          resizeMode="contain"
        />

        <Text style={styles.mainText} textBreakStrategy="highQuality">
          Little Lemon, your local Mediterranean Bistro
        </Text>
      </View>

      <View style={styles.footerContent}>
        <Pressable
          onPress={() => navigation.navigate("SubscribeScreen")}
          style={styles.mainBtn}
        >
          <Text style={styles.btnText}>Newsletters</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default WelcomeScreen;
