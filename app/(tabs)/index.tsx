import React from "react";
import { useRouter } from "expo-router";
import { View, Text, Button, TouchableOpacity, ScrollView } from "react-native";
import TodoItem from "@/components/TodoItem";
import AntDesign from "@expo/vector-icons/AntDesign";
import { TODO_ITEM } from "@/constants";

const Home = () => {
  const router = useRouter();
  return (
    <View className="px-2 py-4 h-full relative">
      <ScrollView>
        {TODO_ITEM.map((value) => {
          if (!value.isCompleted)
            return (
              <TouchableOpacity
                key={value.id}
                onPress={() =>
                  router.push({
                    pathname: "/todoDetail/[id]",
                    params: {
                      id: value.id,
                      title: value.title,
                      description: value.description,
                    },
                  })
                }
              >
                <TodoItem />
              </TouchableOpacity>
            );
        })}
      </ScrollView>
      <TouchableOpacity
        className="bg-primary w-max absolute bottom-3 right-3 p-3 rounded-full"
        onPress={() => router.push("/addTodo")}
      >
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Home;
