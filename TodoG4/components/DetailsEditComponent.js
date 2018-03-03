import React from 'react';
import { TextInput, View, Text, Button } from 'react-native';
import styles from './detailsStyleSheet';

export default function DetailsEdit(props){
    return(
        <View style={styles.mainContainer}>
            <Text style={styles.label}>Label</Text>
            <TextInput style={styles.input} value={props.element.label}/>
            <Text style={styles.label}>Label</Text>
            <TextInput style={styles.input} value={props.element.title}/>
            <Text style={styles.label}>Label</Text>
            <TextInput style={styles.input} value={props.element.desc}/>
            <View>
                <Button title="Save" onPress={props.edit}></Button>
            </View>
        </View>
    ) 
}