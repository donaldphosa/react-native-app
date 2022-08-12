import { StyleSheet , ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import Header from '../components/homeComponents/Header';
import Stories from '../components/homeComponents/Stories';
import Post from '../components/homeComponents/Post';
import BottomTaps from '../components/homeComponents/BottomTaps';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
     <Header navigation={navigation}/>
     <Stories/>
     <ScrollView style={{
        marginBottom:40}}>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
     </ScrollView>
     <BottomTaps/>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  }
})