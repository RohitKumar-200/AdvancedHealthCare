import React, { useContext } from "react";
import "./Chatbot.css";
import { UserContext } from "../../Context/userContext";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const theme = {
  background: "#F4F5F6",
  fontFamily: "sans-serif",
  headerBgColor: "#15bea9",
  headerFontColor: "#fff",
  headerFontSize: "16px",
  botBubbleColor: "#65b1ff",
  botFontColor: "#fff",
  userBubbleColor: "#59dd64",
  userFontColor: "#fff",
};

const steps = [
  {
    id: "1",
    message: "What is your name?",
    trigger: "2",
  },
  {
    id: "2",
    user: true,
    trigger: "3",
  },
  {
    id: "3",
    message: "Hi {previousValue}, nice to meet you!",
    end: true,
  },
];

function Chatbot() {
  const [user] = useContext(UserContext);

  return (
    <div className="chatbot">
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={steps}
          headerTitle="Health assistant"
          botAvatar={"/images/ChatbotIcon.svg"}
          userAvatar={user?.pic}
          avatarStyle={{ borderRadius: "100%" }}
          floating={true}
          floatingIcon={
            <img
              src={"/images/ChatbotIcon.svg"}
              style={{ width: "70%" }}
              alt="chatBot icon"
            />
          }
          floatingStyle={{
            backgroundColor: "#ffffff",
            width: "60px",
            boxShadow: "2px 2px 20px -8px #111",
          }}
        />
      </ThemeProvider>
    </div>
  );
}

export default Chatbot;
