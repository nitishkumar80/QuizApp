import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'; 
const Html = () => {
    const navigation = useNavigation();
    const handlePage = () => {
        navigation.navigate('AllPage'); // Navigate to 'AllPage' screen
      };
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const quizData = [
    {
      question: "1. What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High-level Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlink Text Markup Language"
      ],
      answer: "Hyper Text Markup Language"
    },
    {
      question: "2. Which tag is used to define an unordered list in HTML?",
      options: ["<ol>", "<li>", "<ul>", "<list>"],
      answer: "<ul>"
    },
    {
      question: "3. What does the <p> tag stand for in HTML?",
      options: ["Paragraph", "Preformatted text", "Page", "Position"],
      answer: "Paragraph"
    },
    {
      question: "4. Which tag is used to create a hyperlink in HTML?",
      options: ["<a>", "<link>", "<href>", "<hyperlink>"],
      answer: "<a>"
    },
    {
      question: "5. What is the correct HTML for creating a table?",
      options: [
        "<table>",
        "<tab>",
        "<tr>",
        "<td>"
      ],
      answer: "<table>"
    },
    {
      question: "6. What is the correct HTML for inserting an image?",
      options: [
        "<img src='image.jpg' alt='Image'>",
        "<image src='image.jpg' alt='Image'>",
        "<img alt='Image'>",
        "<picture src='image.jpg' alt='Image'>"
      ],
      answer: "<img src='image.jpg' alt='Image'>"
    },
    {
      question: "7. Which attribute is used to define the URL of an image in HTML?",
      options: ["src", "link", "href", "url"],
      answer: "src"
    },
    {
      question: "8. Which tag is used to define a header in HTML?",
      options: ["<head>", "<header>", "<title>", "<heading>"],
      answer: "<header>"
    },
    {
      question: "9. What is the correct HTML for creating a hyperlink to an email address?",
      options: [
        "<a href='mailto:example@example.com'>Send email</a>",
        "<a href='mail:example@example.com'>Send email</a>",
        "<a href='email:example@example.com'>Send email</a>",
        "<a href='link:example@example.com'>Send email</a>"
      ],
      answer: "<a href='mailto:example@example.com'>Send email</a>"
    },
    {
      question: "10. Which tag is used to define the structure of an HTML document?",
      options: ["<body>", "<structure>", "<html>", "<doctype>"],
      answer: "<html>"
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
    backgroundColor: '#C5EBFC',
    alignItems: "center",
    justifyContent: "center",
  },
  questionContainer: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  optionStyle: {
    color: "blue",
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
    marginTop:20,
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

export default Html;
