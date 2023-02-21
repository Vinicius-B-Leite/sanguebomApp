import { Dimensions } from "react-native"

const { height, width } = Dimensions.get('screen')

export const darkMode = {
    colors: {
        backgroundColor: '#fff',
        backgroundColorSecond: '#D4BFBF',
        contrast: '#F65353',
        darkText: '#959595',
        text: '#000',
        inputBackgroundColor: '#DC7878',
        questionBackgroundColor: '#FFF6F6',
        optionsBg: '#FBB1B1',
        formInputBg: '#F0F0F0'
    },
    icons: {
        big: width * 0.3,
        sm: width * 0.07,
        vsm: width * 0.06,
    },
    fontSize: {
        md: width * 0.06,
        xxxsm: width * 0.043,
        xxsm: width * 0.045,
        xsm: width * 0.05,
        sm: width * 0.035
    },
    borderRadius: {
        full: width,
        sm: width * 0.08,
        xsm: width * 0.03
    },
    vw: width,
    vh: height
}