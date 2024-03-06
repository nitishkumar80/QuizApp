import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'; 
const Css = () => {
    const navigation = useNavigation();
    const handlePage = () => {
        navigation.navigate('AllPage'); // Navigate to 'AllPage' screen
      };
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const quizData = [
    {
      question: "1. What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Creative Style Sheets",
        "Colorful Style Sheets",
        "Computer Style Sheets"
      ],
      answer: "Cascading Style Sheets"
    },
    {
      question: "2. Which property is used to change the background color of an element?",
      options: ["background-color", "color", "background", "bgcolor"],
      answer: "background-color"
    },
    {
      question: "3. What is the correct CSS syntax for making all the <p> elements bold?",
      options: [
        "p {text-weight: bold;}",
        "p {font-weight: bold;}",
        "p {style: bold;}",
        "p {weight: bold;}"
      ],
      answer: "p {font-weight: bold;}"
    },
    {
      question: "4. Which property is used to set the text color of an element?",
      options: ["font-color", "color", "text-color", "font-style"],
      answer: "color"
    },
    {
      question: "5. What does the CSS property 'margin' control?",
      options: [
        "The space outside the border",
        "The space inside the border",
        "The width of the border",
        "The height of the element"
      ],
      answer: "The space outside the border"
    },
    {
      question: "6. Which CSS property is used to control the size of the font?",
      options: ["text-size", "font-size", "size", "font-style"],
      answer: "font-size"
    },
    {
      question: "7. What does the 'float' property in CSS do?",
      options: [
        "Moves the element to the left or right",
        "Stretches the element horizontally",
        "Makes the element transparent",
        "Adds a shadow to the element"
      ],
      answer: "Moves the element to the left or right"
    },
    {
      question: "8. Which CSS property is used to create rounded corners?",
      options: ["border-radius", "corner-radius", "round-border", "border-style"],
      answer: "border-radius"
    },
    {
      question: "9. What is the default value of the 'position' property in CSS?",
      options: ["fixed", "absolute", "relative", "static"],
      answer: "static"
    },
    {
      question: "10. Which property is used to control the transparency of an element in CSS?",
      options: ["opacity", "transparency", "visibility", "alpha"],
      answer: "opacity"
    }
  ];
  

  const handleAnswer = (selectedAnswer) => {
    const answer = quizData[currentQuestion]?.answer;
    if (answer === selectedAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
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
            {quizData[currentQuestion]?.question}
          </Text>
          {quizData[currentQuestion]?.options.map((item, index) => (
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
  questionContainer: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  optionStyle: {
    color: "green",
    padding: 10,
    fontSize: 18,
    fontFamily:'Avenir-LightOblique',
    fontWeight:'bold',
    
  },
  optionContainer: {
    borderColor: "black",
    borderWidth: 2,
    marginTop: 20,
   
    padding: 10,
  },
  questionText: {
    fontSize: 24,
    fontFamily:'Avenir-LightOblique',
    fontWeight:'bold',
    
  },
  resetBtn: {
    fontSize: 20,
    marginTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "red",
    color: "white",
    borderRadius: 5,
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
  back:{
    margin:20,
    fontSize:18,
    fontWeight:'bold',
        },
  heading: {
    fontWeight: "bold",
    fontSize: 26,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
});

export default Css;
