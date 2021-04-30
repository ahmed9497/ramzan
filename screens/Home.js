import React ,{useContext ,useState,useEffect}from 'react';
import {View, TextInput,Text,Button, StyleSheet} from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';
import {  BannerAdSize,InterstitialAd,RewardedAdEventType,AdEventType, RewardedAd, BannerAd, TestIds } from '@react-native-firebase/admob';
import admob, { MaxAdContentRating } from '@react-native-firebase/admob';




const adUnitId =  TestIds.INTERSTITIAL;

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});

const Home=({navigation})=>{
  const [loaded, setLoaded] = useState(false);
  const {logout} = useContext(AuthContext);


  useEffect(() => {

    const eventListener = interstitial.onAdEvent(type => {
      console.log(type)
      if (type === AdEventType.LOADED) {
        setLoaded(true);
      }
      if (type === "closed") {
        setLoaded(false);
      }


    });

    // Start loading the interstitial straight away
    interstitial.load();
    interstitial.onAdCl

    // Unsubscribe from events on unmount
    return () => {
      eventListener();
    };

   
  }, []);
  

 
return(
    <View style={{flex:1}}>
        <Text>Home is here</Text>
      {loaded &&
        <Button
      title="Show Interstitial"
      onPress={() => {
        interstitial.show();
        console.log("pressed")
      }}
    />}
     {/* <BannerAd
      unitId={'ca-app-pub-6538169305196343/8079660560'}
      size={BannerAdSize.FULL_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    /> */}
    <BannerAd unitId={TestIds.BANNER}  size={BannerAdSize.FULL_BANNER}/>
        <Button
        title="logout"
        onPress={() => logout()}
        // onPress={() => navigation.navigate('Login')}
      />
    </View>
)
}
export default Home;