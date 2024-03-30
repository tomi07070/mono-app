import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectRoutine from '../../Views/SelectRoutine.js';
import Hombro from '../../Views/Muscles/Hombro.js';
import Bicep from '../../Views/Muscles/Bicep.js'
import antebrazo from '../../Views/Muscles/antebrazo.js'
import cuads from '../../Views/Muscles/cuads.js'
import Pecho from '../../Views/Muscles/Pecho.js'
import abs from '../../Views/Muscles/abs.js'
import Triceps from '../../Views/Muscles/Triceps.js'
import Espalda from '../../Views/Muscles/Espalda.js'
import Femoral from '../../Views/Muscles/Femoral.js'
import Gluteo from '../../Views/Muscles/Gluteo.js'
import Gemelo from '../../Views/Muscles/Gemelo.js'
import Home from '../../Views/Home.js'
import RoutinePage from '../../Views/RoutinePage.js';
import PreHome from '../../Views/PreHome.js';



export default function NavigationStacks() {
    const Stack = createNativeStackNavigator()
    return (
            <Stack.Navigator>
                <Stack.Screen  options={{
                    headerShown: false
                }} name='HomeScreen' component={PreHome}/>
                <Stack.Screen  options={{
                }} name='Plan Screen' component={Home}/>
                <Stack.Screen options={{
                }} name="Select Muscle" component={SelectRoutine} />
                <Stack.Screen name='Routine Page' component={RoutinePage} />
                <Stack.Screen name="HOMBRO" component={Hombro} />
                <Stack.Screen name='BICEPS' component={Bicep} />
                <Stack.Screen name='ANTE BRAZO' component={antebrazo}/>
                <Stack.Screen name='CUADRICEPS' component={cuads}/>
                <Stack.Screen name='PECHO' component={Pecho}/>
                <Stack.Screen name='ABS' component={abs}/>
                <Stack.Screen name='TRICEPS' component={Triceps}/>
                <Stack.Screen name='ESPALDA' component={Espalda}/>
                <Stack.Screen name='FEMORALES' component={Femoral}/>
                <Stack.Screen name='GLUTEO' component={Gluteo}/>
                <Stack.Screen name='GEMELO' component={Gemelo}/>
            </Stack.Navigator>
    )
  }