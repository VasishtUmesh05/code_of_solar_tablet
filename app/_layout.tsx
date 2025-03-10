import { Stack } from "expo-router";
import "@/app\\global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "./global.css";

export default function RootLayout() {
  return (
    <GluestackUIProvider mode="light"><Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        {/* do this for every non tabs folder  */}
      </Stack></GluestackUIProvider>
  );
}
