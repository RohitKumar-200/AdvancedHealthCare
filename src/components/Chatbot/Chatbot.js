import React, { useContext } from "react";
import "./Chatbot.css";
import { UserContext } from "../../Context/userContext";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { useHistory } from "react-router-dom";
import funfacts from "./Funfacts";

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
    message: "Hey! I am Medi-bot, how are you feeling today",
    trigger: "expressions",
  },
  {
    id: "expressions",
    options: [
      { value: "veryHappy", label: "😀", trigger: "veryHappy" },
      { value: "happy", label: "🙂", trigger: "happy" },
      { value: "normal", label: "😐", trigger: "normal" },
      { value: "sad", label: "☹️", trigger: "sad" },
      { value: "angry", label: "😡", trigger: "angry" },
    ],
  },
  {
    id: "veryHappy",
    message: "Message for very happy",
    trigger: "help",
  },
  {
    id: "happy",
    message: "Message for happy",
    trigger: "help",
  },
  {
    id: "normal",
    message: "Message for normal",
    trigger: "help",
  },
  {
    id: "sad",
    message: "message for sad",
    trigger: "help",
  },
  {
    id: "angry",
    message: "message for angry",
    trigger: "help",
  },

  {
    id: "help",
    message: "How can I help you?",
    trigger: "options",
  },
  {
    id: "options",
    options: [
      { value: "services", label: "Services", trigger: "services" },
      {
        value: "calculateBMI",
        label: "Calculate BMI",
        trigger: "calculateBMI",
      },
      {
        value: "funFact",
        label: "Give a random funfact",
        trigger: "funFact",
      },
      { value: "exit", label: "Exit", trigger: "end" },
    ],
  },
  {
    id: "services",
    message: "select one of these services",
    trigger: "selectServices",
  },
  {
    id: "selectServices",
    options: [
      { value: "blogs", label: "Blogs", trigger: "selectedService" },
      {
        value: "bloodDonation",
        label: "Blood donation",
        trigger: "selectedService",
      },
      { value: "smartBMI", label: "Smart BMI", trigger: "selectedService" },
      { value: "yogaAasans", label: "Yoga Aasans", trigger: "selectedService" },
      { value: "covid-19", label: "Covid 19", trigger: "selectedService" },
      { value: "goBack", label: "go back", trigger: "options" },
    ],
  },
  {
    id: "selectedService",
    message: "opened {previousValue}",
    trigger: "end",
  },
  {
    id: "moreHelp",
    message: "do you meed more help?",
    trigger: "moreHelp-yes",
  },
  {
    id: "moreHelp-yes",
    options: [
      { value: "yes", label: "Yes", trigger: "help" },
      { value: "no", label: "No", trigger: "end" },
    ],
  },
  {
    id: "calculateBMI",
    message: "Let's calculate your BMI",
    trigger: "BMIHeightMessage",
  },
  {
    id: "BMIHeightMessage",
    message: "Enter your height",
    trigger: "BMIHeight",
  },
  {
    id: "BMIHeight",
    user: true,
    trigger: "BMIWeightMessage",
  },
  {
    id: "BMIWeightMessage",
    message: "Enter your weight",
    trigger: "BMIWeight",
  },
  {
    id: "BMIWeight",
    user: true,
    trigger: "BMIResult",
  },
  {
    id: "BMIResult",
    component: <BMI />,
    asMessage: true,
    trigger: "BMIKnowMore",
  },
  {
    id: "BMIKnowMore",
    message: "Want to know more about BMI?",
    trigger: "BMIKnowMore-options",
  },
  {
    id: "BMIKnowMore-options",
    options: [
      { value: "smartBMI", label: "Yes", trigger: "selectedService" },
      { value: "no", label: "No", trigger: "end" },
    ],
  },
  {
    id: "funFact",
    component: <FunFact />,
    asMessage: true,
    trigger: "moreHelp",
  },
  {
    id: "end",
    message: "Thank you, see you again!",
    end: true,
  },
];

function BMI({ steps }) {
  return (
    <div>
      Your BMI is{" "}
      {steps.BMIWeight.value / (steps.BMIHeight.value * steps.BMIHeight.value)}
    </div>
  );
}

function FunFact() {
  const randInt = Math.floor(Math.random() * 14);
  return <div>{funfacts[randInt]}</div>;
}

function Chatbot() {
  const history = useHistory();
  const [user] = useContext(UserContext);

  const handleEnd = ({ steps, values }) => {
    // console.log(steps);
    // console.log(values);
    switch (values[values.length - 1]) {
      case "blogs":
        history.push("/home");
        break;
      case "bloodDonation":
        history.push("/bloodDonation");
        break;
      case "smartBMI":
        history.push("/smartBMI");
        break;
      case "yogaAasans":
        history.push("/yogaAasans");
        break;
      case "covid-19":
        history.push("/covid-19");
        break;
      default:
        break;
    }
  };

  return (
    <div className="chatbot">
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={steps}
          handleEnd={handleEnd}
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
