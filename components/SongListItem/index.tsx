import React from 'react'
import {Text, Image, View} from 'react-native';

import styles from './styles';
import {Song} from '../../types'

export type SongListItemProps = {
    song :Song
}

const SongListItem = (props: SongListItemProps) =>{
 const {song } = props;
    return (
        <View style={styles.container}>
            <Image source = {{uri: props.song.imageUri}} style={styles.image}/>
           <View style={styles.RightContainer}> 
           <Text style={styles.title}>{song.title}</Text>
            <Text style={styles.artist}>{song.artist}</Text>
           </View>
        </View>
    )
}

export default SongListItem