import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
   container :{
     flexDirection:'row',
     margin:10,
   },
   RightContainer:{
      justifyContent:'space-around',
      marginLeft:10,
   },
    image :{
      width:75,
      height:75,
    },
    title :{
      color:'white',
      fontSize:20,
      fontWeight:'bold'
    },
    artist :{
        color: 'lightgray',
        fontSize:15,
    }
})

export default styles