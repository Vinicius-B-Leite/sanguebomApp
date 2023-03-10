import styled from "styled-components/native";

export const Container = styled.View`
    width: ${({ theme }) => theme.vw}px;
    margin: ${({theme}) => theme.vh * 0.03}px 0px;
`
export const Header = styled.View`
    flex-direction: row;
    padding: 0% 5%;
    height: ${({ theme }) => theme.vh * 0.05}px;
    align-items: center;
`
export const Avatar = styled.Image`
    width: 12%;
    height: 100%;
    border-radius: ${({ theme }) => theme.borderRadius.full}px;
    `
export const Username = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSize.xsm}px;
    margin-left: 3%;
    `
export const Banner = styled.Image`
    margin-top: 2%;
    width: 100%;
    height: ${({ theme }) => theme.vh * 0.3}px;
`
export const Footer = styled.View`
    padding: 0% 5%;
`
export const Deatils = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 2% 0%;
`
export const ComunText = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSize.sm}px;
`
export const Description = styled(ComunText)``
