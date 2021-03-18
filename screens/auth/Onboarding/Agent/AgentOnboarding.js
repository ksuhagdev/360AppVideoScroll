import React from 'react';
import {View, Text, ImageBackground, Dimensions, TouchableOpacity, StyleSheet} from 'react-native';
const {width, height} =Dimensions.get('window')
const AgentOnboarding = (props) => {
    return(
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <ImageBackground source={require('../../../../assets/image/onboarding/back1.png')} style={{width:'100%', height:'100%'}} >
            <View style={{justifyContent: 'center',alignItems: 'center', marginTop: height/4}}>
                <Text style={{color:'white', fontSize:50}}> Agent Sign Up </Text>
            </View>
            <View style={{justifyContent: 'center',alignItems: 'center', marginTop: 50}}>
                <Text style={{color:'white', fontSize:30, textAlign: 'center', fontWeight: 'bold'}}> This sign up is for real estate agents only</Text>
            </View>

            <View style={styles.buttonContainer}>
            <TouchableOpacity activeOpacity={0.7}  style={styles.logInContainer} onPress={() =>{props.navigation.navigate('PhoneVerification',{type:'agentSignup'})}}>
                        <Text style={styles.login}>Sign up as a real estate agent</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={styles.signUpContainer} onPress={() => {props.navigation.navigate('AgentLogin',{type:'agentLogin'})}}>
                        <Text style={styles.signUp}>Login as Agent</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={{marginTop:10}} onPress={() =>{props.navigation.popToTop()}}>
                        <Text style={{color: 'white', textDecorationLine:'underline'}}>Whoops! let me get back</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer:{
        position: 'absolute',
        // flexDirection:'row',
        bottom: 100,
        width:'100%', 
        padding: 10,
        height:60,
       //  marginLeft: 20,
       //  marginRight:20,
        // alignItems: 'center', 
        alignItems: 'center',
        justifyContent: 'center',
   },
   signUpContainer:{
        width: '90%',
        height:30,
        backgroundColor:'#fff',
        borderRadius:20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:20
   },
   signUp:{
       fontFamily:'Helvetica',
  
       fontSize:16, 
       color:'#000'
   }, logInContainer:{
       width: '90%',
       marginLeft: 10,
       height:30,
       backgroundColor:'#fff',
       marginTop:20,
       borderRadius:30,
       alignItems: 'center',
       justifyContent: 'center',
       borderColor:'#fff',
       borderWidth:2, 
  },login:{
   fontFamily:'Helvetica',
 
   fontSize:16, 
   color:'#000' 
  },
})

export default AgentOnboarding