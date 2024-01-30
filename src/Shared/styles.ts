import { StyleSheet } from 'react-native';

const sharedStyles = StyleSheet.create({
  blueColor: {
    color: '#0B67F3',
  },
  whiteColor: {
    color: 'white',
  },
  bold: {
    fontWeight: 'bold',
  },
  weight500: {
    fontWeight: '500',
  },
  colorSecondary: {
    color: '#929396',
  },
  fontHeadline: {
    fontSize: 20,
    lineHeight: 22,
  },
  fontSmall: {
    fontSize: 10,
    lineHeight: 14,
  },
  fontStandard: {
    fontSize: 12,
    lineHeight: 14,
  },
  flexRowSpaceBetweenAlignCenter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexCentered: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullScreen: { 
    width: '100%',
    height: '100%',
  },
});

export default sharedStyles;
