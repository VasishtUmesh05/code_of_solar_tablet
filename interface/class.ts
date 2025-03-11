import { RelativePathString } from "expo-router";

export interface Class {
  unit: number;
  chapter: number;
  Title: string;
  description: string;
  pages: number;
  isTextAvailable: boolean;
  isVideoClassAvailable: boolean;
  image_url: RelativePathString;
  subject_url: RelativePathString;
  subject_type: ["mathematics", "physics", "chemistry", "english"];
}
