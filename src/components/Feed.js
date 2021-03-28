import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import { API,graphqlOperation} from 'aws-amplify'
import Post from './Post'
import Stories from './Stories'
import {listPosts} from '../graphql/queries'



const Feed = () => {

    // const [Post, setPost] = useState([])

    // useEffect(() => {
    //     fetchPost();
    // }, [])

    // const fetchPost =async()=> {
    //     try {
    //         const postsData = await API.graphql(graphqlOperation(listPosts));
    //         // console.log(postsData.data.listPosts.items);
    //         setPost(postsData.data.listPosts.items);
    //         // console.log(Post[0]);
    //     } catch (e) {
    //         console.log(e.message);
    //     }
    // }

    
    // return (
    //     // <View></View>
    //     <FlatList
    //         data={Post}
    //         keyExtractor={({id}) => id}
    //         renderItem={({item})=><Post post={item}/>}
    //         ListHeaderComponent={<Stories/>}
    //         showsVerticalScrollIndicator={false}
    //     />
    
    // )

    const [posts, setPosts] = useState([]);

    
    useEffect(() => {
        fetchPosts();
    }, [])

  const fetchPosts = async () => {
    try {
      const postsData = await API.graphql(graphqlOperation(listPosts));
      setPosts(postsData.data.listPosts.items);
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <FlatList
        data={posts}
        keyExtractor={({id}) => id}
        renderItem={({item})=><Post post={item}/>}
        ListHeaderComponent={<Stories/>}
        showsVerticalScrollIndicator={false}
    />
  )
}

export default Feed

const styles = StyleSheet.create({})
