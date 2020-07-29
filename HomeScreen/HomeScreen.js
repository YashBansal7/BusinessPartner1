import * as React from 'react';
import { Text, View, Button,TouchableOpacity,StyleSheet } from 'react-native';
import SaleButton from './SaleButton';
import AttendanceButton from './/AttendanceButton';
import StockButton from './StockButton'
import ProductionButton from './ProductionButton';
import Header from './Header'
export default class HomeScreen extends React.Component {

  gotobuzzer=()=>{
    this.props.navigation.navigate('ProductionScreen')
  }

  render() {
    return (
            <View style={{flex:1 , alignItems:'center', justifyContent:'center',backgroundColor:'black'}}>
     <Header />
      <AttendanceButton />
      <SaleButton />
      <StockButton />
      
      <View style={{flex:1 , alignItems:'center', justifyContent:'center'}}>

      <TouchableOpacity style= {Styles.buzzer} onPress={()=>this.gotobuzzer ()}>
      <Text style = {Styles.buttonText}> Production </Text>
      </TouchableOpacity>

      </View>
    );
  
      </View>
    );
  }
}


const Styles = StyleSheet.create({
  buzzer:{
    backgroundColor:'black', alignItems:'center' , justifyContent:'center' , width:250 , height:100 ,  borderRadius:200
    ,borderColor:'aqua',borderWidth:5,marginTop:0,
  },
  buttonText:{
    color:'aqua' , fontSize:35 ,fontFamily:'Segoe Print' 
  }
})