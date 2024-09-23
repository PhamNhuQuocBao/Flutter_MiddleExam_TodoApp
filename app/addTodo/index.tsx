import { View, Text, TextInput, Button, Alert } from "react-native";
import React, { useState } from "react";
import ButtonCustom from "@/components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import db from "@react-native-firebase/database";

const AddTodo = () => {
  const [dataForm, setDataForm] = useState({
    title: "",
    description: "",
    isCompleted: false,
  });

  const handleChange = (key: string, value: string) => {
    setDataForm({
      ...dataForm,
      [key]: value,
    });
  };

  const handleAddTodo = () => {
    const { title, description, isCompleted } = dataForm;
    try {
      db().ref(`todos/`).set({
        title,
        description,
        isCompleted,
      });

      Alert.alert("Success", "Todo added successfully");
    } catch (error) {
      Alert.alert("Error", "Something went wrong");
      console.log(error);
    }
  };

  return (
    <SafeAreaView className="px-2">
      <View>
        <View className="flex flex-col gap-3 mb-4">
          <TextInput
            placeholder="Title"
            nativeID="title"
            className="p-2 border-b-2 border-primary"
            onChange={(e) => handleChange("title", e.nativeEvent.text)}
          />
          <TextInput
            placeholder="Description"
            nativeID="description"
            className="p-2 border-b-2 border-primary"
            onChange={(e) => handleChange("description", e.nativeEvent.text)}
          />
        </View>
        <ButtonCustom title="Add" onPress={handleAddTodo} />
      </View>
    </SafeAreaView>
  );
};

export default AddTodo;
