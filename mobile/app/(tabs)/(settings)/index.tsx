import ParallaxScrollView from "@/components/ParallaxScrollView";
import { userData } from "@/mocking/userData";
import { Link } from "expo-router";
import { View, Pressable, Image, Text, StyleSheet } from "react-native";

export default function SettingsScreen() {

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/WP1.jpeg')}
          style={styles.reactLogo}
        />
      }>

        <Text style={styles.titleText}>Account</Text>
        <Text style={styles.text}>{userData.name}</Text>
        <Text style={styles.text}>{userData.email}</Text>
        <View style={styles.divider} />

        <Text style={styles.titleText}>Security</Text>
        <Link href="/pages/updateEmail" style={styles.linkText}>Update Email</Link>
        <Link href="/pages/updatePassword" style={styles.linkText}>Update Password</Link>
        <Link href="/pages/deleteAccount" style={styles.linkText}>Delete Account</Link>
        <View style={styles.divider} />
        
        <Text style={styles.titleText}>Other</Text>
        <Link href="/pages/termsAndConditions" style={styles.linkText}>Terms and Conditions</Link>
        <Link href="/pages/acknowledgments" style={styles.linkText}>Acknowledgments</Link>
        <Link href="/pages/support" style={styles.linkText}>Support</Link>

        <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.pressed,
              
            ]}
            onPress={null}
          >
            <Link href={"/login"} style={[styles.buttonText, styles.button,]}>Sign Out</Link>
          </Pressable>
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
    linkText: {
        color: "white",
        fontSize: 20,
        textDecorationLine: "underline",
    },
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 25,
  },
  reactLogo: {
    height: 250,
    width: 430,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    borderRadius: 25,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  titleText: {
    color: "#ff7100",
    fontSize: 30,
  },
  button: {
    marginTop: 35,
    backgroundColor: "#12edd8",
    fontSize: 25,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    fontSize: 25,
    fontFamily: "Menlo",
  },
  divider: {
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 5,
  },
});
