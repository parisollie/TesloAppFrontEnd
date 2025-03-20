import { Layout,Button,Text } from '@ui-kitten/components'

//V-290,paso 1.0
export const HomeScreen = () => {
  return (
    <Layout>
      <Text>HomeScreen</Text>
      <Button>
        Cerrar sesión
      </Button>
    </Layout>
  )

}

// import { Button, Icon, Layout, Text } from '@ui-kitten/components';
// import { useAuthStore } from '../../store/auth/useAuthStore';


// export const HomeScreen = () => {

//   const { logout } = useAuthStore();

//   return (
//     <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>HomeScreen</Text>


//       {/* <Icon name="facebook" /> */}

//       <Button
//         accessoryLeft={ <Icon name="log-out-outline" /> }
//         onPress={ logout }
//       >
//         Cerrar sesión
//       </Button>
      
//     </Layout>
//   )
// }