import React, { Component } from 'react';
import { Text,Alert,BackHandler,StyleSheet,View,ActivityIndicator,FlatList,Image,TouchableHighlight } from 'react-native';
import ElevatedView from 'react-native-elevated-view';

class ListScreen extends Component{

	constructor(props){
		super(props);
		this.state={ isLoading: true }
	}

	componentDidMount() {
		this.backHandler = BackHandler.addEventListener('hardwareBackPressed',()=>{
			BackHandler.exitApp();
			return true;
		});
		return fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=cf486977c0f54d509ae860fea42cc405')
			.then((response) => response.json())
			.then((jsonResponse) => {
				this.setState({
					isLoading: false,
					dataSource: jsonResponse.articles
					}, function() {}
				);
			})
			.catch((error) => {
				console.error(error);
			});
	}

	componentWillUnmount() {
		this.backHandler.remove();
	}

	static navigationOptions = {
		title : "Top Headlines",
		headerTintColor: '#fff',
    	headerStyle: {
      		backgroundColor: '#FFAB00'
    	},
    	headerLeft : null
	}
	
	render(){

		if(this.state.isLoading) {
			return(

				<View style={styles.MainContainer}>
					<ActivityIndicator size="large" color="#0000ff" />
				</View>

			);
		}

		return(
			<View style={{flex: 1, backgroundColor: '#E0E0E0'}}>
        		<FlatList
          			data={this.state.dataSource}
          			renderItem={({item}) =>
          				<TouchableHighlight 
          					onPress={(event)=>{
          						const { navigate } = this.props.navigation;
                        		navigate('NewsContent', { dataContent: item });
                        	}} 
                        	style={{ flex: 1,flexDirection: 'row',marginTop: 8,marginLeft: 8,marginRight: 8,marginBottom:2 }}
                        	underlayColor='#0000ff'> 
	          				<ElevatedView
	          					elevation={6}
	          					style={{ flex: 1,flexDirection: 'row',padding:6 }}
	        				>
		        				<Image source={{uri:item.urlToImage}} style={{width: 60, height: 60, marginRight: 8}}/>
		        				<Text style={{flex:1, flexDirection:'row'}}>{item.title}</Text>
        					</ElevatedView>
        				</TouchableHighlight>
          			}
          			keyExtractor={(item, index) => index.toString()}
        		/>

      		</View>
      		

		);
	}
}

export default ListScreen;

const styles = StyleSheet.create({
 
  MainContainer :
  {
      flex:1,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF'
  }
 
});