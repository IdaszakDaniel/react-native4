import React from 'react';
import { TextInput, View, Text, Button, Picker } from 'react-native';
import styles from './detailsStyleSheet';

export default class DetailsEdit extends React.Component {

    constructor(props){
        super(props);
        this.state = this.props.element;
    }

    _cancel() {
        this.props.cancel();
    }

    render(){

        const labels = this.props.labels.map(label => (<Picker.Item key={label.id} label={label.label} value={label.id} />));

        return(
            <View style={styles.mainContainer}>
                <Text style={styles.label}>Title</Text>
                <TextInput style={styles.input} 
                    value={this.state.title} 
                    onChangeText={(title) => this.setState({...this.state,title})}
                />
                <Text style={styles.label}>Description</Text>
                <TextInput style={styles.input} 
                    value={this.state.description} 
                    onChangeText={(description) => this.setState({...this.state,description})}
                />
                <Text style={styles.label}>Label</Text>
                <Picker
                    selectedValue={this.state.labelId}
                    onValueChange={(itemValue, itemIndex) => { this.setState({...this.state, labelId: itemValue}) }}>
                    { labels }
                </Picker>
                <View>
                    <Button title="Save" disabled={!this.state.title} onPress={()=>{this.props.edit(this.state)}}></Button>
                    <Button title="cancel" onPress={() => this._cancel()}></Button>
                </View>
            </View>
        ) 
    }
}