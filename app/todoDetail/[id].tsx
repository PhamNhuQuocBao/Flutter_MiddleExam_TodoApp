import { Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";

const TodoDetail = () => {
  const { title, description } = useLocalSearchParams();
  return (
    <SafeAreaView>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </SafeAreaView>
  );
};

export default TodoDetail;
