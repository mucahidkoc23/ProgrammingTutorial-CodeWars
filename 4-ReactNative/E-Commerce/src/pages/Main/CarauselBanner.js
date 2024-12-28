import React from "react";
import {View,Text,Dimensions} from "react-native";
import Carousel from "react-native-reanimated-carousel";

const CarauselBanner = (props) =>{
  const width = Dimensions.get('window').width;
  return(
    <View >
      <Carousel
        loop
        width={width}
        height={width/2}
        autoPlay={true}
        data={[props.Banner]}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log('current index:', index)}
        renderItem={({ index }) => (
          <View
            style={{
            flex: 1,
            borderWidth: 1,
            justifyContent:'center',
            }}
          >
          <Text style={{ textAlign:'center',fontSize: 30 }}>
            {index}
          </Text>
          </View>
          )}
        /> 
      </View>
  ) 
}
export default CarauselBanner;