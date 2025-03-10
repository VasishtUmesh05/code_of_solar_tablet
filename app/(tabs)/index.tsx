import { View, Text, ScrollView } from "react-native";
import React from "react";

const index = () => {
  return (
    <ScrollView
      className="p-7 bg-p2"
      contentContainerClassName="flex flex-col justify-center items-center"
      showsVerticalScrollIndicator={false}
    >
      <View className="my-10 gap-y-5 flex flex-col items-center justify-center">
        <Text className="text-blue-500 font-semibold text-4xl md:text-5xl">
          Welcome to solar os
        </Text>
        <Text className="text-t1 md:text-6xl">
          Repository of study materials in a tablet
        </Text>
      </View>
    </ScrollView>
  );
};

export default index;
