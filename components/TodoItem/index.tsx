import { View, Text, Button, TouchableOpacity } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";

const TodoItem = () => {
  const router = useRouter();
  return (
    <View className="mb-4 bg-primary p-4 rounded-md flex flex-row justify-between">
      <Text className="text-white">TodoItem</Text>
      <View className="flex flex-row gap-3">
        <TouchableOpacity onPress={() => router.push("/updateTodo")}>
          <FontAwesome5 name="edit" size={18} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="delete" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="check" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoItem;
