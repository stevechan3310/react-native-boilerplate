import { ImageSourcePropType } from 'react-native';

export interface MenuScreenProps {
  imageIcon: ImageSourcePropType;
  title: string;
  navigation: () => void;
}
