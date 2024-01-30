import { StyleSheet } from 'react-native';

import sharedStyles from '../../Shared/styles';

const styles = StyleSheet.create({
  ...sharedStyles,
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    marginBottom: 4,
    marginTop: -4
  },
  red: {
    borderTopColor: '#E4403F',
    borderTopWidth: 5,
  },
  green: {
    borderBottomColor: '#25a764',
    borderBottomWidth: 5,
  },
  containerHelp: {
    backgroundColor: '#ECF4FE',
    borderRadius: 99999,
    width: 20,
    height: 20,
  },
  backgroundTransparent: { 
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  containerHeader: {
    padding: 10,
    width: '100%',
  },
  containerPrice: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  containerPercentage: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'flex-end',
  },
  containerModal: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
  },
  containerLine: {
    paddingHorizontal: 15,
    position: 'relative',
    paddingVertical: 10,
  },
  horizontalLine: {
    position: 'absolute',
    // @ts-ignore
    top: 'calc(50% - 5px)',
    left: 15,
    width: '100%',
    height: 5,
    backgroundColor: 'rgba(189, 230, 209, 1)',
  },
  verticalLine: {
    width: 5,
    borderRadius: 5,
    backgroundColor: 'rgba(189, 230, 209, 1)',
  },
  verticalLineCenter: {
    height: 40,
  },
  verticalLineBorder: {
    height: 20,
  },
  modalContent: {
    gap: 10,
    marginBottom: 10,
  },
  buttonModal: {
    backgroundColor: '#0B67F3',
    padding: 8,
    borderRadius: 6,
  },
  textCenter: {
    textAlign: 'center'
  },
});

export default styles;
