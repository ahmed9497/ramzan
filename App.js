/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import admob, { MaxAdContentRating } from '@react-native-firebase/admob';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import Providers from './navigation';


const App= () => {


 

  useEffect(async() => {


  
      // try {
      //   // Attempt login with permissions
      //   await LoginManager.setLoginBehavior("web_only");
      //   const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
      //   if (result.isCancelled) {
      //     throw 'User cancelled the login process';
      //   }

      //   // Once signed in, get the users AccesToken
      //   const data = await AccessToken.getCurrentAccessToken();

      //   if (!data) {
      //     throw 'Something went wrong obtaining access token';
      //   }

      //   // Create a Firebase credential with the AccessToken
      //   const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
      //   console.log(facebookCredential);
      //   // Sign-in the user with the credential
      //   await auth().signInWithCredential(facebookCredential)
      //   // Use it only when user Sign's up, 
      //   // so create different social signup function
      //   // .then(() => {
      //   //   //Once the user creation has happened successfully, we can add the currentUser into firestore
      //   //   //with the appropriate details.
      //   //   console.log('current User', auth().currentUser);
      //   //   firestore().collection('users').doc(auth().currentUser.uid)
      //   //   .set({
      //   //       fname: '',
      //   //       lname: '',
      //   //       email: auth().currentUser.email,
      //   //       createdAt: firestore.Timestamp.fromDate(new Date()),
      //   //       userImg: null,
      //   //   })
      //   //   //ensure we catch any errors at this stage to advise us if something does go wrong
      //   //   .catch(error => {
      //   //       console.log('Something went wrong with added user to firestore: ', error);
      //   //   })
      //   // })
      //   //we need to catch the whole sign up process if it fails too.
      //   .catch(error => {
      //       console.log('Something went wrong with sign up: ', error);
      //   });
      // } catch(error) {
      //   console.log({error});
      // }





    // GoogleSignin.hasPlayServices({ autoResolve: true ,showPlayServicesUpdateDialog:true}).then(() => {

    // })
    // .catch((err) => {
    //       console.log("Play services error", err.code, err.message);
    // })


    GoogleSignin.configure({
      webClientId: '1008605095838-6d9brh412crv0ac1o3836sgh5fn7lj93.apps.googleusercontent.com',
      
      offlineAccess: true,
    });
    // const data = await GoogleSignin.signIn();
    // const { idToken } = await GoogleSignin.signIn();
    
    // // Create a Google credential with the token
    // const googleCredential = auth.GoogleAuthProvider.credential(data.idToken);

    // // Sign-in the user with the credential
    // let d= await auth().signInWithCredential(googleCredential);
    // console.log(d);

    admob()
  .setRequestConfiguration({
    // Update all future requests suitable for parental guidance
    maxAdContentRating: MaxAdContentRating.PG,

    // Indicates that you want your content treated as child-directed for purposes of COPPA.
    tagForChildDirectedTreatment: true,

    // Indicates that you want the ad request to be handled in a
    // manner suitable for users under the age of consent.
    tagForUnderAgeOfConsent: true,
  })
  .then(() => {
    // Request config successfully set!
    console.log("Succcessfully admob********")

  });
  }, [])
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
   
      
       
          <Providers/>
      
     
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
