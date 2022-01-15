
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { getLikes } from '../helpers/fetch';
import ListItems from './ListItems';

const ListLikes = (props) => {

    const [likes, setLikes] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const response = await getLikes(props.user)
            setLikes(response.data);
        }
        getData();

    }, [props.user]);


   
    return (
        <View>

            <ListItems likes={likes} />
        </View>
    )
}

export default ListLikes
