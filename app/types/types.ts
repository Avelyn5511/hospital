import { NavigationProp } from "@react-navigation/core";

export type IntroStackParamList = {
  Load: undefined;
  Start: undefined;
  Departments: undefined;
  Conditions: undefined;
  App: undefined;
  Notification: undefined;
};

export type HomeTabStacks = {
  Notification: undefined;
  StateHealth: undefined;
  StateLevelBloody: undefined;
  StateBloodPressure: undefined;
  Exercise: undefined;
  CourseTreatment: undefined;
  Appointment: undefined;
  Tabs: undefined;
  Home: undefined;
  BurgerMenu: undefined;
  Login: undefined;
  SelectDate: undefined;
  AppointmentStack: undefined;
};

export type User = {
  email: string;
  avatar: string;
  appointments: string[];
  isDoctor: boolean;
};

export type AppointmentStacks = {
  Appointment: undefined;
  SelectDate: undefined;
};

export type PropsNavigation<T extends object> = {
  navigation: NavigationProp<T>;
};
