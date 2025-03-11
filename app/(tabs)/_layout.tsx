import { Tabs } from "expo-router";

const tabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="classes"
        options={{
          title: "Classes",
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default tabsLayout;
