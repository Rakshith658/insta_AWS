import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Body from './Postes/Body'
import Footer from './Postes/Footer'
import Header from './Postes/Header'

const Post = ({post}) => {
    return (
        <View>
            <Header imageUri={post.user.imageUri} name={post.user.name}/>
            <Body imageUri={post.imageUri}/>
            <Footer likescount={post.likescount} caption={post.caption} postedat={post.postedat}/>
        </View>
    )
}

export default Post

const styles = StyleSheet.create({})
