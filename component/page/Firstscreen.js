import React, { useRef } from 'react';
import { View, StyleSheet, Animated, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

// Import your image
import quizImage from '/Users/nitish/QuizApp/assets/main.png'; // Replace 'path/to/your/image' with the actual path to your image

const Firstscreen = () => {
    const navigation = useNavigation(); // Initialize useNavigation hook
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const buttonScale = useRef(new Animated.Value(1)).current;

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000, // Adjust duration as needed
            useNativeDriver: true, // Add this line for better performance
        }).start();
    };

    const nextPage = () => {
        navigation.navigate('AllPage'); // Navigate to 'AllPage' screen
    };

    const scaleButton = () => {
        Animated.sequence([
            Animated.timing(buttonScale, {
                toValue: 1.2,
                duration: 100,
                useNativeDriver: true,
            }),
            Animated.timing(buttonScale, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true,
            }),
        ]).start();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}> QuizApp</Text>
            <Animated.Image
                source={quizImage}
                style={[styles.image, { opacity: fadeAnim }]}
                onLoad={fadeIn} // Trigger animation when image is loaded
            />
            <TouchableOpacity 
                style={[styles.btn, { transform: [{ scale: buttonScale }] }]} 
                onPress={() => {
                    nextPage();
                    scaleButton(); // Trigger button animation when pressed
                }}
            >
                <Text style={styles.text}>Let's Start</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#C5EBFC',
        width: '100%',
        height: 900,
        justifyContent: "center",
        padding: 0,
        alignItems: "center",
        flexDirection: 'column',
    },
    image: {
        width: 400, // Adjust width as needed
        height: 500, // Adjust height as needed
        resizeMode: 'contain', // Adjust resizeMode as needed
    },
    btn: {
        backgroundColor: '#0A73DC',
        padding: 15,
        borderRadius: 30,
        marginTop: 20, // Add margin to separate button from image
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    title:{
        fontFamily:'Avenir-LightOblique',
        fontWeight:'bold',
        fontSize:32,
        color:'#0A73DC',
    },
});

export default Firstscreen;
