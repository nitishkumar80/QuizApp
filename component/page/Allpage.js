import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import { faReact, faCss3Alt, faHtml5, faJs, faDatabase, faNodeJs, faPython } from '@fortawesome/free-brands-svg-icons';
import { FontAwesome6, FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function AllPage() {
  const navigation = useNavigation();

  const handleNavigation = (route) => {
    navigation.navigate(route);
  };

  return (
    <LinearGradient
      // colors={['#091939', '#004d7a', '#008790', '#00bf92', '#a8eb97']}
      colors={['#ff9966', '#ff5e62']}
      style={styles.container}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.icon} onPress={() => handleNavigation('Html')}>
          <FontAwesomeIcon icon={faHtml5} size={90} />
          <Text style={styles.text}>Html</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.icon} onPress={() => handleNavigation('Css')}>
          <FontAwesomeIcon icon={faCss3Alt} size={90} />
          <Text style={styles.text}>Css</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.icon} onPress={() => handleNavigation('Quizereact')}>
          <FontAwesomeIcon icon={faReact} size={90} />
          <Text style={styles.text}>React Js</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.icon} onPress={() => handleNavigation('Jscript')}>
          <FontAwesomeIcon icon={faJs} size={90} />
          <Text style={styles.text}>Javascript</Text>
        </TouchableOpacity>
      </ScrollView>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.hero}>
        <TouchableOpacity style={styles.icon} onPress={() => handleNavigation('Nodejs')}>
          <FontAwesomeIcon icon={faNodeJs} size={90} />
          <Text style={styles.text}>Node Js</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.icon} onPress={() => handleNavigation('Python')}>
          <FontAwesomeIcon icon={faPython} size={90} />
          <Text style={styles.text}>Python</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.icon} onPress={() => handleNavigation('Java')}>
          <FontAwesome6 name="java" size={90} />
          <Text style={styles.text}>Java</Text>
        </TouchableOpacity>
       
        <TouchableOpacity style={styles.icon} onPress={() => handleNavigation('Mongodb')}>
          <Fontisto name="mongodb" size={90} color="black" />
          <Text style={styles.text}>Mongodb</Text>
        </TouchableOpacity>
      </ScrollView>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.hero}>
        <TouchableOpacity style={styles.icon} onPress={() => handleNavigation('Swift')}>
          <FontAwesome5 name="swift" size={90} color="black" />
          <Text style={styles.text}>Swift</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.icon} onPress={() => handleNavigation('Php')}>
          <FontAwesome5 name="php" size={90} color="black" />
          <Text style={styles.text}>Php</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.icon} onPress={() => handleNavigation('Mysql')}>
          <Fontisto name="mysql" size={90} color="black" />
          <Text style={styles.text}>Mysql</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 20,
    alignItems: 'center',
    marginTop: 140,
    
  },
  text: {
    fontSize: 17,
    color: 'black',
    fontFamily: 'Avenir-LightOblique',
    marginTop: 10,
    fontWeight: 'bold',
  },
  hero: {
    marginTop: -150,
  },
});
