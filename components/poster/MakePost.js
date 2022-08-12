import { StyleSheet, Text, View,Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const MakePost = () => {
  return (
    <View style={styles.center}>
    <View style={styles.container}>
        <TouchableOpacity style={styles.imageConatainer}>
            <Image source={require('../../assets/imageIcon.png')}/>
      </TouchableOpacity>
        <TextInput style={styles.input} placeholder='write a caption' multiline={true} numberOfLines={5}/>
    </View>
    <View style={{borderBottomWidth:0.5,borderColor:'#ccc',width:'100%',paddingLeft:15}}> 
        <TextInput style={{height:50}} placeholder='enter image url'/>
    </View>
    <TouchableOpacity style={{marginVertical:10}}>
       
            <Text style={{fontSize:16}}>Share</Text>
       
    </TouchableOpacity>
    </View>
  )
}

export default MakePost

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        paddingHorizontal:15,
        borderColor:'#ccc',
        marginVertical:3,
        paddingBottom:10,
       
    },
    imageConatainer:{
        backgroundColor:'gray',
        width:100,
        height:100,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center'
    },
    input:{
        width:'70%',
        height:100,
        alignItems:'flex-start',
    },
    center:{
        alignItems:'center',
        

    }
})