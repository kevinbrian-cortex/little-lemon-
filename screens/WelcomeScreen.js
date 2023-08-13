import * as React from "react";
import { Image, Pressable, Text, View } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View>
      <View>
        <Image
          source={require("../assets/little-lemon-logo.png")}
          width={400}
          height={"auto"}
        />

        <Text>Little Lemon, your local Mediterranean Bistro</Text>
      </View>

      <Pressable onPress={() => navigation.navigate("/subscribe")}>
        <Text>Newsletter</Text>
      </Pressable>
    </View>
  );
};

export default WelcomeScreen;
