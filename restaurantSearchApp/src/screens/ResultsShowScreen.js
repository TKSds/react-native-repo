import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ImageBackground,
} from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <>
      <ImageBackground
        source={{
          uri:
            "https://i.pinimg.com/originals/fe/e1/91/fee191df62901fc2222d2a0d33984b9e.jpg",
        }}
        style={styles.imageBackground}
      >
        <Text style={styles.titleStyle}>{result.name}</Text>
        <View style={styles.viewStyle}>
          <FlatList
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({ item }) => {
              return <Image style={styles.imageStyle} source={{ uri: item }} />;
            }}
          />
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: 300,
    marginBottom: 10,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
    color: "white",
    textAlign: "center",
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
  },
  viewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ResultsShowScreen;
