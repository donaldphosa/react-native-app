import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import Topbar from '../components/poster/Topbar';
import MakePost from '../components/poster/MakePost';

const Poster = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Topbar navigation={navigation}/>
      <MakePost/>
    </SafeAreaView>
  )
}

export default Poster

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    }
})