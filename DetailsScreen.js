import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Full Information:</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>{`Name:`}</Text>
        <Text style={styles.infoText}>{`${item.firstName} ${item.lastName}`}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>{`Nickname:`}</Text>
        <Text style={styles.infoText}>{`${item.nickname}`}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>{`Course:`}</Text>
        <Text style={styles.infoText}>{`${item.course}`}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>{`Year:`}</Text>
        <Text style={styles.infoText}>{`${item.year}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoLabel: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  infoText: {
    flex: 1,
  },
});

export default DetailsScreen;
