import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import React from 'react'

const Topbar = ({navigation}) => {
  return (
    <View style={styles.conatiner}>
        <TouchableOpacity style={styles.backBtn}
        onPress={()=>{
          navigation.goBack()
        }}
        >
            <Image style={styles.backBtn} source={require("../../assets/back.png")}/>
        </TouchableOpacity>
      <Text style={styles.text}>New Post</Text>
    </View>
  )
}

export default Topbar

const styles = StyleSheet.create({
    conatiner:{
        alignItems:'center',
        justifyContent:'center',
        padding:10
    },
    text:{
        fontSize:25,
        fontWeight:'bold'
    },
    backBtn:{
        width:25,
        height:25,
        position:'absolute',
        left:10
    }
})