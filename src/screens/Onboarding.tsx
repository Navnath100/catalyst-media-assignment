import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import OnboardingSteps, { DoneButtonProps, DotProps } from 'react-native-onboarding-swiper';
import Entypo from 'react-native-vector-icons/Entypo';
import { NavigationProp } from '@react-navigation/native';

interface OnboardingProps {
    navigation: any
}

export default function Onboarding({ navigation }: OnboardingProps) {

    function DotComponent(props: DotProps) {
        return <Entypo name="dot-single" size={30} color={props.selected ? '#49A6FC' : '#9B9B9B'} />
    }

    function DoneButtonComponent(props: DoneButtonProps) {
        return <TouchableOpacity style={styles.doneBtn} onPress={props.onPress}><Entypo name="chevron-right" size={30} color='#fff' /></TouchableOpacity>
    }

    return (
        <OnboardingSteps
            pages={[
                {
                    backgroundColor: '#FFF',
                    image: <Image source={require('../assets/img/step-1.png')} />,
                    title: 'Scan anything in HD, wherever you are...',
                    subtitle: 'Simply launch the AirScan app and scan any document, papers or real world photographs in seconds. ',

                },
                {
                    backgroundColor: '#FFF',
                    image: <Image source={require('../assets/img/step-2.png')} />,
                    title: 'Navigate work documents like a Pro',
                    subtitle: 'Scan and organize your work documents in structured folders. Scan single or multiple documents in one swift go. Merge scans into PDFs, reorder pages and share them on the fly. ',
                },
                {
                    backgroundColor: '#FFF',
                    image: <Image source={require('../assets/img/step-3.png')} />,
                    title: 'Less time scanning homework = more time for fun',
                    subtitle: 'Scanning of homework and assignments are a breeze with AirScan. Capture scans, generate PDFs and push them to any app installed on your phone. Its that easy!',
                },
                {
                    backgroundColor: '#FFF',
                    image: <Image source={require('../assets/img/step-4.png')} />,
                    title: 'Covert Pictures to Text with our next generation offline OCR',
                    subtitle: 'Leverage our cutting edge machine learning OCR to convert documents to text in seconds with accurate results. Share OCR scans as Doc files or PDFs in seconds',
                }
            ]}
            showNext={false}
            showSkip={false}
            bottomBarColor='#FFF'
            DotComponent={DotComponent}
            DoneButtonComponent={DoneButtonComponent}
            titleStyles={styles.title}
            subTitleStyles={styles.description}
            onDone={() => navigation.navigate("Home")}
        />
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: "SF Pro Rounded",
        fontSize: 18,
        fontWeight: "500",
        lineHeight: 21,
        letterSpacing: 0,
        textAlign: "center"
    },
    description: {
        fontFamily: "SF Pro Rounded",
        fontSize: 14, "fontWeight": "500",
        lineHeight: 20,
        letterSpacing: 0,
        textAlign: "center"
    },
    doneBtn: {
        backgroundColor: '#49A6FC',
        borderRadius: 50,
        marginRight: 20,
        padding: 5
    }
})