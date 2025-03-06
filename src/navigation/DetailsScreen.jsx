import React, { useState } from "react";
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, Image } from "react-native";
import { Icon } from '@rneui/base';
import { LinearGradient } from 'expo-linear-gradient';
import Slider from '@react-native-community/slider';

const DetailsScreen = ({ route, navigation }) => {
    const { title, artist, img } = route.params;
    const [progress, setProgress] = useState(0);

    return (
        <View style={{ flex: 1, backgroundColor: '#000' }}>
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 0, height: 50, marginTop: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff', marginTop: 20 }}>
                        Defqon.1 Weekend Festival 2022
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 3, paddingHorizontal: 15 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <View>
                            <Icon type="material-community" name="arrow-left" size={30} color={'#fff'} />
                        </View>
                    </TouchableOpacity>
                    <View>
                        <Icon type="material-community" name="dots-vertical" size={22} color={'#fff'} />
                    </View>
                </View>
                <View>

                </View>
            </View>
            <View>
                <ImageBackground source={img} style={{ height: 450 }}>
                    <View>
                        <LinearGradient
                            colors={['rgba(0, 0, 0, 0.8)', 'transparent']}
                            style={{ position: 'absolte ', height: '600', width: '100%', marginTop: 0 }}
                        />
                        <LinearGradient
                            colors={['rgba(0, 0, 0, 0.8)', 'transparent']}
                            style={{ position: 'absolte ', height: '600', width: '100%', marginTop: -600 }}
                        />
                        <LinearGradient
                            colors={['rgba(0, 0, 0, 0.8)', 'transparent']}
                            style={{ position: 'absolte ', height: '500', width: '100%', marginTop: -600, }}
                            start={[0, 1]}
                            end={[0, 0]}
                        />

                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: -480, }}>
                        <Image source={img} style={{ height: 325, width: 325, borderRadius: 10 }} />
                    </View>
                    <View style={{ justifyContent: 'flex-start', marginTop: 70, paddingHorizontal: 50 }}>
                        <Text style={{ color: '#fff', fontSize: 28, fontWeight: 'bold' }}>
                            {title}
                        </Text>
                        <Text style={{ color: '#fff', fontSize: 22 }}>
                            {artist}
                        </Text>

                    </View>
                </ImageBackground>
            </View>
            <View style={{marginTop: 50, paddingHorizontal: 20}}>
                <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={1}
                    value={progress}
                    onValueChange={value => setProgress(value)}
                    minimumTrackTintColor="#fff"
                    maximumTrackTintColor="#fff"
                    thumbTintColor="#fff"
                />
                <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:15}}>
                    <Text style={{color:'#fff'}}>0:00</Text>
                    <Text style={{color:'#fff'}}>3:45</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'flex-start', paddingHorizontal:15, marginTop: 10}}>
                    <Icon type="material-community" name="shuffle" size={22} color={'#fff'} />
                </View>
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:80, marginTop: 5}}>
                    <Icon type="material-community" name="skip-previous" size={40} color={'#fff'} />
                    <Icon type="material-community" name="play-circle" size={60} color={'#fff'} />
                    <Icon type="material-community" name="skip-next" size={40} color={'#fff'} />
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:15, marginTop: 10}}>
                    <Icon type="material-community" name="ipod" size={22} color={'#fff'} />
                    <Icon type="material-community" name="arrow-left" size={30} color={'#fff'} />
                </View>
                <View style={{flexDirection:'row', paddingHorizontal:15, marginTop: 10, backgroundColor : '#fff', padding: 10, borderRadius: 10, height: 50}}>
                    <Text style={{color:'#000', fontSize: 20, marginLeft: 10, fontWeight:'bold'}}>Lyrics</Text>
                </View>
            </View>
        </View>
    );
};

export default DetailsScreen;

const styles = StyleSheet.create({
    infoContainer: {
        padding: 20,
    },
    infoText: {
        fontSize: 18,
        color: '#fff',
    },
});
