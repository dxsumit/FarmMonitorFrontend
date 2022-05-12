// conteains styles..
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({

    button: {
      margin: 7,
      width: 100,
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 20,
      elevation: 3,
      // backgroundColor: '#b3446c',
      
      backgroundColor: '#00b4d8',
    },

    betterText: {
        color: "#36454f",
        fontSize: 17,
        fontFamily: 'Roboto',
    },

    btnContainer: {
      position: 'absolute',
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: 'center',
      // marginBottom: 30,
      top: 80,
    },

    container: {
      flex: 1,
      // backgroundColor: '#fff5ee',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    card: {
      opacity: 1,
      width: 150,
      borderRadius: 10,
      elevation: 10,
      backgroundColor: 'rgba(40,204,113, 0.7)',
      shadowOffset: {width: 2, height: 2},
      shadowColor: '#333',
      shadowOpacity: 0.5,
      shadowRadius: 2,
      marginHorizontal: 4,
      marginVertical: 10,
      paddingVertical: 30,
      paddingHorizontal: 10,
      alignItems: 'center',
    },

    cardContent: {
      color: "#fff",
      fontSize: 15,
      fontFamily: 'Roboto',
      marginHorizontal: 5,
      paddingVertical: 8,
      
      textAlign: 'center',
      lineHeight: 18,
      
    },

    cardContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: 'center',
    },

    cardOuterContainer: {
      flex: 1, 
      justifyContent:'center',
    },

    infoGreen: {
      fontSize: 14,
      paddingHorizontal: 23,
      width: '100%',
      marginVertical: 5,
      width: 350,
      borderColor: 'rgba(60,179,113, 0.5)',
      backgroundColor: 'rgba(60,179,113, 0.6)',
      borderWidth: 0.5,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },

    image: {
      flex: 1,
      justifyContent: "center"
    },

    infoRed: {
      fontSize: 14,
      paddingHorizontal: 23,
      width: '100%',
      marginVertical: 5,
      width: 350,
      borderColor: 'rgba(207, 0, 15, 0.5)',
      backgroundColor: 'rgba(207, 0, 15, 0.5)',
      borderWidth: 0.5,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    }

  
});