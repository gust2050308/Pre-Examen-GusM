import React from "react";
import { View, Image, Text, StyleSheet, ScrollView, ImageBackground, TouchableOpacity } from "react-native";
import { Avatar, Icon } from '@rneui/base';
import { LinearGradient } from 'expo-linear-gradient';

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: '#101010' }}>
            <View style={styles.imageContainer}>
                <ImageBackground source={require('../img/77364.jpg')} style={styles.background}>
                    <View>
                        <LinearGradient
                            colors={['rgba(0, 0, 0, 0.8)', 'transparent']}
                            style={{ position: 'relative', height: '100%', width: '100%', marginTop: -50 }}
                        />
                        <View style={styles.iconContainer}>
                            <Icon type="material-community" name="heart-outline" size={22} color={'#fff'} />
                            <View style={styles.innerIconContainer}>
                                <Icon type="material-community" name="heart" size={22} color={'#fff'} />
                                <Icon type="material-community" name="dots-vertical" size={22} color={'#fff'} />
                            </View>
                        </View>
                    </View>
                    <View style={{ height: 100 }}>
                        <LinearGradient
                            colors={['rgba(0, 0, 0, 0.8)', 'transparent']}
                            style={styles.topFade}
                            start={[0, 0]}
                            end={[1, 0]}
                        />
                        <View style={{ marginTop: -80 }}>
                            <Text style={styles.titleText}>
                                Defqon.1 Weekend Festival 2022
                            </Text>
                            <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 10, marginTop: 8 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15 }}>
                                    <Icon type="material-community" name="heart-outline" size={18} color={'#8D8D8D'} />
                                    <Text style={{ marginLeft: 8, color: '#8D8D8D' }}>3,800,544</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15 }}>
                                    <Icon type="material-community" name="clock-outline" size={18} color={'#8D8D8D'} />
                                    <Text style={{ marginLeft: 8, color: '#8D8D8D' }}>2 h 25 min</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20 }}>
                <Text style={{ color: '#fff', fontSize: 22, fontWeight: 'bold' }}>Features</Text>
                <View style={{ marginTop: -65, marginLeft: 200 }}>
                    <Image source={require('../img/play-button.png')} style={{ height: 60, width: 60 }} />
                </View>
            </View>
            <View>
                <ScrollView style={{ position: 'relative', bottom: 0, width: '100%', height: '100%', backgroundColor: '#101010' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Details', { title: 'No Guts No Glory', artist: 'Ran D, Skits Victus', img: require('../img/song1.jpeg') })}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, backgroundColor: '#101010', height: 90 }}>
                            <View style={{ alignItems: 'center' }} padding={0}>
                                <Image source={require('../img/song1.jpeg')} style={{ height: 70, width: 70, borderRadius: 10 }} />
                            </View>
                            <View style={{ flexDirection: 'column', justifyContent: 'center', marginLeft: 10, width: 220 }}>
                                <Text style={{ color: '#fff', fontSize: 22 }}>No Guts No Glory</Text>
                                <Text style={{ color: '#6A6A6A', fontSize: 18 }}>Ran D, Skits Victus</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 60 }}>
                                <Icon type="material-community" name="heart" size={22} color={'#00B400'} />
                                <Icon type="material-community" name="dots-horizontal" size={22} color={'#fff'} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Details', { title: 'World Of Madness', artist: 'HeadHunterz', img: require('../img/portada.png') })}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, backgroundColor: '#101010', height: 90 }}>
                            <View style={{ alignItems: 'center' }} padding={0}>
                                <Image source={require('../img/portada.png')} style={{ height: 70, width: 70, borderRadius: 10 }} />
                            </View>
                            <View style={{ flexDirection: 'column', justifyContent: 'center', marginLeft: 10, width: 220 }}>
                                <Text style={{ color: '#fff', fontSize: 22 }}>World Of Madness</Text>
                                <Text style={{ color: '#6A6A6A', fontSize: 18 }}>HeadHunterz</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 60 }}>
                                <Icon type="material-community" name="heart" size={22} color={'#00B400'} />
                                <Icon type="material-community" name="dots-horizontal" size={22} color={'#fff'} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Details', { title: 'Lose My Mind', artist: 'Brennan Heart', img: require('../img/porta.png') })}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, backgroundColor: '#101010', height: 90 }}>
                            <View style={{ alignItems: 'center' }} padding={0}>
                                <Image source={require('../img/porta.png')} style={{ height: 70, width: 70, borderRadius: 10 }} />
                            </View>
                            <View style={{ flexDirection: 'column', justifyContent: 'center', marginLeft: 10, width: 220 }}>
                                <Text style={{ color: '#fff', fontSize: 22 }}>Lose My Mind</Text>
                                <Text style={{ color: '#6A6A6A', fontSize: 18 }}>Brennan Heart</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 60 }}>
                                <Icon type="material-community" name="heart" size={22} color={'#00B400'} />
                                <Icon type="material-community" name="dots-horizontal" size={22} color={'#fff'} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Details', { title: 'Scrap Attack', artist: 'HeadHunterz', img: require('../img/def1.jpg') })}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, backgroundColor: '#101010', height: 90 }}>
                            <View style={{ alignItems: 'center' }} padding={0}>
                                <Image source={require('../img/def1.jpg')} style={{ height: 70, width: 70, borderRadius: 10 }} />
                            </View>
                            <View style={{ flexDirection: 'column', justifyContent: 'center', marginLeft: 10, width: 220 }}>
                                <Text style={{ color: '#fff', fontSize: 22 }}>Scrap Attack</Text>
                                <Text style={{ color: '#6A6A6A', fontSize: 18 }}>HeadHunterz</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 60 }}>
                                <Icon type="material-community" name="heart" size={22} color={'#00B400'} />
                                <Icon type="material-community" name="dots-horizontal" size={22} color={'#fff'} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    imageContainer: {
        position: 'relative',
        width: '100%',
        height: 350,
    },
    background: {
        flex: 1,
        justifyContent: 'center',
    },
    topFade: {
        position: 'relative',
        height: '100%',
        marginTop: 22,
    },
    iconContainer: {
        flexDirection: 'row',
        marginTop: -155,
        padding: 20,
        justifyContent: 'space-between',
        position: 'relative',
        zIndex: 1,
    },
    innerIconContainer: {
        width: 60,
        flexDirection: 'row',
        flex: 0,
        justifyContent: 'space-between',
    },
    titleText: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 0,
        fontFamily: 'Gotham',
        position: 'relative',
        zIndex: 1,
    },
});
