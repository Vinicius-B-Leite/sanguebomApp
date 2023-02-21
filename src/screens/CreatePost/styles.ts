import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
`
export const Header = styled.View`
    background-color: ${({ theme }) => theme.colors.contrast};
    padding: 5%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.backgroundColor};
    font-size: ${({ theme }) => theme.fontSize.md}px;
`
export const DoneBtn = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    flex-direction: row;
    width: 20%;
    justify-content: center;
    align-items: center;
    height: 100%;
    border-radius: ${({ theme }) => theme.borderRadius.sm}px;
`
export const DoneTxt = styled.Text`
    color: ${({ theme }) => theme.colors.contrast};
    font-size: ${({ theme }) => theme.fontSize.sm}px;
`

export const PickImageBtn = styled.TouchableOpacity`
    align-self: center;
    width: 90%;
    height: 30%;
    margin-top: 5%;
    align-items: center;
    justify-content: center;
`
export const Banner = styled.Image`
    width: 100%;
    height: 100%;
`
export const Form = styled.View`
    padding: 5%;
    flex: 1;
`
export const ROw = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 3% 0%;
`
export const BloodTypeSelect = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.formInputBg};
    padding: 3%;
`
export const BloodTypeLabel = styled.Text`
    margin-right: 2%;
`
export const HoursServiceInput = styled.TextInput`
    background-color: ${({ theme }) => theme.colors.formInputBg};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSize.sm}px;
    flex: 1;
    margin-left: 4%;
    padding:  2% 4%;
`
export const SectoinTitle = styled.Text`
    font-size: ${({ theme }) => theme.fontSize.xxxsm}px;
    margin-left: 5%;
    color: ${({ theme }) => theme.colors.text};
`

type NumberPlaceProps = { width: number | string }
export const NumberPlace = styled.TextInput<NumberPlaceProps>`
    width: ${({ theme, width }) => width};
    background-color: ${({theme}) => theme.colors.formInputBg};
    margin: 0% 2%;
    padding: 2%;
`
export const Street = styled(NumberPlace)``
export const Neightboard = styled(NumberPlace)``
export const Description = styled.TextInput`
    background-color: ${({theme}) => theme.colors.formInputBg};
    width: 100%;
    height: 55%;
    padding: 2%;
    color: ${({theme}) => theme.colors.text};
    font-size: ${({theme}) => theme.fontSize.xxsm}px;
`