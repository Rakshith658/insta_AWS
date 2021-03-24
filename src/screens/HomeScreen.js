import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Feed from '../components/Feed'
import Post from '../components/Post'
import ProfilePic from '../components/ProfilePic'
import Stories from '../components/Stories'

// const post={
//     user:{
//         imageUri:"https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
//         name:"Rakshith"
//     },
//     imageUri:"https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
//     caption:"Nice Road # Instagram",
//     likescount:1234,
//     postedat:"6 minutes ago"
// }

const HomeScreen = () => {
    return (
        <View>
            {/* <Stories/> */}
            <Feed/>
            {/* <Post post={post}/> */}
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({

})
