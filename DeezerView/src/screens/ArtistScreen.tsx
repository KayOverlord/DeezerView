import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import get from '../api/get';
import {artist} from '../api/routes';
import {
  Card,
  ItalicText,
  NormalText,
  Title,
  Wrapper,
} from '../styles/StyledComponents';

const ArtistScreen = ({route, navigation}: any) => {
  const {artist_info} = route.params;
  const [message, setMessage] = useState('Loading...');
  const [trackData, setTrackData] = useState<any>([]);
  const [albumsData, setAlbumsData] = useState<any>([]);

  const getTracks = async () => {
    await get(artist(artist_info.id + '/top'))
      .then(result => {
        const unique = [
          ...new Map(result.data.map((m: {id: any}) => [m.id, m])).values(),
        ];
        return setTrackData(unique);
      })
      .catch(err => console.log(err));
  };

  const getAlbums = async () => {
    await get(artist(artist_info.id + '/albums'))
      .then(result => {
        const unique = [
          ...new Map(result.data.map((m: {id: any}) => [m.id, m])).values(),
        ];
        return setAlbumsData(unique);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    navigation.setOptions({
      title: artist_info.name,
    });
    getTracks();
    getAlbums();
  }, [artist_info]);

  const renderTrackItem = ({item}: any) => {
    return (
      <Card style={{width: 250, marginHorizontal: 1}}>
        <NormalText numberOfLines={1} ellipsizeMode="tail">
          {item.title}
        </NormalText>
        <NormalText>rank: {item.rank}</NormalText>
      </Card>
    );
  };

  const renderAlbumItem = ({item}: any) => {
    return (
      <Card style={{width: 250, height: 200, margin: 1}}>
        <NormalText>{item.release_date}</NormalText>
        <Image
          style={{width: 240, height: 130}}
          source={{uri: `${item.cover_xl}`}}
        />
        <NormalText numberOfLines={2} ellipsizeMode="tail">
          rank: {item.title}
        </NormalText>
      </Card>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <Wrapper style={{justifyContent: 'flex-start', height: '100%'}}>
          <Image
            style={{width: '100%', height: 300}}
            source={{uri: `${artist_info.picture_xl}`}}
          />
          <NormalText style={{fontSize: 15}}>
            fans: {artist_info.nb_fan}
          </NormalText>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              marginBottom: '1%',
              height: 95,
              paddingHorizontal: 2,
            }}>
            <Title style={{fontSize: 20}}>Top 5 tracks</Title>
            {trackData.length > 0 ? (
              <FlatList
                data={trackData}
                renderItem={renderTrackItem}
                keyExtractor={(item: any) => item.id}
                horizontal
              />
            ) : (
              <ItalicText style={{fontSize: 10}}>{message}</ItalicText>
            )}
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              marginBottom: '2%',
              paddingHorizontal: 2,
            }}>
            <Title style={{fontSize: 20}}>Albums</Title>
            {albumsData.length > 0 ? (
              <FlatList
                data={albumsData}
                renderItem={renderAlbumItem}
                keyExtractor={(item: any) => item.id}
                horizontal
              />
            ) : (
              <ItalicText style={{fontSize: 10}}>{message}</ItalicText>
            )}
          </View>
        </Wrapper>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ArtistScreen;
