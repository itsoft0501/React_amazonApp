import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import useBook from "../hooks/useBook";

const BookDetailScreen = props => {
  const { id } = props.route.params;
  const [book, error] = useBook(id);

  if (error) {
    return (
      <Text style={{ color: "red", margin: 30 }}>Алдаа гарлаа! {error}</Text>
    );
  }

  if (!book) {
    return null;
  }

  return (
    <View style={{ padding: 20 }}>
      <Image
        style={{height: 270, width:350, alignSelf: "baseline" }}
        source={{ uri: "https://data.internom.mn/media/images" + book.photo }}
      />
      <Text style={{ fontSize: 15, fontWeight: "bold", padding: 10 }}>
        {book.name}
      </Text>
      <Text>{book.content}</Text>
      <View style={css.button}>
      <Button onPress={() => console.log('Дарагдлаа')}  title="Татах" />
      </View>
      <View style={css.button}>
      <Button onPress={() => props.navigation.goBack()}  title="Буцах" />
      </View>
    </View>
  );
};

export default BookDetailScreen;

const css = StyleSheet.create({
button: {
  marginVertical:5,
  borderRadius:10,
  marginTop:10
}
});
