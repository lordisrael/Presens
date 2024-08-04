import React from 'react';

import { TouchableOpacity, Text, Image } from 'react-native';
import styles from './screnHeader.styles';

export default function ScreenHeaderBtn({iconUrl, dimension, handlePress}) {
    return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
        <Image source={iconUrl} resizeMode='cover' style={styles.btnImg(dimension)}/>
    </TouchableOpacity>
    )
} 



