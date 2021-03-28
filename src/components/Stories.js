import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import{ API,graphqlOperation}from "aws-amplify"

import ProfilePic from './ProfilePic'
import Story from './Story'
import data from '../Data/data'

import{listStorys}from '../graphql/queries'


const Stories = () => {

    const [stories, setStories] = useState([]);

    useEffect(() => {
        fetchStories();
    }, []);

    const fetchStories = async () => {
        try {
        const storiesData = await API.graphql(graphqlOperation(listStorys));
        setStories(storiesData.data.listStorys.items);
        } catch (e) {
        console.log(e);
        }
    }
    return (
       <FlatList
            data={stories}
            keyExtractor={({user})=>user.id}
            renderItem={({item})=><Story story={item}/>}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.container}
       />
    )
}

export default Stories

const styles = StyleSheet.create({
    container:{
        marginBottom:15,
    }
})
