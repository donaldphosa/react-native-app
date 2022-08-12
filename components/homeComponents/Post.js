import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Post = () => {
  return (
        
<View style={{borderColor:'gray', borderBottomWidth:0.5}}>
    <View style={styles.topbar}>
            <View style={styles.leftP}>
            <View style={styles.profileWrapp}>
                <Image style={styles.profile} source={require('../../assets/precious.jpg')}/>
            </View>
            <Text style={{marginLeft:5,fontWeight:'bold',fontSize:16}}>PreciousM</Text>
        </View>
            <View style={styles.options}>
           <View style={styles.dots}></View>
           <View style={styles.dots}></View>
           <View style={styles.dots}></View>
            </View>
        </View>
       <View style={styles.postPicWrap}>
        <Image style={styles.postPic} source={require('../../assets/precious.jpg')}/>
        {/* post bottom start */}
        <View style={styles.post}>
            <View style={styles.upperReactions}>
             <View style={styles.postReactions}>
                    <Image style={styles.icons} source={require('../../assets/heart.png')}/>
                    <Image style={styles.icons} source={require('../../assets/comment.png')}/>
                    <Image style={styles.icons} source={require('../../assets/send.png')}/>
                </View>
                <Image style={styles.icons} source={require('../../assets/bookmark.png')}/>
            </View>
            <View style={styles.padd}>
            <Text>7,715 likes</Text>
            <Text style={{fontSize:16}}><Text style={{fontSize:16,fontWeight:"bold"}}>donaldPhosa</Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non sagittis felis. Aliquam at enim eu </Text>
            <TouchableOpacity>
                <Text style={{color:'gray'}}>View all 60 comments</Text>
            </TouchableOpacity>
            </View> 
        </View>
        {/* post bottom ends */}
        </View> 
    </View>
        

  )
}

export default Post

const styles = StyleSheet.create({
    post:{
        paddingBottom:10
    },
  topbar:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingTop:5
  },
  profile:{
    width:55,
    height:55,
    borderRadius:50,
    resizeMode:'contain'
  },
  profileWrapp:{
    borderRadius:50,
    borderWidth:3,
    borderColor:'#ff8501'
  },
  leftP:{
    flexDirection:"row",
    alignItems:'center'
  },
  dots:{
    backgroundColor:'black',
    width:7,
    height:7,
    borderRadius:50,
    marginRight:3
  },
  options:{
    flexDirection:'row'
  },
  postPic:{
    width:'100%',
    height:400,
    resizeMode:'cover'
  },
  postPicWrap:{
    paddingTop:5,
    width:'100%',
  },
  upperReactions:{
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row',
  },
  postReactions:{
    flexDirection:'row',
    alignItems:'center',
    padding:10
  },
  icons:{
    width:25,
    height:25,
    marginRight:10
  },
  padd:{
    paddingHorizontal:10
  }
})