import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import ProfilePic from './ProfilePic'
import Story from './Story'
import data from '../Data/data'


const Stories = () => {
    return (
       <FlatList
            data={data}
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
