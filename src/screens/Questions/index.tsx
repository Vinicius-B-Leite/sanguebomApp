import React from 'react';
import { FlatList } from 'react-native';
import Header from '../../components/Header';
import Question from '../../components/Question';
import { QuestionType } from '../../types/QuestionType';
import * as S from './styles'

const questions: QuestionType[] = [
  {
    question: 'Sei la oq mas pode fazer tal coisa antes de doar a poha do sangue?',
    answer: 'Sim, nao sakfjaskfkashgjçkahdsgjklhadsjklghjkadsgadhghjkdhgjklahljkhajksdg'
  },
  {
    question: 'Sei la oq mas pode fazer tal coisa antes de doar a poha do sangue?',
    answer: 'Sim, nao sakfjaskfkashgjçkahdsgjklhadsjklghjkadsgadhghjkdhgjklahljkhajksdg'
  },
  {
    question: 'Sei la oq mas pode fazer tal coisa antes de doar a poha do sangue?',
    answer: 'Sim, nao sakfjaskfkashgjçkahdsgjklhadsjklghjkadsgadhghjkdhgjklahljkhajksdg'
  },
  {
    question: 'Sei la oq mas pode fazer tal coisa antes de doar a poha do sangue?',
    answer: 'Sim, nao sakfjaskfkashgjçkahdsgjklhadsjklghjkadsgadhghjkdhgjklahljkhajksdg'
  },
  {
    question: 'Sei la oq mas pode fazer tal coisa antes de doar a poha do sangue?',
    answer: 'Sim, nao sakfjaskfkashgjçkahdsgjklhadsjklghjkadsgadhghjkdhgjklahljkhajksdg'
  },
]

const Questions: React.FC = () => {
  return (
    <S.Container>
      <Header />
      <FlatList
      contentContainerStyle={{padding:  '5%'}}
        data={questions}
        renderItem={({ item }) => <Question item={item} />}
      />
    </S.Container>
  )
}

export default Questions;