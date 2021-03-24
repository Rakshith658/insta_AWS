import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const ProfilePic = ({uri, size=70 }) => {
    return (
        <View style={[styles.container,{width:size+6,height:size+6}]}>
            <Image
                source={{uri:uri}}
                style={[styles.image,{width:size,height:size}]} 
            /> 
        </View>
    )
}

export default ProfilePic

const styles = StyleSheet.create({
    image:{
        borderRadius:40,
        borderWidth:1,
        borderColor:'#ffff'
    },
    container:{
        margin:7,
        borderRadius:40,
        borderWidth:3,
        borderColor:"#ae22e0"
    },
})
