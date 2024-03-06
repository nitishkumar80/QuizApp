import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'; 
const Swift = () => {
    const navigation = useNavigation();
    const handlePage = () => {
        navigation.navigate('AllPage'); // Navigate to 'AllPage' screen
      };
      
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const quizeData = [
    {
        "question": "1. What keyword is used to declare a constant in Swift?",
        "options": ["let", "var", "const", "constant"],
        "answer": "let"
    },
    {
        "question": "2. Which of the following is used to indicate optionality in Swift?",
        "options": ["!", "?", "*", "#"],
        "answer": "?"
    },
    {
        "question": "3. What does 'ARC' stand for in Swift?",
        "options": ["Automatic Reference Counting", "Advanced Resource Collection", "Automatic Resource Control", "Advanced Reference Collection"],
        "answer": "Automatic Reference Counting"
    },
    {
        "question": "4. Which keyword is used to define a closure in Swift?",
        "options": ["func", "let", "closure", "=>"],
        "answer": "func"
    },
    {
        "question": "5. What is the keyword used to define a class in Swift?",
        "options": ["struct", "class", "protocol", "interface"],
        "answer": "class"
    },
    {
        "question": "6. Which Swift data type is used to store a sequence of values of the same type?",
        "options": ["Array", "Dictionary", "Set", "Tuple"],
        "answer": "Array"
    },
    {
        "question": "7. What does 'Optional Chaining' allow in Swift?",
        "options": ["Access properties, methods, and subscripts of an optional that might currently be nil", "Enforce type safety", "Access only non-optional properties", "Ensure all optionals are unwrapped"],
        "answer": "Access properties, methods, and subscripts of an optional that might currently be nil"
    },
    {
        "question": "8. Which Swift feature allows you to safely unwrap optionals?",
        "options": ["guard statement", "defer statement", "if-let statement", "while statement"],
        "answer": "if-let statement"
    },
    {
        "question": "9. What is the purpose of 'guard' statements in Swift?",
        "options": ["To define a constant or variable in a specific scope", "To create a new scope", "To safely unwrap optionals and handle unexpected conditions", "To break out of a loop"],
        "answer": "To safely unwrap optionals and handle unexpected conditions"
    },
    {
        "question": "10. What is Swift's protocol-oriented programming?",
        "options": ["A programming paradigm that encourages designing APIs through protocols and protocol extensions", "A way to define custom operators in Swift", "A technique for optimizing performance", "A method for dynamic method dispatch"],
        "answer": "A programming paradigm that encourages designing APIs through protocols and protocol extensions"
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
      fontSize:39,
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

export default Swift;
