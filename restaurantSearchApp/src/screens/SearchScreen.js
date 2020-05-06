import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Picker,
  View,
} from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, restaurants, errorMessage, location] = useResults();
  const [searchLocation, setSearchLocation] = useState("Paris");

  const filterResultsByPrice = (price) => {
    // price === '€' || '€€' || '€€€'
    return restaurants.filter((restaurant) => {
      return restaurant.price === price;
    });
  };

  return (
    <>
      <ImageBackground
        source={{
          uri:
            "https://i.pinimg.com/originals/fe/e1/91/fee191df62901fc2222d2a0d33984b9e.jpg",
        }}
        style={styles.imageBackground}
      >
        <SearchBar
          term={term}
          onTermChange={setTerm}
          onTermSubmit={() => searchApi(term, searchLocation)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>Searching for restaurants in:</Text>
          <Picker
            selectedValue={searchLocation}
            style={styles.pickerStyle}
            itemStyle={styles.textStyle}
            onValueChange={(itemValue) => setSearchLocation(itemValue)}
          >
            <Picker.Item label="Paris" value="Paris" />
            <Picker.Item label="Madrid" value="Madrid" />
            <Picker.Item label="New York" value="New York" />
            <Picker.Item label="Viena" value="Viena" />
            <Picker.Item label="Amsterdam" value="Amsterdam" />
          </Picker>
        </View>

        <ScrollView>
          <ResultsList
            title="Cost Effective"
            restaurants={filterResultsByPrice("€")}
          />
          <ResultsList
            title="Bit Pricier"
            restaurants={filterResultsByPrice("€€")}
          />
          <ResultsList
            title="Big Spender"
            restaurants={filterResultsByPrice("€€€")}
          />
        </ScrollView>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    opacity: 0.9,
  },
  textStyle: {
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
    color: "white",
    fontSize: 18,
  },
  pickerStyle: {
    height: 100,
    width: 200,
    color: "white",
    fontWeight: "bold",
    marginBottom: 5,
  },
  viewStyle: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    height: 60,
  },
});

export default SearchScreen;
