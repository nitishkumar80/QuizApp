import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'; 
const Php = () => {
    const navigation = useNavigation();
    const handlePage = () => {
        navigation.navigate('AllPage'); // Navigate to 'AllPage' screen
      };
      
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const quizeData = [
    {
        "question": "1. What is the correct syntax for starting a PHP block?",
        "options": ["<?php ... ?>", "<?php ... ?>", "<?php ... ?>", "<?php ... ?>"],
        "answer": "<?php ... ?>"
    },
    {
        "question": "2. Which function is used to output data to the browser in PHP?",
        "options": ["echo()", "print()", "printf()", "display()"],
        "answer": "echo()"
    },
    {
        "question": "3. How do you declare a variable in PHP?",
        "options": ["$var = value;", "var $ = value;", "variable = value;", "declare variable = value;"],
        "answer": "$var = value;"
    },
    {
        "question": "4. What does the function `strlen()` do in PHP?",
        "options": ["Returns the number of characters in a string", "Returns the string length in bytes", "Returns the string length including whitespace", "Returns the number of words in a string"],
        "answer": "Returns the number of characters in a string"
    },
    {
        "question": "5. Which of the following is the correct way to include an external PHP file?",
        "options": ["<php include('file.php'); >", "<php require('file.php'); >", "<php import('file.php'); >", "<php load('file.php'); >"],
        "answer": "<php include('file.php'); >"
    },
    {
        "question": "6. What is the output of `echo 5 * 3;` in PHP?",
        "options": ["15", "53", "Error", "8"],
        "answer": "15"
    },
    {
        "question": "7. What is the PHP function used to redirect a user to a different page?",
        "options": ["redirect()", "header()", "location()", "forward()"],
        "answer": "header()"
    },
    {
        "question": "8. How do you start a session in PHP?",
        "options": ["startSession();", "session_start();", "beginSession();", "initSession();"],
        "answer": "session_start();"
    },
    {
        "question": "9. Which of the following is NOT a valid PHP comment?",
        "options": ["// This is a comment", "# This is a comment", "/* This is a comment */", "<!-- This is a comment -->"],
        "answer": "<!-- This is a comment -->"
    },
    {
        "question": "10. What does the `print_r()` function do in PHP?",
        "options": ["Prints the structure of an array or object", "Prints a formatted string", "Prints the number of elements in an array", "Prints the contents of a file"],
        "answer": "Prints the structure of an array or object"
    }
]






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
      backgroundColor: '#C5EBFC',
      alignItems: "center",
      justifyContent: "center",
    },
    back:{
fontSize:18,
fontWeight:'bold',
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
      marginTop:20,
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

export default Php;
