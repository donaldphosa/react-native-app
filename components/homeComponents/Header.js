import { StyleSheet ,View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'





const Header = ({navigation}) => {
  return (
    <View style={Styles.container}>
        
        <TouchableOpacity >
        <View style={Styles.rightContainer}>
        <Image
          style={Styles.icon}
          source={require('../../assets/instagram.png')}
          />
            <Text style={Styles.text}>Instagram</Text>
            </View>
      </TouchableOpacity>
      <View style={Styles.rightContainer}>
        <TouchableOpacity 
        onPress={()=>{
          navigation.push('Poster')
        }}
        >
          <Image
          style={Styles.icon}
          source={require('../../assets/more.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
          style={Styles.icon}
          source={require('../../assets/heart.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={Styles.unread}>
                <Text style={Styles.unreadText}>11</Text>
            </View>
          <Image
          style={Styles.icon}
          source={require('../../assets/email.png')}
          />
        </TouchableOpacity>
        
      </View>
    </View>
  )
}

export default Header

const Styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:'space-between',
        padding:10,
    },
    text:{
        color:'black',
        fontSize:16,
        fontWeight:'bold',
        paddingLeft:10
    },
    rightContainer:{
        flexDirection:"row"
    },
    icon:{
        width:20,
        height:20,
        marginLeft:10,
       resizeMode:'contain'

    },
    unread:{
        backgroundColor:'#FF3250',
        position:'absolute',
        bottom:14,
        left:18,
        width:25,
        height:18,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center'
        
    },
    unreadText:{
        color:'white',
        fontSize:16,
        fontWeight:'bold'
    }
})