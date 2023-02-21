import React, { useState } from 'react';
import { View } from 'react-native';
import * as S from './styles'
import { Entypo } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';


const CreatePost: React.FC = () => {
  const { colors, icons } = useTheme()
  const [imageURL, setImageURL] = useState<string | undefined>('https://www.showmetech.com.br/wp-content/uploads//2021/02/capa-dog-1920x1024.jpg')

  const handlePickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageURL(result.assets[0].uri);
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>{'<   '} Criar post</S.Title>
        <S.DoneBtn>
          <S.DoneTxt>concluir</S.DoneTxt>
        </S.DoneBtn>
      </S.Header>

      <S.PickImageBtn onPress={handlePickImage}>
        {
          imageURL ? <S.Banner source={{ uri: imageURL }} /> :
            <Entypo name="image" size={icons.big} color={colors.darkText} />
        }
      </S.PickImageBtn>

      <S.Form>
        <S.ROw>
          <S.BloodTypeSelect>
            <S.BloodTypeLabel>Tipos sanguíneos</S.BloodTypeLabel>
            <AntDesign name="caretdown" size={icons.vsm} color={colors.text} />
          </S.BloodTypeSelect>

          <S.HoursServiceInput
            placeholder='7hrs - 17hrs'
            placeholderTextColor={colors.darkText}
            numberOfLines={1}
          />
        </S.ROw>

        <S.SectoinTitle>Endereço</S.SectoinTitle>

        <S.ROw>
          <S.NumberPlace
            width='17%'
            placeholder='102'
            placeholderTextColor={colors.darkText}
          />
          <S.Street
            width='47%'
            placeholder='Rua Sei lá qual'
            placeholderTextColor={colors.darkText}
          />
          <S.Neightboard
            width='27%'
            placeholder='Jardim Imperial'
            placeholderTextColor={colors.darkText}
          />
        </S.ROw>

        <S.Description
          textAlign='left'
          textAlignVertical='top'
          placeholder='Descrição'
          placeholderTextColor={colors.darkText}
        />
      </S.Form>
    </S.Container>
  )
}

export default CreatePost;