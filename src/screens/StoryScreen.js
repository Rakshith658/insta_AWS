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
import { EvilIcons,Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
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
                    <View style={styles.userInfo}>
                        <ProfilePic uri={UserStories.user.imageUri} size={50}/>
                        <View>
                            <Text style={styles.userName}>{UserStories.user.name}</Text>
                            <Text style={styles.postedTime}>{activeStory.postedTime}</Text>
                        </View>
                    </View>
                    <View style={styles.bottomContainer}>
                        <View style={styles.cameraButton}>
                            <EvilIcons name="camera" size={24} color="#ffff" />
                        </View>
                        <View style={styles.textInputContainer}>
                            <TextInput
                                style={styles.textInput}
                                editable
                                placeholder="Send message"
                                placeholderTextColor={"#ffff"}
                            />
                        </View>
                        <View style={styles.messageButton}>
                            <Feather name="send" size={24} color="#ffff" />
                        </View>
                    </View>
                    {/* <View style={styles.buttomContainer}>
                        <EvilIcons name="camera" size={24} color="White" />
                        <TextInput/>
                        <Feather name="send" size={24} color="White" />
                    </View> */}
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
        justifyContent:"space-between",
        width:'100%',
        height:'100%'
    },
    userInfo:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:10
    },
    userName:{
        color:"white",
        fontWeight:"700",
        fontSize:18
    },
    postedTime: {
        marginLeft: 10,
        fontWeight: "700",
        color: "#808080",
        fontSize: 16
      },
      bottomContainer: {
        flexDirection: "row",
        marginBottom: 20,
        marginHorizontal: 10
      },
      cameraButton: {
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 50,
      },
      messageButton: {
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
      },
      textInput: {
        height: "100%",
        color: "white",
        fontSize: 16
      },
      textInputContainer: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'white',
        marginHorizontal: 10,
        paddingHorizontal: 10,
        borderRadius: 50,
        height: 50
      }
})
