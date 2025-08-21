import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  boxInput: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    height: 50,
    width: '100%', 

  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 30,
    width: 327,
    height: 56,
    paddingHorizontal: 20,
  },
  inputPassword: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
    borderRadius: 30,
    width: 327,
    height: 56,
    paddingHorizontal: 20,
  },

  iconBtn: {
    position: "absolute",
    right: 12,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  forgot: {
    alignItems: 'flex-end',
    width: '100%',
    paddingHorizontal: 15,
  },
  textForgot: {
    fontFamily: 'Inter',
    fontWeight: '700',
    color: '#2E3E5C'
  },
  btnLogin: {
    backgroundColor: '#1FCC79',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    height: 56,
    width: 327,
    shadowColor: '#fff',
    shadowOffset: {
        width: 0,
        height: 6,
      },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,

    elevation: 13,
  },
  btnLoginText: {
    color: '#fff',
    fontFamily: 'Inter',
  },
 
});