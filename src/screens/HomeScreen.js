import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Feed from '../components/Feed'
import Post from '../components/Post'
import ProfilePic from '../components/ProfilePic'
import Stories from '../components/Stories'

import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';

const Stack = createStackNavigator();


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

const HomeStackScreen =()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                    title:"Instagram",
                    headerTitleAlign:"center",
                    headerTitleStyle:{
                        fontWeight:"bold",
                        fontStyle:"italic"
                    },
                    headerLeft:()=>(
                        <View style={{marginLeft:10 }}>
                            <Feather name="camera" size={24} color="black" />
                        </View>
                    ),
                    headerRight:()=>(
                        <View style={{marginRight:15}}>
                            <Feather name="send" size={24} color="black" />
                        </View>
                    )
                }}
            />
        </Stack.Navigator> 
    )
}

export default HomeStackScreen

const styles = StyleSheet.create({

})
