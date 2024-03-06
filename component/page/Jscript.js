import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'; 
const Jscript = () => {
    const navigation = useNavigation();
    const handlePage = () => {
        navigation.navigate('AllPage'); // Navigate to 'AllPage' screen
      };
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const quizData = [
    {
      question:
        "1. What method is used to iterate over the properties of an object in JavaScript?",
      options: [
        "forEach()",
        "for...in loop",
        "for...of loop",
        "map()",
      ],
      answer: "for...in loop",
    },
    {
      question:
        "2. What is the output of `typeof null` in JavaScript?",
      options: ["'null'", "'undefined'", "'object'", "'string'"],
      answer: "'object'",
    },
    {
      question: "3. Which method is used to remove the last element from an array in JavaScript?",
      options: [
        "pop()",
        "shift()",
        "splice()",
        "slice()",
      ],
      answer: "pop()",
    },
    {
      question: "4. What does the `===` operator do in JavaScript?",
      options: [
        "Compares the value and type",
        "Compares only the value",
        "Compares only the type",
        "Assigns a value",
      ],
      answer: "Compares the value and type",
    },
    {
      question:
        "5. Which function is used to convert a string to an integer in JavaScript?",
      options: [
        "parseInt()",
        "toFloat()",
        "toInteger()",
        "convertToInt()",
      ],
      answer: "parseInt()",
    },
    {
      question:
        "6. What is the result of `2 + '2'` in JavaScript?",
      options: [
        "'22'",
        "'4'",
        "'TypeError'",
        "'NaN'",
      ],
      answer: "'22'",
    },
    {
      question: "7. How can you convert a number to a string in JavaScript?",
      options: [
        "String(number)",
        "number.toString()",
        "Stringify(number)",
        "Both A and B",
      ],
      answer: "Both A and B",
    },
    {
      question:
        "8. Which method is used to join elements of an array into a string in JavaScript?",
      options: ["join()", "concat()", "toString()", "map()"],
      answer: "join()",
    },
    {
      question:
        "9. What is the purpose of the `let` keyword in JavaScript?",
      options: [
        "To declare a block-scoped variable",
        "To declare a global variable",
        "To declare a constant",
        "To declare a function",
      ],
      answer: "To declare a block-scoped variable",
    },
    {
      question:
        "10. What does the `this` keyword refer to in JavaScript?",
      options: ["The current object", "The parent object", "The global object", "The child object"],
      answer: "The current object",
    },
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
    fontFamily:'Avenir-LightOblique',
    fontWeight:'bold',
    fontSize: 18,
  
  },
  optionContainer: {
    borderColor: "black",
    borderWidth: 2,
    marginTop: 20,
    padding: 10,
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
    
    fontWeight:'bold',
    fontSize:18,
        },
  heading: {
    fontWeight: "bold",
    fontSize: 26,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
});

export default Jscript;
