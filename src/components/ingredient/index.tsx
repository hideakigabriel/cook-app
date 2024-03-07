import { Image, Pressable, Text } from "react-native";
import { styles } from "./style";

export default function Ingredient(){
  return (
    <Pressable style={styles.container}>
      <Image source={require("@/assets/apple.png")} style={styles.image}/>
      <Text style={styles.title}>Maça</Text>
    </Pressable>
  )
}