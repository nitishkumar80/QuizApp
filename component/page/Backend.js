import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import { faReact, faCss3Alt, faHtml5, faJs, faDatabase, faNodeJs, faPython } from '@fortawesome/free-brands-svg-icons';

export default function AllPage() {
  const navigation = useNavigation();

  const handleNavigation = (route) => {
    navigation.navigate(route);
  };

  return (
    <View style={styles.container}>
      {/* First row */}
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
          <Text style={styles.text}>React</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.icon} onPress={() => handleNavigation('Javascript')}>
          <FontAwesomeIcon icon={faJs} size={90} />
          <Text style={styles.text}>Javascript</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Second row */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={[styles.icon, { marginTop: 20 }]} onPress={() => handleNavigation('Database')}>
          <FontAwesomeIcon icon={faDatabase} size={90} />
          <Text style={styles.text}>Database</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.icon, { marginTop: 20 }]} onPress={() => handleNavigation('NodeJs')}>
          <FontAwesomeIcon icon={faNodeJs} size={90} />
          <Text style={styles.text}>Node.js</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.icon, { marginTop: 20 }]} onPress={() => handleNavigation('Python')}>
          <FontAwesomeIcon icon={faPython} size={90} />
          <Text style={styles.text}>Python</Text>
        </TouchableOpacity>

        {/* Add more icons here as needed */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C5EBFC',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 17,
    color: 'blue',
    marginTop: 10,
  },
});
