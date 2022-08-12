import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const Stories = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.story}>
       <View style={styles.picWrap}> 
        <Image style={styles.storypic} source={require('../../assets/profile.jpg')}/>
        </View>
        <Text style={{fontSize:12,fontWeight:'bold'}}>donaldPhosa</Text>
      </View>
      <View style={styles.story}>
       <View style={styles.picWrap}> 
        <Image style={styles.storypic} source={require('../../assets/profile.jpg')}/>
        </View>
        <Text style={{fontSize:12,fontWeight:'bold'}}>donaldPhosa</Text>
      </View>
      <View style={styles.story}>
       <View style={styles.picWrap}> 
        <Image style={styles.storypic} source={require('../../assets/profile.jpg')}/>
        </View>
        <Text style={{fontSize:12,fontWeight:'bold'}}>donaldPhosa</Text>
      </View>
      <View style={styles.story}>
       <View style={styles.picWrap}> 
        <Image style={styles.storypic} source={require('../../assets/profile.jpg')}/>
        </View>
        <Text style={{fontSize:12,fontWeight:'bold'}}>donaldPhosa</Text>
      </View>
      <View style={styles.story}>
       <View style={styles.picWrap}> 
        <Image style={styles.storypic} source={require('../../assets/profile.jpg')}/>
        </View>
        <Text style={{fontSize:12,fontWeight:'bold'}}>donaldPhosa</Text>
      </View>
      </ScrollView>
    </View>
  )
}

export default Stories

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        padding:10, 
        borderBottomWidth:0.5,
        borderColor:'gray'
        
    },
    story:{
      alignItems:'center',
      justifyContent:'center',
      margin:5
    },
    storypic:{
      width:60,
      height:60,
      borderRadius:50,
      
    },
    picWrap:{
      borderWidth:3,
      borderRadius:50,
      borderColor:'#ff8501'

    }

})