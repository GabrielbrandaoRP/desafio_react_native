import { themes } from "@/globals/themes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  boxTop: {
    height: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  textBottom: {
    color: '#1FCC79',
  },
  textTitle: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 20,
    color: themes.colors.text
  },
  boxBottom: {
    height: 50,
    width: '100%', 
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
    marginTop: 60,
  }
  
});