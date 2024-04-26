import { useState } from "react";
import { View, TextInput, Button } from "react-native";

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {
    return; //TODO
  };

  return (
    <View>
      <TextInput
        placeholder="Nome"
        onChangeText={setName}
      />
      <TextInput
        placeholder="E-mail"
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title="Submit"
        onPress={handleSubmit}
      />
    </View>
  );
};

export default Register;
