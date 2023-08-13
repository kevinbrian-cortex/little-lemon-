import * as React from "react";
import { Alert, Image, Pressable, TextInput, View } from "react-native";
import { validateEmail } from "../utils";

const SubscribeScreen = () => {
  // Add subscribe screen code here
  const [email, setEmail] = React.useState("");

  const handleSubscribe = () => {
    let isValidEmail = validateEmail(email);
    if (isValidEmail) Alert("Thanks for subscribing, stay tuned!");
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
          onChangeText={(value) => setEmail(value)}
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
