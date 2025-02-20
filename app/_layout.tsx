import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
        drawerType: 'front',
        swipeEnabled: false,
        drawerStyle: {
          backgroundColor: '#f3ead6',
        }
      }}>
        <Drawer.Screen
          name="index" 
          options={{
            drawerLabel: 'Home',
            title: 'Home',
          }}
        />
        <Drawer.Screen
          name="screens/profile" 
          options={{
            drawerLabel: 'Profile',
            title: 'Profile',
          }}
        />
        <Drawer.Screen
          name="screens/journal" 
          options={{
            drawerLabel: 'Journal',
            title: 'Journal',
          }}
        />
        <Drawer.Screen
          name="components/Header"
          options={{
            headerShown: false,
            drawerItemStyle: { 
              display: 'none'
            }
          }}
        />
        <Drawer.Screen
          name="+not-found"
          options={{
            headerShown: false,
            drawerItemStyle: { 
              display: 'none'
            }
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}


