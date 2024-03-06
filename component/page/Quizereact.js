import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'; 
const Quizereact = () => {
    const navigation = useNavigation();
    const handlePage = () => {
        navigation.navigate('AllPage'); // Navigate to 'AllPage' screen
      };
      
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const quizeData = [
    {
      question:
        " 1. Which of the following command is used to create react-js-app ?",
      options: [
        "npx create-react-app appname",
        "npm install create-react-app",
        "npx install create-react-app -g",
        "install - l create-react-app",
      ],
      answer: "npx create-react-app appname",
    },
    {
      question:
        "2. What is the default port number in which the application run ?",
      options: ["3000", "8080", "5000", "4500"],
      answer: "3000",
    },
    {
      question: "3. What is the best definition of React.js ?",
      options: [
        "Server-side Framework",
        "User-interface framework",
        "A Library for building interaction interfaces",
        "None of These",
      ],
      answer: "A Library for building interaction interfaces",
    },
    {
      question: "4. Which of the following is must for the API in React.js ?",
      options: [
        "SetinitialComponent",
        "renderComponent",
        "render",
        "All of the above",
      ],
      answer: "renderComponent",
    },

    {
      question:
        "5. What is the purpose of React Router in React.js applications?",
      options: [
        "State management",
        "Routing",
        "Component styling",
        "Data fetching",
      ],
      answer: "Routing",
    },

    {
      question:
        "6. In React.js, what function is used to change the state of a component and re-render it?",
      options: [
        "setState()",
        "updateState()",
        "modifyState()",
        "changeState()",
      ],
      answer: "setState()",
    },
    {
      question: "7. What does JSX stand for in React.js?",
      options: [
        "JavaScript XML",
        "JavaScript Extension",
        "JSX Script",
        "JavaScript X-Module",
      ],
      answer: "JavaScript XML",
    },

    {
      question:
        "8. Which hook in React.js is used to perform side effects in function components?",
      options: ["useState()", "useEffect()", "useContext()", "useReducer()"],
      answer: "useEffect()",
    },
    {
      question:
        "9. In React.js, what is the correct way to update the state based on the previous state?",
      options: [
        "this.setState()",
        "setState()",
        "updateState()",
        "modifyState()",
      ],
      answer: "this.setState()",
    },
    {
      question:
        "10. In React.js, how can you pass data from a child component to its parent component?",
      options: ["Using props", "Using state", "Using context", "Using callbacks"],
      answer: "Using callbacks",
    },
  ];

  const handleAnswer = (selectedAnswer) => {
    const answer = quizeData[currentQuestion]?.answer;
    if (answer === selectedAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizeData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <View style={styles.container}>
       
       
      {showScore ? (
        <View>
             <Text style={styles.heading}>Score</Text>
          <Text style={styles.Score}>{score}</Text>
          <TouchableOpacity onPress={handleRestart}>
            <Text style={styles.resetBtn}>Reset</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.questionContainer}>
            <TouchableOpacity onPress={handlePage}>
                <Text style={styles.back}>Back</Text>
            </TouchableOpacity>
          <Text style={styles.questionText}>
            {quizeData[currentQuestion]?.question}
          </Text>
          {quizeData[currentQuestion]?.options.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleAnswer(item)}
              style={styles.optionContainer}
            >
              <Text style={styles.optionStyle}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    back:{

fontWeight: "bold",
fontSize:18,
    },
    questionContainer: {
      padding: 10,
      margin: 10,
      borderRadius: 5,
    },
    optionStyle: {
      color: "green",
      padding: 10, // Increased padding for options
      fontSize: 18,
      fontFamily:'Avenir-LightOblique',
      fontWeight:'bold',
      
    },
    optionContainer: {
      borderColor: "black",
      borderWidth: 2,
      marginTop: 20, // Increased spacing between options
      padding: 10, // Added padding for options container
    },
    questionText: {
      fontSize: 24,
      marginTop:29,
      fontFamily:'Avenir-LightOblique',
      fontWeight:'bold',
      
    },
  
    resetBtn: {
      fontSize: 20,
      marginTop: 30,
      paddingHorizontal: 20, // Adjusted padding for reset button
      paddingVertical: 10, // Added vertical padding for reset button
      backgroundColor: "red",
      color: "white",
      borderRadius: 5, // Added border radius for button
    },
  
    Score: {
      fontSize: 40,
      marginTop: 20,
      alignItems: "center",
      textAlign: "center",
      height: 50,
      borderBottomWidth: 1,
      backgroundColor: "orange",
      color: "white",
    },
    heading: {
      fontWeight: "bold",
      fontSize: 26,
      alignItems: 'center',
      justifyContent: "center",
      marginVertical: 10,
    },
  });

export default Quizereact;
