import React from "react";
import { StyleSheet, Text, View, SectionList, TouchableOpacity, Image,Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";

const App = () => {

  const renderItem = ({ item }) => {
    return (
        <TouchableOpacity style={styles.opacityStyle}>
          {/* Name on the left */}
          <Text style={styles.textStyle}>{item.name}</Text>

          {/* Image on the right */}
          <Image
              source={{ uri: item.key }}
              style={styles.imageStyle}
          />
        </TouchableOpacity>
    );
  };

  const renderSectionHeader = ({ section: { title, bgColor,ico,colo } }) => (

      <View style={{ backgroundColor: bgColor }}>

        <Text style={[styles.headerText]}>

          <Icon name={ico} size={20} color={colo} />

          {title}</Text>

      </View>
  );

  return (
      <View style={{ marginBottom: 20, marginTop: 50 }}>
      <Text style={styles.title}>Honkai Star Rail Characters</Text>
        <Button title="Hi, i don't know if this is still needed but i will leave it here" onPress={() => alert("HEY, WHY DID YOU CLICK IT   :(")} />
        <SectionList
            sections={HSRList}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            keyExtractor={(item, index) => index.toString()}
        />
      </View>
  );
};

const HSRList = [
  {
    data: [
      { key: 'https://upload-os-bbs.hoyolab.com/upload/2024/03/28/92255794/697e5ae4ac54b1c925c40da41244f917_113333435264491190.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70',
        name: "Otto" },

      {key: 'https://upload-os-bbs.hoyolab.com/upload/2024/04/19/92255794/969b2e152a4ce504be2e31eb98e7e8b1_3010259064781328870.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70',
        name: "Adventurine"}
    ],
    title: "Male",
    bgColor: 'skyblue',
    ico:'man-symbol',//for some reason, "male","Male","ale-symbol" gives me "?"
    colo:'red'
  },
  {
    data: [
      { key: 'https://upload-os-bbs.hoyolab.com/upload/2024/04/17/92255794/d5ca9c3906f48cc544a7ce6ed816e39b_4239837240275990292.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70',
        name: "JingLiu" },
      { key: 'https://upload-os-bbs.hoyolab.com/upload/2024/03/29/92255794/597e49913429300436067987acd17511_2106364555203308727.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70',
        name: "Acheron" }

    ],
    title: "Female",
    bgColor: 'pink',
    ico:'female-symbol',//for some reason, "female","Female","female-symbol" gives me "?"
    colo:'red'

  }
];

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    margin: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  opacityStyle: {
    flexDirection: 'row',  // Align name and image horizontally
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',  // Center the items vertically
  },
  textStyle: {
    fontSize: 15,
    marginRight: 10,  // Add space between name and image
    textAlign: "left",
    flex: 1,  // Ensure the text occupies available space
  },
  imageStyle: {
    width: 200,  // Adjust image size
    height: 300, // Adjust image size
    borderRadius: 5,
  },
  title:{
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#ffdc00",
    padding:5,
    backgroundColor:"blue"
  }
});

export default App;
