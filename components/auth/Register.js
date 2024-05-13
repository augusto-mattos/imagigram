import { useState } from "react";
import { View, Button } from "react-native";
import { registerUser } from "../../utils/auth";
import TextInput from "../../components/TextInput";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      await registerUser(email, password);
      // TODO
    } catch (error) {
      // TODO
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        value={password}
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
