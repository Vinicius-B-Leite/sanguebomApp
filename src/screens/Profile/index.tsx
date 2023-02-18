import React from 'react';
import { View } from 'react-native';
import Header from '../../components/Header';
import * as S from './styles'
import { AntDesign } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';




const Profile: React.FC = () => {
  const { colors, icons } = useTheme()
  return (
    <S.Container>

      <Header />
      <S.Avatar
        source={{ uri: 'https://www.showmetech.com.br/wp-content/uploads//2021/02/capa-dog-1920x1024.jpg' }}
      />

      <S.Username>klasfjakslfj</S.Username>

      <S.ItemContainer>
        <S.ItemBackgroundIcon>
          <AntDesign name="user" size={icons.vsm} color={colors.contrast} />
        </S.ItemBackgroundIcon>

        <S.ItemLabel>Nome de usuário</S.ItemLabel>
      </S.ItemContainer>

      <S.ItemContainer>
        <S.ItemBackgroundIcon>
          <MaterialIcons name="email" size={icons.vsm} color={colors.contrast} />

        </S.ItemBackgroundIcon>

        <S.ItemLabel>Endereço de email</S.ItemLabel>
      </S.ItemContainer>

      <S.ItemContainer>
        <S.ItemBackgroundIcon>
          <Ionicons name="sunny-outline" size={icons.vsm} color={colors.contrast} />
        </S.ItemBackgroundIcon>

        <S.ItemLabel>Trocar de tema</S.ItemLabel>
      </S.ItemContainer>

      <S.ItemContainer>
        <S.ItemBackgroundIcon>
          <Feather name="phone-call" size={icons.vsm} color={colors.contrast} />
        </S.ItemBackgroundIcon>

        <S.ItemLabel>Número de telefone</S.ItemLabel>
      </S.ItemContainer>

      <S.ItemContainer>
        <S.ItemBackgroundIcon>
          <Feather name="home" size={icons.vsm} color={colors.contrast} />
        </S.ItemBackgroundIcon>

        <S.ItemLabel>Endereço</S.ItemLabel>
      </S.ItemContainer>

      <S.ItemContainer>
        <S.ItemBackgroundIcon>
          <MaterialIcons name="logout" size={icons.vsm} color={colors.contrast} />
        </S.ItemBackgroundIcon>

        <S.ItemLabel>Sair da conta</S.ItemLabel>
      </S.ItemContainer>
    </S.Container>
  )
}

export default Profile;