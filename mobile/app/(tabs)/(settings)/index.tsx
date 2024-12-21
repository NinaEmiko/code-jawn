import { STYLES } from "@/assets/styles";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useUser } from "@/context/UserContext";
import { Link, router } from "expo-router";
import { View, Pressable, Image, Text, StyleSheet } from "react-native";

export default function SettingsScreen() {
  const {currentUser} = useUser();

  const handleNavigation = () => {
    router.push('/');
}

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
        <Text style={styles.text}>{currentUser.username}</Text>
        <Text style={styles.text}>{currentUser.email}</Text>
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
            onPress={() => handleNavigation()}
          >
            <Text style={styles.buttonText}>Log Out</Text>
          </Pressable>
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
    linkText: {
        color: "white",
        fontSize: STYLES.FONT_SIZE_SUB_TEXT,
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
    fontSize: STYLES.FONT_SIZE_SUB_TEXT,
  },
  titleText: {
    color: STYLES.ORANGE,
    fontSize: STYLES.FONT_SIZE_TITLE,
  },
  button: {
    marginTop: 35,
    backgroundColor: STYLES.BLUE,
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
    fontSize: STYLES.FONT_SIZE_BUTTON,
    fontFamily: STYLES.FONT,
  },
  divider: {
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 5,
  },
});
