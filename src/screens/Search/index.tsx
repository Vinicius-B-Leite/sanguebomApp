import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as S from './styles'
import { AntDesign } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { LocationObjectCoords } from 'expo-location/build/Location.types';


const Search: React.FC = () => {

  const { colors, icons } = useTheme()
  const [location, setLocation] = useState<LocationObjectCoords | null>(null)
  const markers = [
    {
      coordinate: {
        latitude: -23.1164444,
        longitude: -46.5821119
      },

      title: 'Teste',
      description: 'salkfjaskljflkasjflkasjflaskjfkasljfaskl',
      pinColor: '#04e04e',
    }
  ]


  useEffect(() => {
    requestForegroundPermissionsAsync().then(async ({ granted }) => {
      if (granted) {
        const { coords } = await getCurrentPositionAsync()
        console.log("🚀 ~ file: index.tsx:20 ~ requestForegroundPermissionsAsync ~ coords", coords)
        setLocation(coords)
      }
    })
  }, [])

  return (
    <S.Container>
      <S.Header>
        <S.GoBack>
          <AntDesign name="arrowleft" size={icons.sm} color={colors.backgroundColor} />
        </S.GoBack>
        <S.Input
          placeholder='Pesquise um bairro'
          placeholderTextColor={colors.backgroundColorSecond}
        />
      </S.Header>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: location?.latitude || -23.1184444,
          longitude: location?.longitude || -46.5811119,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05
        }}>

        {
          markers.map(mark => (
            <Marker
              key={mark.title}
              coordinate={{
                latitude: mark.coordinate.latitude,
                longitude: mark.coordinate.longitude,
              }}
              title={mark.title}
              description={mark.description}
              pinColor={mark.pinColor}
            />
          ))
        }

        <Marker
          coordinate={{
            latitude: location?.latitude || -23.1184444,
            longitude: location?.longitude || -46.5811119,
          }}
          title='Você'
          description='Você está localizado aqui'
          pinColor='#45e45e'
        />

      </MapView>
    </S.Container >
  )
}

export default Search;