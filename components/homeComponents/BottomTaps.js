import { View, Image, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'

export default function BottomTaps() {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
            <Image style={styles.icons} source={require('../../assets/home.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image style={styles.icons} source={require('../../assets/search.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image style={styles.icons} source={require('../../assets/reels.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image style={styles.icons} source={require('../../assets/bag.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{borderColor:'#ff8501',borderWidth:3,borderRadius:50}}>
            
        <Image style={{width:45,height:45,borderRadius:50,resizeMode:'center'}} source={require('../../assets/profile.jpg')}/>
        </View>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        bottom:0,
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:10,
        zIndex:88,
        backgroundColor:'white'
    },
    icons:{
        width:25,
        height:25,

    }
})