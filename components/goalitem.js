import { Pressable, StyleSheet } from "react-native";
import { View, Text } from "react-native";
function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#07517b" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginTop: 8,
    borderRadius: 10,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    paddingLeft: 8,
    paddingBottom: 10,
    paddingTop: 10,
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
