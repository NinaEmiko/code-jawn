import { StyleSheet, Text, Image } from 'react-native';
import React from 'react';
import ParallaxScrollView from '../../../components/ParallaxScrollView';
import { TERMS_AND_CONDITIONS } from '@/constants/TermsAndConditions';

export default function TermsAndConditionsScreen({ props }:{ props: any}) {

    const handlePress = () => {
        props.setGetStarted(false)
    }

  return(
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/WP1.jpeg')}
          style={styles.reactLogo}
        />
      }>

        <Text style={styles.titleText}>{TERMS_AND_CONDITIONS.TITLE}</Text>
        <Text style={styles.text}>{TERMS_AND_CONDITIONS.UPDATE_DATE}</Text>
        <Text style={styles.subTitleText}>{TERMS_AND_CONDITIONS.INTRODUCTION_TITLE}</Text>
        <Text style={styles.text}>{TERMS_AND_CONDITIONS.INTRODUCTION_TEXT}</Text>
        <Text style={styles.subTitleText}>{TERMS_AND_CONDITIONS.DEFINITIONS_TITLE}</Text>
        <Text style={styles.text}>{TERMS_AND_CONDITIONS.DEFINITIONS_USER}</Text>
        <Text style={styles.text}>{TERMS_AND_CONDITIONS.DEFINITIONS_SERVICE}</Text>
        <Text style={styles.text}>{TERMS_AND_CONDITIONS.DEFINITIONS_CONTENT}</Text>
        <Text style={styles.subTitleText}>{TERMS_AND_CONDITIONS.USER_OBLIGATIONS_TITLE}</Text>
        <Text style={styles.text}>{TERMS_AND_CONDITIONS.USER_OBLIGATIONS_ACCOUNT_CREATION}</Text>
        <Text style={styles.text}>{TERMS_AND_CONDITIONS.USER_OBLIGATIONS_PROHIBITED_CONDUCT}</Text>
        <Text style={styles.subTitleText}>{TERMS_AND_CONDITIONS.USAGE_RIGHTS_TITLE}</Text>
        <Text style={styles.text}>{TERMS_AND_CONDITIONS.USAGE_RIGHTS_LICENSE}</Text>
        <Text style={styles.text}>{TERMS_AND_CONDITIONS.USAGE_RIGHTS_RESTRICTIONS}</Text>
        <Text style={styles.subTitleText}>{TERMS_AND_CONDITIONS.CONTENT_OWNERSHIP_TITLE}</Text>
        <Text style={styles.text}>{TERMS_AND_CONDITIONS.CONTENT_OWNERSHIP_INTELLECTUAL_PROPERTY}</Text>
        <Text style={styles.text}>{TERMS_AND_CONDITIONS.CONTENT_OWNERSHIP_USER_CONTENT}</Text>
        <Text style={styles.subTitleText}>{TERMS_AND_CONDITIONS.PRIVACY_AND_DATA_PROTECTION_TITLE}</Text>
        <Text style={styles.text}>{TERMS_AND_CONDITIONS.PRIVACY_AND_DATA_PROTECTION_DATA_COLLECTION}</Text>
        <Text style={styles.text}>{TERMS_AND_CONDITIONS.PRIVACY_AND_DATA_PROTECTION_DATA_SHARING}</Text>
        <Text style={styles.subTitleText}>{TERMS_AND_CONDITIONS.PAYMENT_AND_SUBSCRIPTIONS_TERMS_TITLE}</Text>
        <Text style={styles.text}>{TERMS_AND_CONDITIONS.PAYMENT_AND_SUBSCRIPTIONS_TERMS_FEES}</Text>
        <Text style={styles.text}>{TERMS_AND_CONDITIONS.PAYMENT_AND_SUBSCRIPTIONS_TERMS_BILLING}</Text>
        <Text style={styles.text}>{TERMS_AND_CONDITIONS.PAYMENT_AND_SUBSCRIPTIONS_TERMS_REFUNDS}</Text>
        <Text style={styles.subTitleText}>{TERMS_AND_CONDITIONS.THIRD_PARTY_LINKS_AND_SERVICES_TITLE}</Text>
        <Text style={styles.text}>{TERMS_AND_CONDITIONS.THIRD_PARTY_LINKS_AND_SERVICES_TEXT}</Text>
        <Text style={styles.subTitleText}>{TERMS_AND_CONDITIONS.DISPUTE_RESOLUTION_TITLE}</Text>
        <Text style={styles.text}>{TERMS_AND_CONDITIONS.DISPUTE_RESOLUTION_GOVERNING_LAW}</Text>
        <Text style={styles.text}>{TERMS_AND_CONDITIONS.DISPUTE_RESOLUTION_TEXT}</Text>
        <Text style={styles.subTitleText}>{TERMS_AND_CONDITIONS.LIMITATION_OF_LIABILITY_TITLE}</Text>
        <Text style={styles.text}>{TERMS_AND_CONDITIONS.LIMITATION_OF_LIABILITY_TEXT}</Text>
        <Text style={styles.subTitleText}>{TERMS_AND_CONDITIONS.TERMINATION_TITLE}</Text>
        <Text style={styles.text}>{TERMS_AND_CONDITIONS.TERMINATION_BY_US}</Text>
        <Text style={styles.text}>{TERMS_AND_CONDITIONS.TERMINATION_BY_YOU}</Text>
        <Text style={styles.subTitleText}>{TERMS_AND_CONDITIONS.CHANGES_TO_TERMS_TITLE}</Text>
        <Text style={styles.text}>{TERMS_AND_CONDITIONS.CHANGES_TO_TERMS_TEXT}</Text>
        <Text style={styles.subTitleText}>{TERMS_AND_CONDITIONS.CONTACT_INFORMATION_TITLE}</Text>
        <Text style={styles.text}>{TERMS_AND_CONDITIONS.CONTACT_INFORMATION_TEXT}</Text>
        <Text style={styles.text}>{TERMS_AND_CONDITIONS.SUPPORT_EMAIL}</Text>
        <Text style={styles.subTitleText}>{TERMS_AND_CONDITIONS.MISCELLANEOUS_TITLE}</Text>
        <Text style={styles.text}>{TERMS_AND_CONDITIONS.MISCELLANEOUS_ENTIRE_AGREEMENT}</Text>
        <Text style={styles.text}>{TERMS_AND_CONDITIONS.MISCELLANEOUS_SEVERABILITY}</Text>
        <Text style={styles.text}>{TERMS_AND_CONDITIONS.MISCELLANEOUS_WAIVER}</Text>
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
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
    text: {
      color: "white",
      fontSize: 15,
    },
    titleText: {
      color: "#ff7100",
      fontSize: 30,
    },
    subTitleText: {
      color: "#ff7100",
      fontSize: 20,
    },
  });
  