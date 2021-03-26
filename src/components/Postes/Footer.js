import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Feather,FontAwesome,FontAwesome5 } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Footer = ({likescount,caption,postedat}) => {

    const [isLiked, setIsLike] = useState(false);
    const [likesCount, setLikesCount] = useState(0);

    const onLikePressed = () => {
        const amount = isLiked ? -1 : 1;
        setLikesCount(likesCount + amount);

        setIsLike(!isLiked);
    }

    useEffect(() =>{
        setLikesCount(likescount)
    }, [])
    return (
        <View style={styles.container}>
            <View style={styles.iconsContainer}>
                <View style={styles.leftIcons}>
                <TouchableWithoutFeedback onPress={onLikePressed}>
                    {isLiked ?
                     <FontAwesome name="heart" size={24} color="black" />:
                     <Feather name="heart" size={24} color="black" />
                    }
                </TouchableWithoutFeedback>
                <FontAwesome5 name="comment" size={24} color="#545454" />
                <Feather name="send" size={24} color="#545454" />
                </View>
                <FontAwesome name="bookmark-o" size={24} color="black" />
            </View>
            <Text style={styles.likes}>{likesCount}Likes</Text>
            <Text style={styles.caption}>{caption}</Text>
            <Text style={styles.postedat}>{postedat}</Text>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    container: {
        margin: 5,
    },
        iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
    },
    leftIcons: {
        flexDirection: 'row',
        width: 120,
        justifyContent: 'space-between',
    },
    likes: {
        fontWeight: 'bold',
        margin: 3,
    },
    caption: {
        margin:3
    },
    postedAt: {
        color: '#8c8c8c',
        margin: 3,
    }
})
