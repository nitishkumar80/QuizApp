import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'; 
const Mysql = () => {
    const navigation = useNavigation();
    const handlePage = () => {
        navigation.navigate('AllPage'); // Navigate to 'AllPage' screen
      };
      
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const quizeData = [
    {
        "question": "1. What keyword is used to create a new database in MySQL?",
        "options": ["NEW DATABASE", "CREATE DATABASE", "ADD DATABASE", "MAKE DATABASE"],
        "answer": "CREATE DATABASE"
    },
    {
        "question": "2. Which MySQL data type is used to store variable-length strings?",
        "options": ["VARCHAR", "CHAR", "TEXT", "STRING"],
        "answer": "VARCHAR"
    },
    {
        "question": "3. What is the default port number for MySQL server?",
        "options": ["3306", "5432", "8080", "27017"],
        "answer": "3306"
    },
    {
        "question": "4. Which SQL command is used to retrieve data from a MySQL database?",
        "options": ["GET", "SELECT", "RETRIEVE", "FETCH"],
        "answer": "SELECT"
    },
    {
        "question": "5. What keyword is used to update data in a MySQL table?",
        "options": ["CHANGE", "MODIFY", "UPDATE", "ALTER"],
        "answer": "UPDATE"
    },
    {
        "question": "6. Which MySQL command is used to delete a database?",
        "options": ["REMOVE DATABASE", "DELETE DATABASE", "DROP DATABASE", "DESTROY DATABASE"],
        "answer": "DROP DATABASE"
    },
    {
        "question": "7. What is the purpose of the MySQL `JOIN` clause?",
        "options": ["To perform arithmetic operations", "To merge two tables based on a related column", "To sort the result set", "To limit the number of rows returned"],
        "answer": "To merge two tables based on a related column"
    },
    {
        "question": "8. Which MySQL command is used to add a new column to an existing table?",
        "options": ["ADD COLUMN", "INSERT COLUMN", "ALTER TABLE", "MODIFY COLUMN"],
        "answer": "ALTER TABLE"
    },
    {
        "question": "9. What does the MySQL `COUNT()` function do?",
        "options": ["Counts the number of rows in a table", "Calculates the average value of a column", "Retrieves the maximum value in a column", "Sorts the result set in ascending order"],
        "answer": "Counts the number of rows in a table"
    },
    {
        "question": "10. Which MySQL statement is used to grant privileges to a user?",
        "options": ["GRANT", "ALLOW", "PERMIT", "AUTHORIZE"],
        "answer": "GRANT"
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

export default Mysql;
