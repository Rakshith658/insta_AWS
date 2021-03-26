import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ProfilePic from './ProfilePic'



const Story = (props) => {

    const navigation=useNavigation()

    

    const {
        story:{
            user:{
                id,
                imageUri,
                name  
            }
        }
    }=props

    const onPress=()=>{
        navigation.navigate("Story",{id}) 
        // console.log(id)
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View>
                <ProfilePic uri={imageUri}/>
                <Text style={styles.name}>{name}</Text>
            </View>
        </TouchableOpacity>
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
