import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Footer = ({likescount,caption,postedat}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.likes}>{likescount}Likes</Text>
            <Text style={styles.caption}>{caption}</Text>
            <Text style={styles.postedat}>{postedat}</Text>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    likes:{
        fontWeight:'bold',
        margin:3,
    },
    caption:{
        margin:3,
    },
    postedat:{
        color:"#8c8c8c",
        margin:3,
    },
    container:{
        margin:5
    }
})
