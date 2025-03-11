import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { Card } from "@/components/ui/card";
import { Link, RelativePathString } from "expo-router";
import { Mathematics } from "@/constant/example";
import classes from "./classes";
import { ScreenFooter } from "react-native-screens";

const index = () => {
  const cards = Mathematics;
  return (
    <ScrollView
      className="p-7 bg-p2"
      contentContainerClassName="flex flex-col justify-center items-center w-full"
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
      <View className="m-12 flex items-center justify-center">
        <Text className="text-3xl text-blue-500">
          Some Mathematic classes by our team with orginal text books.
        </Text>
      </View>
      <View className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-20">
        {cards.map((index) => (
          <Card className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src={
                  index.unit.chapter.image_url === ""
                    ? "/placeholder.svg?height=200&width=400"
                    : index.unit.chapter.image_url
                }
                alt="Mathematics"
                className="object-cover w-full"
              />
            </div>
            <h2 className="text-xl font-bold mb-2">
              {index.unit.chapter.Title}
            </h2>
            <p className="text-muted-foreground font-semibold">
              {index.unit.chapter.description}
            </p>
            <View className="p-4 pr-4 pb-4 pt-4 flex items-end justify-center pl-0">
              <Link
                href={index.unit.chapter.subject_url as RelativePathString}
                className="text-primary hover:underline font-medium flex items-center"
              >
                Go to {index.unit.chapter.subject_type}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </View>
          </Card>
        ))}
      </View>
      <ScreenFooter className="w-full h-fit border-b-0 border-x-0 border-4 flex items-center justify-center border-s1 m-5">
        <Text className="text-7xl text-t1 m-5">By Solar os team</Text>
      </ScreenFooter>
    </ScrollView>
  );
};

export default index;
