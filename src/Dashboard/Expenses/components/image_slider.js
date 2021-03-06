import React, {Component} from 'react';
import { StyleSheet, Text, View, AppRegistry, Image, TouchableOpacity, Icon } from 'react-native';
import Carousel from 'react-native-carousel-view';

const ImageSlider = () => {
    return (
        <Carousel
            width={390}
            height={300}
            delay={2000}
            indicatorAtBottom={true}
            indicatorSize={14}
            indicatorColor="#7CFC00"
        >
            <View style={styles.contentContainer}>
                <Text style={{ fontSize: 20, fontWeight: '600', bottom: 50, color: '#A7A9AB' }}>THIS MONTH'S TAX SAVING</Text>
                <Text style={{ fontSize: 18, fontWeight: '600', color: 'orange', bottom: 35 }}>£0.00</Text>
                   <Image
                       style={{width: 150, height: 100}}
                       source={require('../../../assets/piggy_bank/piggy-bank.jpg')}
                   />
                <Text style={{ fontSize: 18, color: '#A7A9AB', top: 25 }}>No saving yet. Please start saving.</Text>
            </View>

            <View style={styles.contentContainer}>
                <Text style={{ fontSize: 20, fontWeight: '600', bottom: 50, color: '#A7A9AB' }}>THIS YEAR'S TAX SAVING</Text>
                <Text style={{ fontSize: 18, fontWeight: '600', color: 'orange', bottom: 35 }}>£0.00</Text>
                     <Image
                        style={{width: 150, height: 100}}
                        source={require('../../../assets/piggy_bank/piggy-bank.jpg')}
                     />
                 <Text style={{ fontSize: 18, color: '#A7A9AB', top: 25 }}>No saving yet. Please start saving.</Text>
            </View>
            <View style={styles.contentContainer}>
                <Text style={{ fontSize: 20, fontWeight: '600', bottom: 50, color: '#A7A9AB' }}>GET UNLIMITED SCANS</Text>
                <Text style={{ fontSize: 18, color: '#A7A9AB', top: 5, marginBottom: 60 }}>Faster processing and unlimited scans</Text>
                    <TouchableOpacity>
                        <View style={styles.goPrimeBtn}>
                            {/*<Icon name="trophy" style={{color: '#fff' }} />*/}
                            <Text style={styles.buttonText}>GO PRIME</Text>
                        </View>
                    </TouchableOpacity>
            </View>
        </Carousel>
    );
}

export default ImageSlider;

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    goPrimeBtn: {
       	backgroundColor: 'orange',
       	padding: 10,
       	borderWidth: 1,
       	borderRadius: 6,
       	borderColor: 'orange',
       	width: 160,
       	height: 40
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '500'
    },
    buttonIcon: {
        fontSize: 30,
        color: '#fff'
    }
});