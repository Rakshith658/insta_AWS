import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Body from './Postes/Body'
import Footer from './Postes/Footer'
import Header from './Postes/Header'

const Post = ({post}) => {
    console.log(post);
    return (
        <View>
            <Header imageUri={post.user.image} name={post.user.name}/>
            <Body imageUri={post.image}/>
            <Footer likescount={post.likes} caption={post.Caption} postedat={post.createdAt}/>
        </View>
    )
}

export default Post

const styles = StyleSheet.create({})
