import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';

function CreatePostScreen({navigation, route}) {
  const [postText, setPostText] = React.useState('');

  return (
    <View style={{flex: 1, alignContent: 'center', justifyContent: 'center', marginHorizontal: 20}}>
      <TextInput //
        multiline
        placeholder="What's on your mind?"
        style={{height: 200, padding: 10, backgroundColor: 'white'}}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass and merge params back to home screen
          navigation.navigate({
            name: 'Post',
            params: {post: postText},
            merge: true,
          });
        }}
      />
    </View>
  );
}

export default CreatePostScreen;
