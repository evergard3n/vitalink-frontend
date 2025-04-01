import { Chat } from "./definitions";
export const chatSequence: Chat[] = [
  {
    id: "1",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    sender: "BOT",
    timestamp: "string",
  },
  {
    id: "2",
    message: "user msg",
    sender: "1",
    timestamp: "string",
  },
  {
    id: "3",
    message: "shorter lorem, supposed to be on the left",
    sender: "BOT",
    timestamp: "string",
  },
  {
    id: "4",
    message: "user msg",
    sender: "1",
    timestamp: "string",
  },
  {
    id: "5",
    message: "# Hi, *Pluto*!",
    sender: "BOT",
    timestamp: "string",
  },
];
