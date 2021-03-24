import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ProfilePic from '../ProfilePic'
import { Entypo } from '@expo/vector-icons';

const Header = ({imageUri,name}) => {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <ProfilePic uri={imageUri} size={40}/>
                <Text style={styles.name}>{name}</Text>
            </View>
            <View style={styles.right}>
                <Entypo name="dots-three-vertical" size={24} color="black" />
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    left: {
        flexDirection: 'row',
    },
    right: {
        marginRight: 15
    },
    name: {
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#3c3c3c'
    }
})
