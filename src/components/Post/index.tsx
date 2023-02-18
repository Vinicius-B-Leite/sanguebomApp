import React from 'react';
import { View } from 'react-native';
import { PostType } from '../../types/PostType';
import * as S from './style';



type PostProps = {
    info: PostType
}

const Post: React.FC<PostProps> = ({ info }) => {
    return (
        <S.Container>
            <S.Header>
                <S.Avatar source={{ uri: info.bannerURL }} />
                <S.Username>{info.owner.name}</S.Username>
            </S.Header>

            <S.Banner source={{ uri: info.owner.avatarURL }} />

            <S.Footer>
                <S.Deatils>
                    <S.ComunText>{info.owner.daysOfWork}</S.ComunText>
                    <S.ComunText>{info.owner.serviceHours}</S.ComunText>
                    <S.ComunText>1 dia atrás</S.ComunText>
                </S.Deatils>

                <S.Description numberOfLines={4}>{info.description}</S.Description>
            </S.Footer>
        </S.Container>
    )
}

export default Post;