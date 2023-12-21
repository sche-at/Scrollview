import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { users } from "./src/User";
export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.containers}>
      <Text style={styles.name}s>LIST OF GUESTS</Text>
      <ScrollView >
        {users.map((users) => {
          return (
            <View>
              <Text style={styles.name}>
                {users.name.lastname},{users.name.firstname}{users.name.middlename ? `, ${users.name.middlename}.` : ''}
              </Text>
              <Text style={styles.address}>{users.address}</Text>
            </View>
          );
        })}
      </ScrollView>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   flexDirection: 'column',
   justifyContent: 'flex-end'

    },
  name:{
    color: "black",
    fontWeight: 'bold',
    fontSize: 20,
   
  },
  names:{
    color: "black",
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 40
  },
  address:{
    color: "black",
    fontSize: 15,
    marginBottom: 10
  },
  containers:{
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginLeft: 20,
    gap: 20
  }
});