import * as React from "react";
import { Alert, Image, Pressable, TextInput, View } from "react-native";

const SubscribeScreen = () => {
  // Add subscribe screen code here

  const handleSubscribe = () => {
    Alert("Thanks for subscribing, stay tuned!");
  };
  return (
    <View>
      <View>
        <Image
          width={200}
          height={"auto"}
          source={require("../assets/little-lemon-logo-grey.png")}
        />
        <Text>
          Subscribe to our newsletter for our latest delicious recipes!
        </Text>
      </View>

      <View>
        <TextInput
          placeholder="Type your email"
          textContentType="emailAddress"
        />

        <Pressable onPress={() => handleSubscribe()}>
          <Text>Subscribe</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SubscribeScreen;
