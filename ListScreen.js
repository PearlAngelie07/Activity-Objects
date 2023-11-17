import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import data from './Data';

const ListScreen = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedItem(item)}>
      <Text style={styles.item}>{item.nickname}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<Text style={styles.header}>Nicknames</Text>}
      />

      <Modal visible={!!selectedItem} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          {selectedItem && (
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Full Information:</Text>
              <Text>{`Name: ${selectedItem.firstName} ${selectedItem.lastName}`}</Text>
              <Text>{`Nickname: ${selectedItem.nickname}`}</Text>
              <Text>{`Course: ${selectedItem.course}`}</Text>
              <Text>{`Year: ${selectedItem.year}`}</Text>
              <TouchableOpacity onPress={() => setSelectedItem(null)}>
                <Text style={styles.closeButton}>Close</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth:3,
    borderColor:'#000d33',
    backgroundColor: '#bebef3',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  item: {
    padding: 15,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#e6e6fa',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    borderWidth:3,
    borderColor:'#9393eb',
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  closeButton: {
    color: 'black',
    fontSize: 17,
    marginTop: 10,
    textAlign: 'center',
    fontWeight:'500'
  },
});

export default ListScreen;
