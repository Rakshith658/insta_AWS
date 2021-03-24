import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Post from './Post'
import Stories from './Stories'

const data=[
    {
        user:{
            imageUri:"https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
            name:"Rakshith"
        },
        imageUri:"https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        caption:"Nice Road # Instagram",
        likescount:1234,
        postedat:"6 minutes ago",
        id:1
    },
    {
        user:{
            imageUri:"https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
            name:"Rakshith"
        },
        imageUri:"https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        caption:"Nice Road # Instagram",
        likescount:1234,
        postedat:"6 minutes ago",
        id:2
    },
    {
        user:{
            imageUri:"https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
            name:"Rakshith"
        },
        imageUri:"https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        caption:"Nice Road # Instagram",
        likescount:1234,
        postedat:"6 minutes ago",
        id:3
    },
    {
        user:{
            imageUri:"https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
            name:"Rakshith"
        },
        imageUri:"https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        caption:"Nice Road # Instagram",
        likescount:1234,
        postedat:"6 minutes ago",
        id:4
    },
]

const Feed = () => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=><Post post={item}/>}
            ListHeaderComponent={<Stories/>}
            showsVerticalScrollIndicator={false}
        />
    )
}

export default Feed

const styles = StyleSheet.create({})
