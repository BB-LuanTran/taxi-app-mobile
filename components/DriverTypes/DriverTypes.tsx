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
import styles from "./DriverTypes.styles";
import { GooglePlaceData, GooglePlaceDetail, GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GoogleData } from "@/types";
import HomeMap from "../HomeMap/HomeMap";
import DriverTypeRow from "../DriverTypeRow/DriverTypeRow";
const googleMapApiKey = process.env.EXPO_PUBLIC_API_KEY;

export default function DriverTypes() {
  const [from, setFrom] = useState<GoogleData>();
  const [destination, setDestination] = useState<GoogleData>();
	useEffect(() => {

	}, [])

  return (
    <View style={styles.driverTypesContainer}>
		  <Text>Driver types</Text>
      <DriverTypeRow />
      <Button title="Confirm" />
    </View>
  );
}
