import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const ListItems = ({ likes }) => {


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
            paddingTop: 22
        },
        item: {
            padding: 10,
            fontSize: 18,
            height: 44,
        },
    });

    ItemSeparator = () => <View style={{
        height: 2,
        backgroundColor: "rgba(0,0,0,0.5)",
        marginLeft: 10,
        marginRight: 10,
    }}
    />;
    return (
        <View >
            <FlatList
                data={likes.map(res => (
                    { key: res.fan_of_music_group }
                ))}
                renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                ItemSeparatorComponent={ItemSeparator}


            />

        </View>
    )
}

export default ListItems
