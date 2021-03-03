import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
   container :{
     position:'absolute',
     bottom:79,
     backgroundColor:'#131313',
     width:'100%',
     borderWidth:2,
     borderColor:'black',
     
   },
   RightContainer:{
     flex:1,
     flexDirection:'row',
     justifyContent :'space-between'
   },
    image :{
      width:75,
      height:75,
      marginRight:10,
    },
    title :{
      color:'white',
      fontSize:15,
      fontWeight:'bold',
      margin:10,
    },
    artist :{
        color: 'lightgray',
        fontSize:10,
    },
    iconsContainer:{
      flexDirection:'row',
      alignItems:'center',
      width:100,
      justifyContent:'space-around'

    },
    nameContainer:{
       flexDirection:'row',
       alignItems:'center'
    },
    progress :{
      height:4,
     // width:'100%',
      backgroundColor: 'white'
    },
    row:{
      flexDirection:'row'
    }
})

export default styles