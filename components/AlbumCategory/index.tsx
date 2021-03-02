import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {Album} from '../../types'
import AlbumComponent from '../Album';
import styles from './styles'

export type AlbumCategoryProps = {
    title: string,
    albums :[Album],
}

const AlbumCategory =(props : AlubumCategoryProps) =>(
    <View style={styles.container}>
   <Text style={styles.title}>{props.title}</Text>

    <FlatList
    data ={props.albums}
    renderItem={({item})=><AlbumComponent album={item}/>}
    keyExtractor={(item)=>item.id}
    horizontal
    showsHorizontalScrollIndicator={false}
    />

    </View>
)

export default AlbumCategory