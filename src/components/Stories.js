import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import ProfilePic from './ProfilePic'
import Story from './Story'

const data=[
    {
        imageUri:"https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        name:"Rakshith"
    },
    {
        imageUri:"https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        name:"Arjun"
    },
    {
        imageUri:"https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        name:"Sheela"
    },
    {
        imageUri:"https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        name:"Hime"
    },
    {
        imageUri:"https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        name:"shashi"
    },
    {
        imageUri:"https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        name:"Suman"
    },
]

const Stories = () => {
    return (
       <FlatList
            data={data}
            keyExtractor={({name})=>name}
            renderItem={({item})=><Story imageUri={item.imageUri} name={item.name}/>}
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
