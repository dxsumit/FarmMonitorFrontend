import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './Styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import i18n from './languages/i18n';

// hook
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

const renderIcon = (text, text2) => {

    const {t, i18n} = useTranslation();
    if(text === t('Air Temperature')) 
        return [ <Text key={`Temperature-1`} style={styles.cardContent}> <MaterialCommunityIcons name="temperature-celsius" color = "#ee6055" size={30} /> </Text>,
                <Text key={`Temperature-2`} style={styles.cardContent}> {text} </Text> ]

    else if(text === t('Air Humidity')) 
        return [ <Text key={`Humidity-1`} style={styles.cardContent}> <MaterialCommunityIcons name="air-humidifier" color = "#ee6055" size={30} /> </Text>,
                <Text key={`Humidity-2`} style={styles.cardContent}> {text} </Text> ]

    else if(text === t('Soil Moisture')) 
        return [ <Text key={`Moisture-1`} style={styles.cardContent}> <MaterialCommunityIcons name="water-percent" color = "#ee6055" size={30} /> </Text>,
                <Text key={`Moisture-2`} style={styles.cardContent}> {text} </Text> ]

    else if(text === t('Data Analysis'))
        return [ <Text key={`Analysis-1`} style={styles.cardContent}> <MaterialCommunityIcons name="information-outline" color = "#ee6055" size={30} /> </Text>,
                <Text key={`Analysis-2`} style={styles.cardContent}> {text} </Text> ]
}

const Cards = (props) => (
    <TouchableOpacity onPress={() => {
        if(props.content.Text1 == t('Air Temperature'))
            props.navigation.push('Temperature Data')
        else if(props.content.Text1 == t('Air Humidity'))
            props.navigation.push('Humidity Data')
        else if(props.content.Text1 == t('Data Analysis'))
            props.navigation.push('Analysis');
        else if(props.content.Text1 == t('Soil Moisture'))
            props.navigation.push('Soil Moisture');
    }}>
        
        <View style={styles.card}>
            {renderIcon(props.content.Text1, props.content.Text2)}
        </View>

    </TouchableOpacity>
)

export default Cards

