import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'; 
const Nodejs = () => {
    const navigation = useNavigation();
    const handlePage = () => {
        navigation.navigate('AllPage'); // Navigate to 'AllPage' screen
      };
      
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const quizeData = [
    {
      
        question: "1. What is Node.js?",
        options: [
            "A server-side JavaScript runtime environment",
            "A front-end JavaScript framework",
            "A relational database management system",
            "A programming language"
        ],
        answer: "A server-side JavaScript runtime environment"
    },
    {
 
        question: "2. Which of the following platforms is Node.js based on?",
        options: [
            "Chrome's JavaScript engine",
            "Firefox's JavaScript engine",
            "Safari's JavaScript engine",
            "Internet Explorer's JavaScript engine"
        ],
        answer: "Chrome's JavaScript engine"
    },
    {
        question: "3. Which of the following is NOT a core module in Node.js?",
        options: [
            "fs",
            "http",
            "path",
            "mongodb"
        ],
        answer: "mongodb"
    },
    {

        question: "4. What is npm in the context of Node.js?",
        options: [
            "Node Package Manager",
            "Node Project Manager",
            "Node Programming Module",
            "Node Package Module"
        ],
        answer: "Node Package Manager"
    },
    {
     
        question: "5. Which of the following is used to handle asynchronous operations in Node.js?",
        options: [
            "Callbacks",
            "Promises",
            "Async/await",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
 
        question: "6. What is the purpose of the 'require' function in Node.js?",
        options: [
            "To include built-in modules",
            "To include external modules installed via npm",
            "Both a and b",
            "None of the above"
        ],
        answer: "Both a and b"
    },
    {
      
        question: "7.Which of the following is NOT a valid HTTP method?",
        options: [
            "GET",
            "POST",
            "UPDATE",
            "DELETE"
        ],
        answer: "UPDATE"
    },
    {
      
        question: "8.What is the purpose of the 'path' module in Node.js?",
        options: [
            "To perform file system operations",
            "To provide utilities for working with file and directory paths",
            "To create HTTP servers",
            "To handle HTTP requests and responses"
        ],
        answer: "To provide utilities for working with file and directory paths"
    },
    {
       
        question: "9. Which of the following is NOT a valid way to create a web server in Node.js?",
        options: [
            "Using the 'http' module",
            "Using the 'express' framework",
            "Using the 'fs' module",
            "All of the above are valid ways"
        ],
        answer: "Using the 'fs' module"
    },
    {
      
        question: "10. What is the purpose of the 'events' module in Node.js?",
        options: [
            "To provide a way of working with events",
            "To create custom events",
            "Both a and b",
            "None of the above"
        ],
        answer: "Both a and b"
    }
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
      fontWeight:'bold',
fontSize:18,
    },
    questionContainer: {
      padding: 10,
      margin: 10,
      borderRadius: 5,
    },
    optionStyle: {
      color: "green",
      fontFamily:'Avenir-LightOblique',
      fontWeight:'bold',
      
      padding: 10, // Increased padding for options
      fontSize: 18,
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

export default Nodejs;
