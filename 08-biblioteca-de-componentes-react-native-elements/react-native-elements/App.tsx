import { StyleSheet, View } from "react-native";
import { Text, Input, Icon, CheckBox, Switch, Button } from "@rneui/themed";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [accept, setAccept] = useState(false);

  const handleSubmit = () => console.log("Send", name, accept);

  return (
    <View style={styles.container}>
      <Text h1>My form</Text>
      <Input
        placeholder="Email"
        leftIcon={<Icon name="user" type="antdesign" />}
        value={name}
        onChangeText={setName}
      />

      <CheckBox
        checked={accept}
        onPress={() => {
          setAccept((prev) => !prev);
        }}
        title="Accepts terms"
      />

      <Switch value={accept} onValueChange={(value) => setAccept(value)} />

      <Button title="Cancel" type="outline" />
      <Button title="Submit" type="solid" onPress={handleSubmit}>
        <Icon name="send" type="feather" color="white" />
        Submit
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
