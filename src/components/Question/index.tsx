import React, { useState } from 'react';
import { QuestionType } from '../../types/QuestionType';
import * as S from './style'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';




type QuestionProps = {
    item: QuestionType
}

const Question: React.FC<QuestionProps> = ({ item }) => {
    const [descriptionVisible, setDescriptionVisible] = useState(false)

    return (
        <S.Container>
            <S.Header>
                <S.Question>{item.question}</S.Question>
                <S.OpenDescription onPress={()  => setDescriptionVisible(!descriptionVisible)}>
                    {
                        descriptionVisible ?
                            <AntDesign name="minus" size={24} color="black" />
                            :
                            <Ionicons name="add-outline" size={24} color="black" />

                    }
                </S.OpenDescription>
            </S.Header>
            {descriptionVisible && <S.Description>{item.answer}</S.Description>}
        </S.Container>
    )
}

export default Question;