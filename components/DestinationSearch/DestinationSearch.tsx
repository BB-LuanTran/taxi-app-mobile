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
import styles from "./DestinationSearch.styles";
import { GooglePlaceData, GooglePlaceDetail, GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GoogleData } from "@/types";
const googleMapApiKey = process.env.EXPO_PUBLIC_API_KEY;

export default function DestinationSearch() {
  const [from, setFrom] = useState<GoogleData>();
  const [destination, setDestination] = useState<GoogleData>();
	useEffect(() => {

	}, [])

  return (
    <View style={styles.destinationContainer}>
			<View style={styles.googleSearchContainer}>
				<GooglePlacesAutocomplete
					placeholder="Where from?"
					onPress={(data, details = null) => {
						// 'details' is provided when fetchDetails = true
						if(data && details)
							setFrom({data, details});
						console.log(data, details);
						console.warn(data, details)
					}}
					query={{
						key: googleMapApiKey,
						language: "en",
					}}
					styles={{
						textInput: styles.textInput
					}}
				/>
				<GooglePlacesAutocomplete
					placeholder="Where to?"
					onPress={(data, details = null) => {
						// 'details' is provided when fetchDetails = true
						if(data && details)
							setDestination({data, details});
						console.log(data, details);
						console.warn(data, details)
					}}
					query={{
						key: googleMapApiKey,
						language: "en",
					}}
					styles={{
						textInput: styles.textInput
					}}
				/>
			</View>
    </View>
  );
}
