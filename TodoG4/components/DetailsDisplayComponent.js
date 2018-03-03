import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import styles from './detailsStyleSheet';

export default function DetailsDisplay(props){
    return(
        <View style={styles.mainContainer}>
            <Text style={styles.label}>Label</Text>
            <Text style={styles.text}>{props.element.label}</Text>
            <Text style={styles.label}>Title</Text>
            <Text style={styles.text}>{props.element.title}</Text>
            <Text style={styles.label}>Description</Text>
            <Text style={styles.text}>{props.element.description}</Text>
        </View>
    ) 
}

