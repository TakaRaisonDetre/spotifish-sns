import * as React from 'react';
import {useEffect, useState} from 'react'
import { StyleSheet, Text, View , FlatList  } from 'react-native';

import Album from '../components/Album/'
import AlbumCategory from '../components/AlbumCategory'
import albumCategories from '../data/albumCategories'
import {listAlbumCategorys} from '../src/graphql/queries';

// aws
import {API, graphqlOperation} from 'aws-amplify'

export default function HomeScreen() {

  const [categories, setCategories ] = useState([]);

  useEffect(()=>{
     const fetchAlbumCategories = async () =>{
       try {
        const data = await API.graphql(graphqlOperation(listAlbumCategorys));
        setCategories(data.data.listAlbumCategorys.items);
       }catch(e) {
         console.log(e);
       }
     }

     fetchAlbumCategories();
  },[])


  return (
    <View style={styles.container}>
 
    <FlatList
    data={categories}
    keyExtractor={(item:any)=>item.id}
    renderItem={({item})=>(
    <AlbumCategory 
       title={item.title} 
      albums={item.albums.items}
     
    />
    )}
   
    />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
