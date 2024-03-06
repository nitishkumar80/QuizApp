import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'; 
const Java = () => {
    const navigation = useNavigation();
    const handlePage = () => {
        navigation.navigate('AllPage'); // Navigate to 'AllPage' screen
      };
      
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const quizeData = [
    {
        "question": "1. What keyword is used to define a class in Java?",
        "options": ["class", "define", "interface", "object"],
        "answer": "class"
    },
    {
        "question": "2. Which of the following is NOT a primitive data type in Java?",
        "options": ["int", "float", "boolean", "array"],
        "answer": "array"
    },
    {
        "question": "3. What is the correct syntax to declare a constant in Java?",
        "options": ["const", "final", "static", "constant"],
        "answer": "final"
    },
    {
        "question": "4. How do you instantiate an object of a class in Java?",
        "options": ["new ClassName()", "ClassName.new()", "ClassName.create()", "create ClassName()"],
        "answer": "new ClassName()"
    },
    {
        "question": "5. Which keyword is used for inheritance in Java?",
        "options": ["inherit", "extends", "implements", "inherits"],
        "answer": "extends"
    },
    {
        "question": "6. What is the output of `System.out.println(5 + \"5\")` in Java?",
        "options": ["10", "55", "5 + 5", "Error"],
        "answer": "55"
    },
    {
        "question": "7. How do you declare a method in Java that does not return any value?",
        "options": ["void method()", "int method()", "method void()", "public method()"],
        "answer": "void method()"
    },
    {
        "question": "8. Which of the following loop types is not available in Java?",
        "options": ["for", "while", "do-while", "foreach"],
        "answer": "foreach"
    },
    {
        "question": "9. What is the correct way to compare two strings for equality in Java?",
        "options": ["string1 == string2", "string1.equals(string2)", "string1.compareTo(string2)", "string1.compare(string2)"],
        "answer": "string1.equals(string2)"
    },
    {
        "question": "10. Which keyword is used to handle exceptions in Java?",
        "options": ["try", "exception", "catch", "throw"],
        "answer": "try"
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
      fontFamily:'Avenir-LightOblique',
      fontWeight:'bold',
      
      marginTop:20,
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

export default Java;
