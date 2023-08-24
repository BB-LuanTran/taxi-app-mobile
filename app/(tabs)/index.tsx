import React, { useEffect, useMemo, useState } from 'react';
import { StyleSheet, useColorScheme, StatusBar, Button } from 'react-native';
import { Text, View } from '@/components/Themed';
import Colors from '@/constants/Colors';
import { useNavigation, useRouter } from 'expo-router';
import { checkUser, logout } from '@/api';
import { User } from '@/types';

export default function TabIndexScreen() {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation();
  const router = useRouter();
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.dark : Colors.light,
  };

  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await checkUser();
        setUser(data);
      } catch (error) {
        setUser(undefined);
      }
    };
    getUser();
    navigation.addListener('focus', (payload) => {
      getUser();
    });
  }, []);

  const openModalLogin = async () => {
    router.push('/modal?viewType=AUTH_VIEW');
  };

  const handleLogout = async () => {
    const logoutLink = await logout();
    router.push(`/modal?viewType=LOGOUT_VIEW&logoutLink=${logoutLink}`);
  };

  return (
    <View style={styles.container}>
      {!user ? (
        <Button title="Login with Azure Microsoft" onPress={openModalLogin} />
      ) : (
        <View>
          <Text>Name: {user.displayName}</Text>
          <Text>Email: {user.email}</Text>
          <Text>Phone number: {user.phoneNumber}</Text>
          <Button title="Login out" onPress={handleLogout} />
        </View>
      )}
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor.background}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
