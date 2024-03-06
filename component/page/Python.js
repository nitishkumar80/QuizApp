import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'; 
const Python = () => {
    const navigation = useNavigation();
    const handlePage = () => {
        navigation.navigate('AllPage'); // Navigate to 'AllPage' screen
      };
      
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const quizeData = [
    {
        "question": "1. Which of the following is the correct way to remove an item from a list in Python?",
        "options": ["list.remove(item)", "list.pop(item)", "list.delete(item)", "list.discard(item)"],
        "answer": "list.remove(item)"
    },
    {
        "question": "2. What does the `range()` function in Python return?",
        "options": ["A list of integers", "A generator object", "A tuple of integers", "A dictionary of integers"],
        "answer": "A generator object"
    },
    {
        "question": "3. What is the result of `10 / 3` in Python?",
        "options": ["3.3333333333333335", "3", "3.0", "3.33"],
        "answer": "3.0"
    },
    {
        "question": "4. Which of the following is the correct way to comment out multiple lines in Python?",
        "options": ["// This is a comment //", "/* This is a comment */", "''' This is a comment '''", "# This is a comment"],
        "answer": "''' This is a comment '''"
    },
    {
        "question": "5. What is the result of `len('python')` in Python?",
        "options": ["5", "6", "7", "8"],
        "answer": "6"
    },
    {
        "question": "6. Which keyword is used for defining a function in Python?",
        "options": ["define", "function", "def", "func"],
        "answer": "def"
    },
    {
        "question": "7. What is the output of the following code snippet?",
        "options": ["hello", "olleh", "h", "o"],
        "answer": "olleh"
    },
    {
        "question": "8. Which data type is mutable in Python?",
        "options": ["String", "Integer", "Tuple", "List"],
        "answer": "List"
    },
    {
        "question": "9. What is the result of `bool('False')` in Python?",
        "options": ["True", "False", "None", "Error"],
        "answer": "True"
    },
   
    {
        "question": "10. Which of the following data structures in Python is unordered and cannot contain duplicate elements?",
        "options": ["List", "Tuple", "Set", "Dictionary"],
        "answer": "Set"
    },
   
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

export default Python;
