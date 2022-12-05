import { StyleSheet, Text } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// En mi caso, como tenía instalado react-router-native,
// es mejor hacer los tabs manualmente en vez de instalar
// otro navigator (@react-navigation/native) el cual te
// facilita los tabs.
const Tab = createBottomTabNavigator();

const Ej5 = () => {

  const HomeScreen = () => <Text style={styles.container}>Contenido de la pantalla inicio</Text>
  const SettingsScreen = () => <Text style={styles.container}>Contenido de la pantalla configuración</Text>

  return (
    <NavigationContainer>{
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
          headerShown: false
        }}
      >
        <Tab.Screen
          name="Home"
          tabBarIcon component={HomeScreen}
          options={{
            tabBarLabel: 'Inicio',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Config',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cog-play" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    }</NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
})

export default Ej5
