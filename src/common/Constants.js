import { Dimensions } from 'react-native';
// Constants file
const Constants = {
    App: {
        Name: 'Calculator App',
    },
    Screen: {
        Home: 'Home',
        App: 'App',
        Startup: 'Startup',
        PlanDetail: 'PlanDetail'
    },
    Preferences: {
        User: 'user',
    },
    FontFamily: {
        // PoppinsBlack: 'Poppins-Black',
    },
    Ratio: {
        Width: Dimensions.get("screen").width,
        Height: Dimensions.get("screen").height
    }
}

export default Constants;
