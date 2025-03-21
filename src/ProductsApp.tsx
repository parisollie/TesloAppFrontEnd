import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './presentation/navigation/StackNavigator';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { useColorScheme } from 'react-native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

//V-290,paso 1.0
export const ProductsApp = () => {
    //V-299
    const colorScheme = useColorScheme();
    const theme = colorScheme === 'dark' ? eva.dark : eva.light;
    return (
        <>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider {...eva} theme={theme}>
                <NavigationContainer >
                    <StackNavigator />
                </NavigationContainer >
            </ApplicationProvider>
        </>


    );

};



// import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
// import {NavigationContainer} from '@react-navigation/native';
// import {StackNavigator} from './presentation/navigation/StackNavigator';
// 
// import {AuthProvider} from './presentation/providers/AuthProvider';

// export const ProductsApp = () => {

//   const backgroundColor =
//     colorScheme === 'dark'
//       ? theme['color-basic-800']
//       : theme['color-basic-100'];

//   return (
//     
//       <IconRegistry icons={EvaIconsPack} />
// 
//         <NavigationContainer
//           theme={{
//             dark: colorScheme === 'dark',
//             colors: {
//               primary: theme['color-primary-500'],
//               background: backgroundColor,
//               card: theme['color-basic-100'],
//               text: theme['text-basic-color'],
//               border: theme['color-basic-800'],
//               notification: theme['color-primary-500'],
//             },
//           }}>
//           <AuthProvider>
//             <StackNavigator />
//           </AuthProvider>
//         </NavigationContainer>
//       </>
//     </>
//   );
// };
