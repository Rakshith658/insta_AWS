import React from 'react'
import { Image, StyleSheet, Text, View,Dimensions } from 'react-native'

const Body = ({imageUri}) => {
    return (
        <Image
            source={{uri:imageUri}}
            style={styles.image}
        />
    )
}

export default Body

const styles = StyleSheet.create({
    image:{
        width:Dimensions.get("window").width,
        height:Dimensions.get("window").width
    }
})
