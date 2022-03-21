import React from 'react';
import { ScrollView } from 'react-native';
import { Card, Badge, Text } from 'react-native-elements';

import { connect } from 'react-redux';

function GalleryScreen(props) {

  let cardList = props.pictureUrlList.map((url, i) => {
    return (
      <Card key={i}>
        <Card.Image
          style={{ width: '100%', height: 170, marginBottom: 10 }}
          source={{ uri: url.url }}
        />
        <Badge status="success" value={url.IAresult[0].gender} />
        <Badge status="success" value={url.IAresult[0].age} />
        <Badge status="success" value="barbe" />
        <Badge status="success" value="joyeux !" />
        <Badge status="success" value="cheveux gris" />
      </Card>
    );
  });

  return (
    <ScrollView style={{ marginTop: 25 }}>

      <Text h4 style={{ textAlign: 'center' }}>{props.pseudo}'s Gallery !</Text>

      {cardList}

    </ScrollView>
  );
}

function mapStateToProps(state) {
  return { pictureUrlList: state.pictureUrlList, pseudo: state.pseudo, IAresult: state.IAresult }
}

export default connect(
  mapStateToProps,
  null
)(GalleryScreen);
