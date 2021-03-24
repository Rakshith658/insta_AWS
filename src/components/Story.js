import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ProfilePic from './ProfilePic'



const Story = ({imageUri,name}) => {
    return (
        <View style={styles.container}>
            <ProfilePic uri={imageUri}/>
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}

export default Story

const styles = StyleSheet.create({
    container:{
        
    },
    name:{
        textAlign:'center'
    }
})
