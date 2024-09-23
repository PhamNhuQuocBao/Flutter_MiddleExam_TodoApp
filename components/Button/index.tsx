import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

interface props {
  title?: string;
  className?: string;
  align?: "start" | "center" | "end";
  onPress?: () => void;
}

const ButtonCustom = ({
  title,
  className,
  align = "center",
  onPress,
}: props) => {
  return (
    <TouchableOpacity
      className={`bg-primary p-4 rounded-md flex justify-center items-center ${className}`}
      onPress={onPress}
    >
      <Text className="text-white font-bold">{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonCustom;
