import React, { useEffect, useState } from 'react'
import { 
    ActivityIndicator, 
    Dimensions, 
    Image, 
    ImageBackground, 
    SafeAreaView, 
    StyleSheet, 
    Text, 
    View,
    TouchableWithoutFeedback
 } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';
import { useRoute } from '@react-navigation/native';
import data from '../Data/data'
import ProfilePic from '../components/ProfilePic';
// import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

const StoryScreen = ({ navigation, route }) => {

    const [locationX, setLocationX] = useState(0)
    const [UserStories, setUserStories] = useState(null)
    const [activeStoryindex, setactiveStoryindex] = useState(null)
    // const [activeStory, setactiveStory] = useState(null)

    const userId=route.params.id;
    // console.log(userId);
    


    useEffect(() => {
        const userStories=data.find(Storydata=>Storydata.user.id===userId)
        setUserStories(userStories)
        // console.log(userStories);
        setactiveStoryindex(0)
    }, [])

    useEffect(() => {

        if (!UserStories) {
            return
        }
        // setactiveStory(UserStories.stories[activeStoryindex])
        
    }, [activeStoryindex])

    

    const NavigatetoNextuser = () => {
        // const d=parseInt(userId)
        // const id=d+1
        // const i=toString(id)
        const id=(parseInt(userId)+1).toString()
        console.log(id);
        navigation.push("Story",{id})
    }

    const NavigatetoPrevuser = () => {
        // const d=parseInt(userId)
        const id=(parseInt(userId)-1).toString()
        console.log(id);
        // const i=toString(id)
        
        navigation.push("Story",{id})
    }

    const handlePrevStory=()=>{
        if (activeStoryindex<=0) {
            // setactiveStoryindex(0)
            NavigatetoPrevuser()
            return
        }
        console.log("L");
        setactiveStoryindex(activeStoryindex-1)
        // a=a-1
    }

    const handleNextStory=()=>{
        if (activeStoryindex>=UserStories.stories.length-1) {
            // setactiveStoryindex(UserStories.stories.length-1)
            NavigatetoNextuser();
            return
        }
        console.log("R");
        setactiveStoryindex(activeStoryindex+1)
        // b=b+1
    }

    const screenWidth = Dimensions.get('window').width;

    const handlePress=(e)=>{
        setLocationX(e.nativeEvent.locationX)
        if (locationX<screenWidth/2) {
            handlePrevStory();
        }else{
            handleNextStory();
        }
    }
  
    
    if (!UserStories) {
        return(
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop:25
            }}>
                <ActivityIndicator/>
            </SafeAreaView>
        )
    }

    const activeStory=UserStories.stories[activeStoryindex]

    console.log(activeStory.imageUri);
    if (!activeStory) {
        return(
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop:25
            }}>
                <ActivityIndicator/>
            </SafeAreaView>
        )
    }
    return (
        <SafeAreaView style={styles.container} >
            <TouchableWithoutFeedback onPress={handlePress}>
                <ImageBackground source={{uri:activeStory.imageUri}} style={styles.image}>
                    <ProfilePic uri={UserStories.user.imageUri}/>
                </ImageBackground>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
    
}


// const StoryStackScreen =()=>{
//     return(
//         <Stack.Navigator>
//             <Stack.Screen 
//                 name="StoryScreen" 
//                 component={StoryScreen} 
//                 options={{
//                     headerShown:false
//                 }}
//             />
//         </Stack.Navigator> 
//     )
// }

export default StoryScreen

const styles = StyleSheet.create({
    container:{
        height:"100%",
        backgroundColor: 'transparent',
        // flex:1,
        // flexDirection:"row"
    },
    image:{
        flex:1,
        resizeMode:'cover',
        justifyContent:"center",
        width:'100%',
        height:'100%'
    },
    // main:{
    //     flex:1,
    //     flexDirection:"row",
    // },
    // left:{
    //     flex:1,
    //     // backgroundColor: 'transparent',
    //     height:"100%"
    // },
    // right:{
    //     flex:1,
    //     // backgroundColor: 'transparent',
    //     height:"100%"
    // }
})
