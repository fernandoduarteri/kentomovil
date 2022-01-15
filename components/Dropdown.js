import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
const Dropdown = ({ users, setSelectedUser }) => {
    const [userSelected, setUserSelected] = useState('');

    const handleChnange = (value, index) => {
        if (value) {
            setSelectedUser(value);
            const user = users.find(u => u.user_id === value);
            setUserSelected(`${user.user_first_name} ${user.user_last_name}`);
            console.log(user);
        }
    }
    const placeholder = {
        label: 'Select a user...',
        value: null,
        color: 'black'
    };

    const pickerSelectStyles = StyleSheet.create({
        inputIOS: {
            fontSize: 16,
            paddingVertical: 12,
            paddingHorizontal: 10,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 4,
            color: 'black',
            paddingRight: 30, // to ensure the text is never behind the icon
        },
        inputAndroid: {
            fontSize: 16,
            paddingHorizontal: 10,
            paddingVertical: 8,
            borderWidth: 0.5,
            borderColor: 'purple',
            borderRadius: 8,
            color: 'black',
            paddingRight: 30, // to ensure the text is never behind the icon
        },
    });
    return (
        <View  >
            <Text style={{ paddingBottom: 20, color: 'orange' }}>Choose a user</Text>
            <View style={pickerSelectStyles.inputAndroid}>
               

                <Picker
                    
                    selectedValue={userSelected}
                    itemStyle={{ backgroundColor: "grey", color: "blue", fontFamily:"Ebrima", fontSize:17 }}
                    onValueChange={(itemValue, itemIndex) => {
                        setUserSelected(itemValue)
                        setSelectedUser(itemValue)
                    }
                    }>
                    {
                        users.map(user => (
                            <Picker.Item key={user.user_id} label={`${user.user_first_name} ${user.user_last_name}`} value={user.user_id} />

                        ))
                    }
                </Picker>


            </View>
        </View >
    )
}

export default Dropdown
