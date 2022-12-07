import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// En mi caso, tenía instalado react-router-native, pero
// para este ejercicio uso @react-navigation/native-XXX
// el cual se ha utilizado en clase

// También deberia separar en fichero los distintos screen,
// pero para no complicar la estructura del proyecto lo incluyo
// todo en el mismo fichero

const Stack = createNativeStackNavigator();

//////////////////////// TAB 1 ////////////////////////
const HomeTab = () => {

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Users" component={UsersScreen} options={{ title: "Usuarios" }} />
      <Stack.Screen
        name="UserDetail"
        component={DetailsScreen}
        options={({ route }) => ({ title: "Detalle de " + route.params.obj.name })}
      />
    </Stack.Navigator>
  )
}

//////////////////////// TAB 2 ////////////////////////
const SettingsTab = () => {
  
  return (
    <View style={[styles.container, styles.tab2]}>
      <Text style={styles.bigText}>Configuración de la App</Text>
    </View>
  )
}

//////////////////////// TAB 1 -> SCREEN 1 ////////////////////////
const UsersScreen = ({ navigation }) => {

  const data = [
    { id: 1, name: "Carlos", surname: "González Martín", icon: "language-javascript" },
    { id: 2, name: "Adri", surname: "Sánchez Aparcero", icon: "language-java" },
    { id: 3, name: "Jiménez", surname: "Molina Salas", icon: "language-csharp" },
    { id: 4, name: "Maqueda", surname: "Salas Orzáez", icon: "language-php" },
    { id: 5, name: "David", surname: "Rojas Cabrera", icon: "language-python" }
  ]

  const Item = ({ item: obj }) =>
    <TouchableOpacity onPress={() => navigation.navigate("UserDetail", { obj })}>
      <View style={styles.item}>
        <MaterialCommunityIcons name={obj.icon} size={30} color="#CD4631" />
        <View>
          <View style={styles.itemField}>
            <Text style={styles.itemTitle}>Nombre: </Text>
            <Text>{obj.name}</Text>
          </View>
          <View style={styles.itemField}>
            <Text style={styles.itemTitle}>Apellidos: </Text>
            <Text>{obj.surname}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={Item}
        keyExtractor={obj => obj.id}
      />
    </View>
  )
}

//////////////////////// TAB 1 -> SCREEN 2 ////////////////////////
const DetailsScreen = ({ route }) => {

  const { obj } = route.params;

  return (
    <View style={[styles.container, styles.tab1screen2]}>
      <MaterialCommunityIcons name={obj.icon} size={100} color="#CD4631" />
      <Text style={[styles.itemTitle, styles.underlineText, styles.bigText]}>Id</Text>
      <Text style={[styles.bigText, styles.divider]}>{obj.id}</Text>
      <Text style={[styles.itemTitle, styles.underlineText, styles.bigText]}>Nombre</Text>
      <Text style={[styles.bigText, styles.divider]}>{obj.name}</Text>
      <Text style={[styles.itemTitle, styles.underlineText, styles.bigText]}>Apellidos</Text>
      <Text style={[styles.bigText, styles.divider]}>{obj.surname}</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator();

const Ej5 = () => {

  return (
    <NavigationContainer>{
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "green",
          headerShown: false
        }}
      >
        <Tab.Screen
          name="Home"
          tabBarIcon component={HomeTab}
          options={{
            tabBarLabel: "Inicio",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsTab}
          options={{
            tabBarLabel: "Config",
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
    flex: 1,
    padding: 20
  },
  item: {
    flexDirection: "row",
    margin: 10,
    padding: 6,
    borderRadius: 6,
    elevation: 6,
    backgroundColor: "#D3DEDC"
  },
  itemField: {
    flexDirection: "row",
    marginLeft: 5
  },
  itemTitle: {
    fontWeight: "bold",
  },
  tab1screen2: {
    alignItems: "center"
  },
  underlineText: {
    width: 250,
    borderBottomWidth: 1
  },
  bigText: {
    fontSize: 25,
  },
  divider: {
    marginBottom: 30
  },
  tab2: {
    alignItems: "center",
    justifyContent: "center"
  }
})

export default Ej5
