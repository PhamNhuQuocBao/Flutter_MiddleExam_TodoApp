import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import TodoItem from "@/components/TodoItem";
import { TODO_ITEM } from "@/constants";
import { useRouter } from "expo-router";

const Complete = () => {
  const router = useRouter();
  return (
    <View className="px-2 py-4 h-full">
      <ScrollView>
        {TODO_ITEM.map((value) => {
          if (value.isCompleted)
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
    </View>
  );
};

export default Complete;
