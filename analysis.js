import React, {useEffect} from 'react';
import {View, Text, Pressable} from 'react-native';
import {styles} from './Styles';
import i18n from './languages/i18n';

// hook
import { useTranslation } from 'react-i18next';

const AnalysisPage = (props) => {

    const {t, i18n} = useTranslation();
    return (
        <View style={styles.container}>  

            <View style={styles.btnContainer}>

                <Pressable style={styles.button}
                    onPress =  { () => {
                        i18n.changeLanguage('en');
                    }} >
                    <Text style={[styles.betterText, { fontSize: 14, color: '#fff'}]} > English </Text>
                </Pressable>

                <Pressable style={styles.button} onPress =  { () => {
                    i18n.changeLanguage('hn');
                }} >
                    <Text style={[styles.betterText, { fontSize: 14, color: '#fff'}]}> हिन्दी </Text>
                </Pressable>

                <Pressable style={styles.button} onPress =  { () => {
                    i18n.changeLanguage('tm');
                }}>
                    <Text style={[styles.betterText, { fontSize: 14, color: '#fff'}]}> தமிழ் </Text>
                </Pressable>

                <Text style={[styles.betterText, {color:'#fff', fontWeight: 'bold'}]}> {t('welcome')} </Text>

            </View>
                
            <Text style={{color:'black', fontWeight: "bold", fontSize: 25, marginTop: 45, marginBottom: 15}}> {t('Analysis Page')} </Text>
            <Text style={[styles.infoGreen, {color:'#fff', backgroundColor:'#4169e1'}]}>{'\u2022' + ' '} {t('Wheat Crop requires a moisture content of around 20%, so we suggest you irrigate your field!')} </Text>
            <Text style={[styles.infoGreen, {color:'#fff', backgroundColor:'#4169e1'}]}>{'\u2022' + ' '} {t('Wheat Crop only requires a moisture content of around 20%,so we suggest you stop irrigation for a while!')} </Text>
            <Text style={[styles.infoGreen, {color:'#fff', backgroundColor:'#4169e1'}]}>{'\u2022' + ' '} {t('Wheat Crop is best suited to grow in temperatures of around 25 degrees, so your crop productivity will be limited!')} </Text>
            <Text style={[styles.infoGreen, {color:'#fff', backgroundColor:'#4169e1'}]}>{'\u2022' + ' '} {t('Wheat Crop is best suited to grow in temperatures of around 25 degrees, so your crop productivity is at its best!')} </Text>
            <Text style={[styles.infoGreen, {color:'#fff', backgroundColor:'#4169e1'}]}>{'\u2022' + ' '} {t('Crop is best suited to grow in Mositure of around 10, so your crop productivity is at its best!')} </Text>
        </View>
    ) 
}

export default AnalysisPage

