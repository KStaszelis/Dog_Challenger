# Dog Challenger - make your walks with dog more healthy. Your mate will appreciate it!

This is a dynamic application powered by [Expo] (https://docs.expo.io/) which is discovered and designed to manage walks with dog every day. It is written for Android devices.  
I've used react-navigation for navigation, react-native for creating the basic components, event bus to transfer data between them.

## Content

**The application consists of five screens:**
**wellcome** that encourages the use of the application
**choice** that allows user to choose the breed and age of dog and counts the daily demand for walks
**main** that allows user to start the walk
**steps** that measure the amount of steps made during the walk using internal pedometer in device (expo-sensor used)
**statistics** shows the weekly statistisc of the walks (under construction)

## Built with

- [Expo](https://docs.expo.io/) - React-Native Framework.
- [React-Router] (https://reactnavigation.org/) - Declarative navigation for React-Native.
- [react-native-circular-progress] (https://www.npmjs.com/package/react-native-circular-progress) - React Native component for creating animated, circular progress.
- [react-native eventBus](https://www.npmjs.com/package/react-native-event-bus) - Cross-interface communication solution
- [Reactjs-popup](https://www.npmjs.com/package/reactjs-popup) - Component that helps create simple and complex Modals, tooltips, and Menus for React App.
- [react-native-picker/picker ] (https://github.com/react-native-picker/picker) - Creates picker.
- [expo-sensors] (https://docs.expo.io/versions/latest/sdk/sensors/) - Uses internal pedometer in device to measure the steps.
- [react-native-svg-charts] (https://github.com/JesperLekland/react-native-svg-charts) - Creates charts summing up the weekly walks statistics
