import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function BottomTabsHome() {
    const [scans, setScans] = useState(["https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTVzviMFjl5D9T62jx9CtMDsUUpJ1Dca04E4ZJwMVpyVMKehk1r", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNtshyn61mrcTUCU6Kfn3XHmmXdPzs8ln47kRASzZtGiaAWxky", "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRxu3m2c2CReIv5Z37wgPD07Qcu3GIooZEFPmWihOLBD6-SBw3t"])

    const InputWithIcon = () => {
        return (
            <View style={styles.searchTextInput}>
                <Feather name="search" size={20} color="#606060" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Search through your scans"
                    placeholderTextColor="gray"
                />
            </View>
        );
    };

    function renderScan({ item }: any) {
        return (
            <View>
                <Image style={styles.scanItem} source={{ uri: item }} />
                <Text style={styles.scanFloatingTag}>2d ago</Text>
            </View>
        )
    }

    return (
        <ScrollView>
            <LinearGradient colors={['#DEDDDD', '#fff']} style={styles.container}>

                <View style={styles.headerWrapper}>
                    <View>
                        <Text style={styles.headline}>Good Evening</Text>
                        <Text style={styles.title}>Welcome back</Text>
                    </View>
                    <Image source={require('../../assets/img/king.png')} />
                </View>

                <LinearGradient
                    colors={['#0563DB', '#0F8CFF', '#0252CA']}
                    style={styles.linearGradient}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                >
                    <View style={styles.premiumBanner}>
                        <View style={styles.proTagContainer}><Text style={styles.proTag}>Pro</Text></View>
                        <Text style={styles.unloackPremium}>Unlock Premium</Text>
                        <Text style={styles.description}>Create Unlimited HD Scan & Picture to Text Scans without watermarks</Text>
                    </View>
                </LinearGradient>

                <InputWithIcon />

                <View style={styles.scanOptions}>
                    <TouchableOpacity style={styles.option}>
                        <MaterialIcons name='article' size={30} color={'#49A6FC'} />
                        <Text style={styles.caption}>Single Scan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option}>
                        <MaterialIcons name='article' size={30} color={'#49A6FC'} />
                        <Image style={styles.overlapingIcon} source={require('../../assets/img/article-black.png')} />
                        <Text style={styles.caption}>Single Scan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option}>
                        <Image style={styles.overlapingIcon} source={require('../../assets/img/t.png')} />
                        <MaterialIcons name='article' size={30} color={'#49A6FC'} />
                        <Text style={styles.caption}>Single Scan</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Recent Scans</Text>
                    <FlatList
                        horizontal={true}
                        scrollEnabled={true}
                        data={scans}
                        renderItem={renderScan}
                        keyExtractor={(i, index) => index.toString()}
                        contentContainerStyle={{
                            flexGrow: 1,
                        }}
                    />
                </View>

                <View style={styles.sectionContainer}>
                    <View style={styles.folderSection}>
                        <Text style={styles.sectionTitle}>Folders</Text>
                        <Image source={require('../../assets/img/folder-plus.png')} />
                    </View>
                </View>

            </LinearGradient>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    headerWrapper: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    headline: {
        fontFamily: "SF Pro Rounded",
        fontSize: 34,
        fontWeight: "700",
        lineHeight: 41,
        letterSpacing: 0,
        textAlign: "left",
        color: '#000'
    },
    title: {
        fontFamily: "SF Pro Rounded",
        fontSize: 18,
        fontWeight: "500",
        lineHeight: 21,
        textAlign: "left",
        color: '#9B9B9B'
    },
    premiumBanner: {
        flexDirection: "column",
        padding: 10,
        borderRadius: 10,
        alignItems: 'flex-start'
    },
    linearGradient: {
        borderRadius: 10,
        marginVertical: 20
    },
    unloackPremium: {
        fontFamily: "'SF Pro Rounded'",
        fontWeight: "700",
        fontSize: 18,
        color: "#FFFFFF",
    },
    description: {
        fontFamily: "'SF Pro Rounded'",
        fontSize: 12,
        color: "#FFFFFF",
        order: 1,
        flexGrow: 0
    },
    proTag: {
        backgroundColor: 'transparent',
        color: '#fff',
        transform: [{ rotate: '45deg' }],
        padding: 5
    },
    proTagContainer: {
        position: 'absolute',
        right: 0,
        top: 0,
        padding: 5,
        backgroundColor: '#49A6FC',
        borderBottomLeftRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 10
    },
    searchTextInput: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        paddingHorizontal: 5,
        marginVertical: 5
    },
    input: {
        flex: 1,
        paddingLeft: 10,
    },
    icon: {
        marginLeft: 10,
    },
    scanOptions: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginVertical: 20,
    },
    option: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        margin: 10
    },
    caption: {
        fontFamily: "SF Pro Rounded",
        fontSize: 12,
        fontWeight: "700",
        lineHeight: 14,
        textAlign: "left"
    },
    overlapingIcon: {
        position: 'absolute',
        zIndex: 1,
        top: 0,
        right: 20,
        backgroundColor: '#fff'
    },
    sectionTitle: {
        fontFamily: "SF Pro Rounded",
        fontSize: 20,
        fontWeight: "700",
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: "left",
        color: '#000'
    },
    scanItem: {
        height: 200,
        width: 200,
        margin: 5,
        borderRadius: 10,
        flex: 1,
        backgroundColor: '#888'
    },
    scanFloatingTag: {
        alignSelf: 'flex-start',
        fontFamily: "SF Pro Rounded",
        fontSize: 12,
        fontWeight: "700",
        lineHeight: 14,
        letterSpacing: 0,
        textAlign: "left",
        bottom: 40,
        left: 15,
        backgroundColor: '#49A6FC',
        color: '#fff',
        borderRadius: 5,
        padding: 5
    },
    folderSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    sectionContainer: {
        flex: 1,
        position: "relative",
        marginVertical: 15,
    }

})

