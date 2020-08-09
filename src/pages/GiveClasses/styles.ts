import { StyleSheet } from 'react-native';

// const colorPrimaryLighter = '#9871f5';
const colorPrimary = '#8257e5';
const colorSecondary = '#04d361';
const colorTextInPrimary = '#d4c2ff';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPrimary,
    justifyContent: 'center',
    padding: 40,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 22,
    lineHeight: 37,
    maxWidth: 180,
  },

  description: {
    marginTop: 24,
    color: colorTextInPrimary,
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'Poppins_400Regular',
    maxWidth: 240,
  },

  okButton: {
    marginVertical: 40,
    backgroundColor: colorSecondary,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },

  okButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Archivo_700Bold',
  },
});

export default styles;
