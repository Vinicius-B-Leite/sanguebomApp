import React, { useState } from 'react';
import { FlatList } from 'react-native';
import Header from '../../components/Header';
import Post from '../../components/Post';
import PostsFilters from '../../components/PostsFilters';
import { PostType } from '../../types/PostType';
import * as S from './styles'

const Home: React.FC = () => {

  const [filterSelected, setFilterSelected] = useState('Recentes')
  const data: PostType[] = [
    {
      id: 'abc2',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
      created_at: new Date(),
      bannerURL: 'https://www.showmetech.com.br/wp-content/uploads//2021/02/capa-dog-1920x1024.jpg',
      owner_id: '123bbc',
      bloodType: 'A+',
      category: 'Jardim Imperial',
      owner: {
        name: 'NOME DO LUGAR',
        email: 'teste@teste.com',
        locale: 'rua tal do bairro tal',
        avatarURL: 'https://www.showmetech.com.br/wp-content/uploads//2021/02/capa-dog-1920x1024.jpg',
        uid: 'o2u4wqrkfafhqw',
        numberphone: '1199776655',
        serviceHours: '7hrs - 17hrs',
        daysOfWork: 'Seg - Sex'
      }
    },
  ]


  return (
    <S.Container>
      <Header />
      <PostsFilters onSelected={(filter) => setFilterSelected(filter)} filterSelected={filterSelected} />
      <FlatList
        data={filterSelected === 'Recentes' ? data : data.filter(post => post.category == filterSelected)}
        renderItem={({ item }) => <Post info={item} />}
      />
    </S.Container>
  )
}

export default Home;