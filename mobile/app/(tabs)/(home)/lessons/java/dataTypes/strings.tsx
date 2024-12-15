import { StyleSheet, Image, Platform, Text, Button, View, Pressable, Dimensions, ImageBackground } from 'react-native';

import React, { useEffect } from 'react';
import { STRINGS_LESSONS } from '@/constants/Java/DataTypes/StringsConstants';
import GlowingButton from '@/components/GlowingButton';
import ProgressCircle from '@/components/ProgressCircle';
import TypingDisplayText from '@/components/TypingDisplayText';
import { STYLES } from '@/assets/styles';

const screenHeight = Dimensions.get('window').height;

export default function JavaDataTypesStrings() {
  const [buttonText, setButtonText] = React.useState('Next');
  const [tab, setTab] = React.useState(0);

  const handlePress = () => {
    setTab(tab + 1)
    
  }

  useEffect(() => {
    if (tab === 5) {
      setButtonText("Begin")
     } 
   if (tab === 6) {
    
   } 
  }, [tab])

  return (
    <>
      <View style={styles.lessonContainer}>
        <View style={styles.banner}>
          <ProgressCircle props={{percentage:10, style: {width: 80, height: 80} }} />
          </View>
        <View style={styles.lessonCard}>
          <ImageBackground 
            source={require('@/assets/images/ComputerScreenOrange.png')}
            style={styles.image}
          >

          {tab === 0 &&
            <>
              <TypingDisplayText text={STRINGS_LESSONS[0].EXPLANATION} textColor="white" />
            </>
          }
          {tab === 1 &&
            <>
              <Text style={styles.stringTitle}>
                String
              </Text>
              <TypingDisplayText text={"\"Hello World!\""} textColor={STYLES.STRINGS}/>
            </>
          }
          {tab === 2 &&
            <>
              <Text style={styles.stringTitle}>
                String
              </Text>
              <TypingDisplayText text={"\'Hello World!\'"} textColor={STYLES.STRINGS} />
            </>
          }
          {tab === 3 &&
            <>
              <Text style={styles.stringTitle}>
                String
              </Text>
              <TypingDisplayText text={"\`Hello World!\`"} textColor={STYLES.STRINGS} />
            </>
          }

          {tab === 4 &&
            <>
              <Text style={styles.stringTitle}>
                Not a String
              </Text>
              <TypingDisplayText text={"Hello World!"} textColor={STYLES.STRINGS} />
            </>
          }

          {tab === 5 &&
            <>
              <Text style={styles.stringTitle}>
                Not a String
              </Text>
              <TypingDisplayText text={"\"Hello World!\'"} textColor={STYLES.STRINGS} />
            </>
          }

          </ImageBackground>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <GlowingButton props={{buttonColor: STYLES.BLUE, buttonPress:handlePress, buttonText: buttonText}} />
      </View>

    </>

  );
}

const styles = StyleSheet.create({
  stringText: {
    color: STYLES.DARK_GREY,
    fontFamily: STYLES.FONT,
    fontSize: 20,
    paddingTop: 20,
    paddingLeft: 60,
    paddingRight: 40,
    textAlign: 'center',
  },
  stringTitle: {
    color: STYLES.ORANGE,
    fontFamily: STYLES.FONT,
    fontSize: 25,
    paddingTop: 20,
    paddingLeft: 60,
    paddingRight: 40,
    textAlign: 'center',
    fontWeight: "bold",
  },
  image: {
    height: 260,
    width: 465,
    resizeMode: 'contain',
    paddingRight: 30,

  },
  banner: {
    flexDirection: "row",
    width: 100,
    height: "10%",
    marginLeft: "auto",
  },
  lessonCard: {    
    height: screenHeight * .40,
    marginTop: 25,
    borderRadius: 10,    
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lessonContainer: {
    backgroundColor: "#151718",
    height: screenHeight * .50,
  },
  buttonContainer: {
    height: screenHeight * 0.45,
    backgroundColor: "#151718",
  },
  button: {
    backgroundColor: STYLES.BLUE,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: STYLES.FONT_SIZE_BUTTON,
    fontFamily: STYLES.FONT,
  },
});
