import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, FlatList } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import { faReact, faNodeJs, faCss3Alt, faHtml5, faPython, faJs } from '@fortawesome/free-brands-svg-icons';

const data = [
  { icon: faHtml5, color: '#E34F26', text: 'Html', route: 'Html' },
  {icon:faCss3Alt, color: 'brown', text: 'Css', route:'Css' },

  { icon: faJs, color: '#FFD700', text: 'Javascript', route: 'jscript' },
  { icon: faReact, color: 'blue', text: 'React Js', route: 'quizereact' },
  { icon: faPython, color: 'red', text: 'Python', route: 'python' },
  { icon: faNodeJs, color: 'green', text: 'NodeJs', route: 'Nodejs' },

];

export default function Frontend() {
  const navigation = useNavigation();

  const handleNavigation = (route) => {
    navigation.navigate(route);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.icon} onPress={() => handleNavigation(item.route)}>
      <FontAwesomeIcon icon={item.icon} size={90} color={item.color} />
      <Text style={styles.text}>{item.text}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View>
      
      
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.route}
        horizontal={true}
      />
     </View>
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
    marginTop:90,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 17,
    color: 'blue',
    marginTop: 10,
  },
  title: {
    fontSize: 17,
    color: 'blue',
    marginTop: 40,
  },
});
