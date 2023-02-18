import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    align-items: center;
`
export const Avatar = styled.Image`
    width: 35%;
    height: 22%;
    border-radius: ${({ theme }) => theme.borderRadius.full}px;
    margin-top: 5%;
`
export const Username = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSize.xxxsm}px;
`
export const ItemContainer = styled.View`
    background-color: ${({ theme }) => theme.colors.questionBackgroundColor};
    width: 90%;
    margin: 2% 0;
    flex-direction: row;
    height: 7%;
    align-items: center;
`
export const ItemBackgroundIcon = styled.View`
    background-color: ${({ theme }) => theme.colors.optionsBg};
    flex-direction: row;
    align-items: center;
    width: 9%;
    border-radius: ${({theme}) => theme.borderRadius.full}px;
    justify-content: center;
    height: 70%;
`
export const ItemLabel = styled.Text`
    margin-left: 2%;
    font-size: ${({theme}) => theme.fontSize.sm}px;
    color: ${({theme}) => theme.colors.text};
`
