import React, { Component } from 'react';
import { Text,Button,View,StyleSheet,Image,ActivityIndicator } from 'react-native';

class SplashScreen extends Component{

	constructor(props){
		super(props);
		setInterval(
					()=>{
						props.navigation.navigate('List')	
					}
					,2000
				);
	}

	static navigationOptions = {
		header : null
	}

	render(){
		return(
			<View style={styles.MainContainer}>
				<Image source={require('../images/news.png')} style={{height:200,width:200}}/>
				<ActivityIndicator size="large" color="#0000ff" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
 
  MainContainer :
  {
      flex:1,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFAB00'
  }
 
});

export default SplashScreen;