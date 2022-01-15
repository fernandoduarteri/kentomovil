import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dropdown from './components/Dropdown';
import ListLikes from './components/ListLikes';
import { getUsers } from './helpers/fetch';

export default function App() {

  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState();

  useEffect(() => {
    const getData = async ()=>{
      const response = await getUsers();
      
      setUsers(response.data);
    }
    getData();
    
  }, [])
  return (
    <View style={styles.container}>
      <Dropdown users={users} setSelectedUser={setSelectedUser}/>
     { selectedUser && <ListLikes user={selectedUser} />}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingLeft:20,
    paddingRight:20,
    paddingTop:50,
    flexDirection:'column',
    backgroundColor: 'rgb(221, 200, 241)',
    
    
  }
});
