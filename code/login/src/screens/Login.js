//選擇要登入還是創帳號那頁
import React , { useState } from 'react';
import { StyleSheet, Text, View , Image, TextInput, TouchableOpacity, button} from 'react-native';
import GlobalStyle from '../utils/GlobalStyle';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
 
    const navigation = useNavigation();

    const handleCreatAccountPress = () => {
        navigation.navigate('Logging');
    };
    const handleLoggingPress = () => {
        //navigation.navigate('Home');
    };

    return (
        <View style = {styles.backgroundColor}>
            <Image 
            style = {styles.image}
            source={require('../../assets/Logging/wallistic.png')}></Image>
            <Text style = {styles.title}>Welcome to wallistic!</Text>
            <Text style = {styles.subtitle1}>Login and enjoy {'\n'}selecting a wallpaper!</Text>

            <View style = {styles.button_set}>
                <Text style={styles.button_name}>Username</Text>
                <TextInput style={styles.button} >
                    <Text style={styles.buttonText}></Text>
                </TextInput>
               
                <Text style={styles.button_name}>Password</Text>
                <TextInput style={styles.button} >
                    <Text style={styles.buttonText}></Text>
                </TextInput>
            </View>
           
            <View>
                <TouchableOpacity style={styles.create_account} onPress={handleLoggingPress}> 
                    <Text style = {styles.create_account_buttom} >Login</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footer_word}> Don’t have an account?</Text>

                <TouchableOpacity onPress={handleCreatAccountPress}>
                    <Text style = {styles.logging_word}> Create Account</Text>
                </TouchableOpacity>

            </View>
            
            
        </View>
    );
}


const styles = StyleSheet.create({
    backgroundColor:{
        backgroundColor:'#FFFFF3',
        flex: 1,
        alignItems: 'center',
    },
    body: {
        flex: 1,
    },
    preview: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    title: {
        left: 7,
        //top: 0,
        fontSize: 22,
        marginTop: 20,
        //漸層
       // backgroundImage: linear-gradient(180deg, #6D6DD6 0%, #884ED3 100%),
        
    },
    subtitle1: {
       
        fontSize: 16,
        marginTop: 15,
        color: '#666666',
        textAlign: 'center',
    },
    subtitle2: {
        marginHorizontal: 20,
        fontSize: 14,
        marginTop: 20,
        color: '#666666',
        textAlign: 'center',
    },
    image: {
        marginTop: 60,
        width: 108,
        height: 108,
        borderRadius: 100,
    },
   
    button_set: {
        flexDirection: 'col',
       
        //backgroundColor: '#DDDDDD',
        width: 345,
        alignItems: 'center',
    },

    button: {
        backgroundColor: '#EEEEEE',
        width: 345,
        height: 50,
        alignItems: 'left',
        borderRadius: 5,
    },

    button_name: {
        margin: 0,
        color: '#666666',
        textAlign: 'left',
        width: 345,
        marginTop: 20,
    },
    buttonText: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    create_account: {
        backgroundColor:'#6D6DD6',
        width: 317,
        height: 43,
        borderRadius: 100,
        marginTop: 20,
        justifyContent: 'center',
        alignItems:'center'
    },
    create_account_buttom: {
        color:'#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    footer: {
        marginTop: 280,
        flexDirection: 'row',
        alignItems: 'center',
    },
   
    logging_word: {
        color: '#AD6DD6',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
    }

});