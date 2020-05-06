import React, { useState } from "react";
import { Text, StyleSheet, ScrollView, ImageBackground } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, restaurants, errorMessage] = useResults();

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
          onTermSubmit={() => searchApi(term)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
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
  },
});

export default SearchScreen;
