import React, { useEffect, useState } from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  useColorScheme,
  Image,
  FlatList
} from "react-native";
import { Text, View } from "../Themed";
import styles from "./RouteMap.styles";
import { GooglePlaceData, GooglePlaceDetail, GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Coordinates, Driver, DriverType, GoogleData } from "@/types";
const googleMapApiKey = process.env.EXPO_PUBLIC_API_KEY;
import MapView, { PROVIDER_GOOGLE, MapMarker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { getImage } from "@/utilities/getDriverImage";

const fromLocation: Coordinates = {
  latitude: 21.0285,
  longitude: 105.8542
}

const toLocation: Coordinates = {
  latitude: 21.0293,
  longitude: 105.8842
}

export default function RouteMap() {
	useEffect(() => {

	}, [])

  return (
    <View style={styles.homeMapContainer}>
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 21.0393,
          longitude: 105.8742,
          latitudeDelta: 0.06,
          longitudeDelta: 0.03
        }}
        style={{width: '100%', height: '100%'}}
      >
        {googleMapApiKey &&
          <>
            <MapMarker 
              title="Origin"
              coordinate={fromLocation}
            >
              <Image 
                style={{width: 20, height: 20, resizeMode: 'contain'}}
                source={getImage("Car")}
              />
            </MapMarker>
            <MapViewDirections 
              origin={fromLocation}
              destination={toLocation}
              apikey={googleMapApiKey}
              strokeWidth={5}
              strokeColor="#00b0ff"
            />
            <MapMarker 
              title="Destination"
              coordinate={toLocation}
            />
          </>
        }
      </MapView>
    </View>
  );
}
