import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`
export const CloseModal = styled.TouchableOpacity`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0.5;
`
export const Main = styled.View`
    background-color: ${({theme}) => theme.colors.backgroundColor};
    width: 60%;
    border-radius: ${({theme}) => theme.borderRadius.xsm}px;
`
export const ItemContainer = styled.TouchableOpacity`
    width: 100%;
    padding: 5%;
    flex-direction: row;
`


type ItemProps = {
    selected: boolean
}
export const ItemSelectButton = styled.View<ItemProps>`
    border-width: 1px;
    border-color: ${({theme, selected}) => selected ? theme.colors.contrast : theme.colors.darkText};
    width: 10%;
    border-radius: ${({theme}) => theme.borderRadius.full}px;
    position: relative;
`
export const ItemSelected = styled.View<ItemProps>`
    background-color: ${({theme, selected}) => selected ? theme.colors.contrast : theme.colors.darkText};
    position: absolute;
    top: 15%;
    left: 12.9%;
    width: 70%;
    height: 70%;
    border-radius: ${({theme}) => theme.borderRadius.full}px;
`
export const ItemLabel = styled.Text<ItemProps>`
    color: ${({theme, selected}) => selected ? theme.colors.contrast : theme.colors.darkText};
    font-size: ${({theme}) => theme.fontSize.sm}px;
    margin-left: 2%;
`