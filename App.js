import { StatusBar } from "expo-status-bar";
import { useState, useRef } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  Animated,
  ToastAndroid,
} from "react-native";
import GoalItem from "./components/goalitem";
import GoalInput from "./components/goalinput";

export default function App() {
  const [modalIsVisible, setModlIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModlIsVisible(true);
  }
  function endAddGoalHandler() {
    setModlIsVisible(false);
    console.log(modalIsVisible);
  }
  // array thet conatin all goals that entered user
  const [courseGoals, setCourseGoals] = useState([]);

  //function that write user input in array
  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    ToastAndroid.show("DELETED", ToastAndroid.SHORT);
    setCourseGoals((currentCourseGoals) => {
      console.log(id);
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add new Goal"
          color="#7b2ee0"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          addGoalHandler={addGoalHandler}
          endAddGoalHandler={endAddGoalHandler}
          visible={modalIsVisible}
        />
        <View style={styles.goalContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },
  // inputContainer: {
  //   flex: 1,
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   marginBottom: 24,
  //   borderBottomWidth: 1,
  //   borderBottomColor: "#ccccccc",
  // },
  goalContainer: {
    flex: 6,
  },
});
