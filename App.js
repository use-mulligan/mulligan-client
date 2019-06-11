import { createStackNavigator, createAppContainer} from 'react-navigation'
import LoginScreen from './components/Login';
import HomeScreen from './components/Home';

const MainNavigator = createStackNavigator({
  Login: {screen: LoginScreen},
  Home: {screen: HomeScreen}
})

const App = createAppContainer(MainNavigator);

export default App;
