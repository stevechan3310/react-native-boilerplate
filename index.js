import React from 'react';
import { Navigation } from 'react-native-navigation';

import App from '@/App';
import AppContainer from '@/AppContainer';

export const WrappedComponent = (Component) => (props) => (
  <AppContainer>
    <Component {...props} />
  </AppContainer>
);

Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () =>
  WrappedComponent(App),
);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'navigation.playground.WelcomeScreen',
      },
    },
  });
});
