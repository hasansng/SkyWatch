import { createContext } from "react";

export const Context = createContext({
  loading: true,
  weather: {},
  temp: {},
  search: () => {},
  location: () => {},
  icon: {},
  weekday: {},
  date: {},
});
