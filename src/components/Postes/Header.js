import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ProfilePic from '../ProfilePic'

const Header = ({imageUri,name}) => {
    return (
        <View style={styles.container}>
            <ProfilePic uri={imageUri} size={40}/>
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container:{
        flexDirection:'row'
    },
    name:{
        alignSelf:'center',
        fontWeight:"bold",
        color:"#4f4f4f"
    }
})
