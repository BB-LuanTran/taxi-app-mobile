import React, { useEffect, useState } from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  useColorScheme,
} from "react-native";
import { Text, View } from "../Themed";
import styles from "./SearchResult.styles";
import { GooglePlaceData, GooglePlaceDetail, GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GoogleData } from "@/types";
import HomeMap from "../HomeMap/HomeMap";
import DriverTypes from "../DriverTypes/DriverTypes";
import RouteMap from "../RouteMap/RouteMap";
const googleMapApiKey = process.env.EXPO_PUBLIC_API_KEY;

export default function SearchResult() {
  const [from, setFrom] = useState<GoogleData>();
  const [destination, setDestination] = useState<GoogleData>();
	useEffect(() => {

	}, [])

  return (
    <View style={styles.searchResultContainer}>
		  <View style={styles.mapContainer}>
        {/* <HomeMap /> */}
        <RouteMap />
      </View>
      <View style={styles.driverTypeContainer}>
        <DriverTypes 
      /></View>
    </View>
  );
}
