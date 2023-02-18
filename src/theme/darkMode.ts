import { Dimensions } from "react-native"

const { height, width } = Dimensions.get('screen')

export const darkMode = {
    colors: {
        backgroundColor: '#fff',
        backgroundColorSecond: '#D4BFBF',
        contrast: '#F65353',
        darkText: '#959595',
        text: '#000',
    },
    icons: {
        sm: width * 0.07
    },
    fontSize: {
        md: width * 0.06,
        xsm: width * 0.05,
        sm: width * 0.035
    },
    borderRadius: {
        full: width
    },
    vw: width,
    vh: height
}