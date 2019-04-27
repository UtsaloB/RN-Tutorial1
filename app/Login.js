import React, {Component} from 'react';
import{View, StyleSheet,Image,TextInput,Button,TouchableOpacity,Text} from 'react-native'

const pup = 'https://static.scientificamerican.com/sciam/cache/file/D059BC4A-CCF3-4495-849ABBAFAED10456_source.jpg?w=590&h=800&526ED1E1-34FF-4472-B348B8B4769AB2A1';


export default class Login extends Component {

    constructor (props){
        super(props)
        
        this.state={
            username: '',
            password: ''
        }
    }

    handleLoginButton(){
        console.log("Username is",this.state.username)
        console.log("Username is",this.state.password)
    }

    render(){
        return(
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{uri: pup}}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    onChangeText={(text)=> this.setState({username: text})}
                       
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}    
                    onChangeText={(text)=> this.setState({password: text})} 
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.handleLoginButton()}
                >
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20
    },
    image:{
        width: '50%',
        height: 250,
        resizeMode: 'center',
        marginBottom: 10
    },
    input:{
        width: '100%',
        height: 50,
        marginTop: 10,
        borderColor: 'grey',
        borderWidth: 2,
        fontSize: 16
    },
    button:{
        width:'100%',
        height: 50,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },
    text:{
        fontSize: 20,
        alignItems: 'center',
        // textAlign: 'center',
        color: '#fff'
    }
})