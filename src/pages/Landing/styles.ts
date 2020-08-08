import { StyleSheet } from 'react-native';

// const colorBackground = '#f0f0f7';
const colorPrimaryLighter = '#9871f5';
// const colorPrimaryLight = '#916bea';
const colorPrimary = '#8257e5';
// const colorPrimaryDark = '#774dd6';
// const colorPrimaryDarker = '#6842c2';
const colorSecondary = '#04d361';
// const colorSecondaryDark = '#04bf58';
// const colorTitleInPrimary = '#ffffff';
const colorTextInPrimary = '#d4c2ff';
// const colorTextTitle = '#32264d';
// const colorTextComplement = '#9c98a6';
// const colorTextBase = '#6a6180';
// const colorLineInWhite = '#e6e6f0';
// const colorInputBackground = '#f8f8fc';
// const colorButtonText = '#ffffff';
// const colorBoxBase = '#ffffff';
// const colorBoxFooter = '#fafafc';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPrimary,
    justifyContent: 'center',
    padding: 40,
  },

  banner: {
    width: '100%',
    resizeMode: 'contain',
  },

  text: {
    fontFamily: 'Poppins_400Regular',
    color: '#FFF',
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80,
  },

  textBold: {
    fontFamily: 'Poppins_600SemiBold',
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },

  button: {
    height: 150,
    width: '45%',
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 24,
    justifyContent: 'space-between',
  },

  buttonPrimary: {
    backgroundColor: colorPrimaryLighter,
  },
  buttonSecondary: {
    backgroundColor: colorSecondary,
  },
  buttonText: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 20,
  },

  totalConnections: {
    fontFamily: 'Poppins_400Regular',
    color: colorTextInPrimary,
    fontSize: 12,
    lineHeight: 20,
    maxWidth: 140,
    marginTop: 40,
  },
});

export default styles;
