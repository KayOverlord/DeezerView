import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
import get from '../api/get';
import {artist, search} from '../api/routes';
import {
  Card,
  Wrapper,
  StyleInput,
  ItalicText,
  NormalText,
  Button,
  Title,
} from '../styles/StyledComponents';
import SVGImg from '../assets/search.svg';

const HomeScreen = ({navigation}: any) => {
  const [artistName, setArtistName] = useState('');
  const [data, setData] = useState<any>([]);
  const [progress, setProgress] = useState(false);

  const getArtists = async () => {
    setProgress(true);
    setArtistName('');
    if (artistName.trim().length > 0) {
      let newData: any[] = [];
      let size = 0;
      get(search(artistName)).then(result => {
        size = result.data.length;
        result.data.forEach((item: {artist: {id: string}}) => {
          get(artist(item.artist.id)).then(result => {
            newData.push(result);
            if (size === newData.length) {
              const unique = [...new Map(newData.map(m => [m.id, m])).values()];
              setData(unique);
              setProgress(false);
            }
          });
        });
      });
    }
  };

  const renderItem = ({item}: any) => {
    return (
      <Card onPress={() => navigation.navigate('Artist', {artist: item})}>
        <NormalText>{item.name}</NormalText>
        <Image
          style={{width: 320, height: 300}}
          source={{uri: `${item.picture_xl}`}}
        />
        <NormalText>fans: {item.nb_fan}</NormalText>
      </Card>
    );
  };

  return (
    <SafeAreaView>
      <Wrapper style={{justifyContent: 'flex-start'}}>
        <Title style={{fontSize: 20}}>DeezerView</Title>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '1%',
          }}>
          <StyleInput
            placeholder="Search that artist"
            onChangeText={v => setArtistName(v)}
            value={artistName}
            onSubmitEditing={getArtists}
          />
          <Button
            style={{justifyContent: 'center', alignItems: 'center'}}
            onPress={getArtists}>
            <SVGImg width={25} height={25} />
          </Button>
        </View>
        {progress == false ? (
          <>
            {data.length > 0 ? (
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item: any) => item.id}
              />
            ) : (
              <ItalicText>You haven't searched yet!</ItalicText>
            )}
          </>
        ) : (
          <ActivityIndicator color={'black'} size={'small'} />
        )}
      </Wrapper>
    </SafeAreaView>
  );
};

export default HomeScreen;
