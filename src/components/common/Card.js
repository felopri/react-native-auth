import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.cardStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  cardStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#DDD',
    borderBottomWidth: 0,
    shadowColor: '#666',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginTop: 10,
    marginRight: 5,
    marginLeft: 5
  }
};

export { Card };
