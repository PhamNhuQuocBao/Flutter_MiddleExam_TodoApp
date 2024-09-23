import { View, Text, TextInput, Button } from "react-native";
import React from "react";
import ButtonCustom from "@/components/Button";
import { SafeAreaView } from "react-native-safe-area-context";

const UpdateTodo = () => {
  return (
    <SafeAreaView className="px-2">
      <View>
        <View className="flex flex-col gap-3 mb-4">
          <TextInput
            placeholder="Title"
            className="p-2 border-b-2 border-primary"
          />
          <TextInput
            placeholder="Description"
            className="p-2 border-b-2 border-primary"
          />
        </View>
        <ButtonCustom title="Update" />
      </View>
    </SafeAreaView>
  );
};

export default UpdateTodo;
