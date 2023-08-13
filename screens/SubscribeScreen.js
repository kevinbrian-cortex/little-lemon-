import * as React from "react";
import { Image, Pressable, TextInput, View, Text } from "react-native";
import { validateEmail } from "../utils";
import styles from "../styles/subscribe-screen.style";
import reusableStyles from "../styles/welcome-screen.style";

const SubscribeScreen = () => {
  // Add subscribe screen code here
  const [email, setEmail] = React.useState("");

  const handleSubscribe = () => {
    let isValidEmail = validateEmail(email);
    if (isValidEmail !== null) {
      alert("Thanks for subscribing, stay tuned!");
    } else {
      alert("Invalid Email");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <Image
          resizeMode="contain"
          source={require("../assets/little-lemon-logo-grey.png")}
          style={{
            width: 100,
            height: 100,
          }}
        />
        <Text style={styles.mainText}>
          Subscribe to our newsletter for our latest delicious recipes!
        </Text>
      </View>

      <View>
        <TextInput
          onChangeText={(value) => setEmail(value)}
          placeholder="Type your email"
          textContentType="emailAddress"
          style={styles.InputForm}
        />

        <Pressable
          onPress={() => handleSubscribe()}
          style={reusableStyles.mainBtn}
        >
          <Text style={reusableStyles.btnText}>Subscribe</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SubscribeScreen;
