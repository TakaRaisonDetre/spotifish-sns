import React, {useContext} from 'react'
import {Text, Image, View,  TouchableOpacity, TouchableWithoutFeedback} from 'react-native';

import styles from './styles';
import {Song} from '../../types'
import {AppContext} from '../../AppContext'

export type SongListItemProps = {
    song :Song
}


const SongListItem = (props: SongListItemProps) =>{
 const {song } = props;

const {setSongId} = useContext(AppContext);

 const onPlay = ()=>{
    setSongId(song.id)
 }
    return (
        <TouchableOpacity onPress={onPlay}>
        <View style={styles.container}>
           
             
            <Image source = {{uri: props.song.imageUri}} style={styles.image}/>
           <View style={styles.RightContainer}> 
           <Text style={styles.title}>{song.title}</Text>
            <Text style={styles.artist}>{song.artist}</Text>
           </View>
  
            
        </View>
        </TouchableOpacity>
           
    )
}

export default SongListItem