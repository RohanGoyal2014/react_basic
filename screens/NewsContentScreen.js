import React, { Component } from 'react';
import { Text } from 'react-native';

class NewsContentScreen extends Component{

	constructor(props){
		super(props);
		const category = this.props.navigation.state.params.dataContent;
		console.log(category);
	}

	componentDidMount() {
		console.log("mounted");
	}

	componentWillUnmount() {
		console.log("unmounted");
	}

	static navigationOptions = {
		title : "News Detail",
		headerTintColor: '#fff',
    	headerStyle: {
      		backgroundColor: 'red'
    	},
	}
	
	render(){
		return(
			<Text>NewsContentScreen</Text>
			);
	}
}

export default NewsContentScreen;