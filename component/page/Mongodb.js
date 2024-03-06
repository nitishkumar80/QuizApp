import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'; 
const Mongodb = () => {
    const navigation = useNavigation();
    const handlePage = () => {
        navigation.navigate('AllPage'); // Navigate to 'AllPage' screen
      };
      
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const quizeData = [
    {
        "question": "1. What is MongoDB?",
        "options": ["A relational database management system", "A NoSQL database management system", "A programming language", "A web framework"],
        "answer": "A NoSQL database management system"
    },
    {
        "question": "2. Which of the following statements about MongoDB is true?",
        "options": ["MongoDB stores data in tables", "MongoDB uses SQL for queries", "MongoDB uses JSON-like documents for data storage", "MongoDB is not suitable for large-scale applications"],
        "answer": "MongoDB uses JSON-like documents for data storage"
    },
    {
        "question": "3. What is a primary key in MongoDB?",
        "options": ["A unique identifier for a collection", "A field that is indexed for faster queries", "A field that stores encrypted data", "A field that can be null"],
        "answer": "A unique identifier for a collection"
    },
    {
        "question": "4. How can you perform aggregation in MongoDB?",
        "options": ["Using the $aggregate method", "Using the $group method", "Using the $filter method", "Using the $sort method"],
        "answer": "Using the $aggregate method"
    },
    {
        "question": "5. What does the term 'sharding' mean in MongoDB?",
        "options": ["The process of encrypting data in MongoDB", "The process of splitting data across multiple servers", "The process of compressing data in MongoDB", "The process of indexing data for faster retrieval"],
        "answer": "The process of splitting data across multiple servers"
    },
    {
        "question": "6. Which of the following is NOT a type of index supported by MongoDB?",
        "options": ["Single field index", "Compound index", "Text index", "Graph index"],
        "answer": "Graph index"
    },
    {
        "question": "7. What is a replica set in MongoDB?",
        "options": ["A set of identical documents stored in different collections", "A set of MongoDB instances that maintain the same data", "A set of indexes for efficient querying", "A set of queries optimized for read operations"],
        "answer": "A set of MongoDB instances that maintain the same data"
    },
    {
        "question": "8. How does MongoDB handle transactions?",
        "options": ["MongoDB doesn't support transactions", "MongoDB uses the two-phase commit protocol", "MongoDB uses multi-document transactions", "MongoDB uses single-document transactions"],
        "answer": "MongoDB uses multi-document transactions"
    },
    {
        "question": "9. What is the purpose of the $lookup stage in MongoDB aggregation?",
        "options": ["To filter documents based on a condition", "To join data from multiple collections", "To project specific fields from documents", "To group documents based on a key"],
        "answer": "To join data from multiple collections"
    },
    {
        "question": "10. Which of the following is a feature of MongoDB Atlas?",
        "options": ["On-premise deployment only", "Automatic scaling", "Limited storage capacity", "Supports only relational data models"],
        "answer": "Automatic scaling"
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

export default Mongodb;
