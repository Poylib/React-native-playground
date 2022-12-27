import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import PreviewLayout from '../components/PreviewLayout';
const HomeScreen = ({navigation}) => {
  const [flexDirection, setFlexDirection] = useState('column');
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <PreviewLayout //
        label="flexDirection"
        values={['column', 'row', 'row-reverse', 'column-reverse']}
        selectedValue={flexDirection}
        setSelectedValue={setFlexDirection}>
        <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
        <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
        <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
      </PreviewLayout>
      <Button //
        title="Go to Details"
        onPress={() =>
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          })
        }
      />
      <Button title="Go to Post" onPress={() => navigation.navigate('Post')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 40,
  },
  box: {
    width: 50,
    height: 50,
  },
});

export default HomeScreen;
