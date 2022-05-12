import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {BarChart} from "react-native-chart-kit";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {styles} from './Styles';

import i18n from './languages/i18n';
const screenWidth = Dimensions.get("window").width;

// firebase 
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './config';
import { getDatabase, ref, child, get } from "firebase/database";

const fireBaseApp = initializeApp(firebaseConfig);
const dbRef = ref(getDatabase());


const chartConfig = {
    backgroundColor: '#fff',
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#E2DFD2",
    backgroundGradientToOpacity: 0.3,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 1, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional

    propsForDots: {
        r: "2",
      }
};


export default class Moisture extends React.Component {
    state = {
        moistureData: null,
    }        


    componentDidMount() {


        get(child(dbRef, `UsersData/qCr7j5Ffaba41ukIQP1IHgVDW6R2/readings`)).then((snapshot) => {
            if (snapshot.exists()) {
            //   console.log(snapshot.val());
                const randomValue = Object.values(snapshot.val());
                let moistData = [];
                randomValue.forEach((e) => {
                    if(e.moisture !== "nan"){
                        moistData = [...moistData, parseInt(e.moisture)];
                        if(moistData.length > 75)
                            moistData.shift()
                    }
                });

                this.setState({moistureData: moistData});
        
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
        });
    }


    // shwing data color based on color..
    renderTextInfo() {

        let dataArr = [];
        let count = 0;
        this.state.moistureData.slice(-5).map(i => {

            if(Math.abs(i)<15 || Math.abs(i)>20)
                dataArr = [...dataArr, <Text key={`abnormal-${count++}`} style={[styles.infoRed, {color:'#fff'}]}>{'\u2022' + ' '} {i}, Current Moisture Data is above threshold.</Text>];
            else 
                dataArr = [...dataArr, <Text key={`optimal-${count++}`} style={[styles.infoGreen, {color:'#fff'}]} >{'\u2022' + ' '} {i}, Current Moisture Data is optimal for crop.</Text>];

        })

        return dataArr;
    }

    render() {
        if(this.state.moistureData) {
            const data = {
                labels: ["15:20", "15:40", "16:00", "16:20", "16:40", "17:00", "17:20", "17:40"],
                datasets: [
                    {
                    data: this.state.moistureData,
                    color: (opacity = 1) => `rgba(3, 138, 255,  ${opacity})`, // optional
                    strokeWidth: 1 // optional
                    }
                ],
                legend: ["Moisture Data"] // optional
            };

            return (
                <View style={styles.container}>  
                    <BarChart
                    data={data}
                    width={screenWidth}
                    height={280}
                    chartConfig={chartConfig} 
                    bezier />

                    { this.renderTextInfo() }
                </View>
            )
        
        } else {
            return (
                <View style={styles.container}>
                    {/* <Text style={[styles.betterText, {color: "#f66"}]}> Loading... </Text> */}
                    <MaterialCommunityIcons name="circle-slice-5" color = "#ee6055" size={45} />
                </View>
            )
        }

  }
}




