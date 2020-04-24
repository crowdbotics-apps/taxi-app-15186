import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings32831Navigator from '../features/Settings32831/navigator';
import Settings32816Navigator from '../features/Settings32816/navigator';
import NotificationList32815Navigator from '../features/NotificationList32815/navigator';
import Maps32814Navigator from '../features/Maps32814/navigator';
import UserProfile32387Navigator from '../features/UserProfile32387/navigator';
import Maps32368Navigator from '../features/Maps32368/navigator';
import Settings32346Navigator from '../features/Settings32346/navigator';
import Settings32331Navigator from '../features/Settings32331/navigator';
import NotificationList32330Navigator from '../features/NotificationList32330/navigator';
import Maps32329Navigator from '../features/Maps32329/navigator';
import UserProfile32326Navigator from '../features/UserProfile32326/navigator';
import Maps32307Navigator from '../features/Maps32307/navigator';
import Settings32285Navigator from '../features/Settings32285/navigator';
import Settings32270Navigator from '../features/Settings32270/navigator';
import NotificationList32269Navigator from '../features/NotificationList32269/navigator';
import Maps32268Navigator from '../features/Maps32268/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Settings32831: { screen: Settings32831Navigator },
Settings32816: { screen: Settings32816Navigator },
NotificationList32815: { screen: NotificationList32815Navigator },
Maps32814: { screen: Maps32814Navigator },
UserProfile32387: { screen: UserProfile32387Navigator },
Maps32368: { screen: Maps32368Navigator },
Settings32346: { screen: Settings32346Navigator },
Settings32331: { screen: Settings32331Navigator },
NotificationList32330: { screen: NotificationList32330Navigator },
Maps32329: { screen: Maps32329Navigator },
UserProfile32326: { screen: UserProfile32326Navigator },
Maps32307: { screen: Maps32307Navigator },
Settings32285: { screen: Settings32285Navigator },
Settings32270: { screen: Settings32270Navigator },
NotificationList32269: { screen: NotificationList32269Navigator },
Maps32268: { screen: Maps32268Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
