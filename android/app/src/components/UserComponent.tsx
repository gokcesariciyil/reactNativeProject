import React, { useEffect, useState } from 'react';
import { View, Image, Text, ActivityIndicator, StyleSheet, SectionList, FlatList, ScrollView, PermissionsAndroid } from 'react-native';
import { getPopularShows } from '../services/tvmazeService';

const UserComponent = () => {
  const [popularShows, setPopularShows] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchPopularShows = async () => {
      try {
        const shows = await getPopularShows();
        setPopularShows(shows);
      } catch (error: any) {
        console.error('Error fetching popular shows:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPopularShows();
  }, []);

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    <View>
      <Text style={[styles.text]}>Movies</Text>
      <ScrollView style={styles.background}>
        {popularShows.map((show) => (
          <View style={styles.imageBorder} key={show.id} >
            <Image source={{ uri: show.image?.medium }} style={styles.image} />
            <Text style={styles.title} >{show.name}</Text>
            <Text style={styles.date}>{show.premiered}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  background: {
    backgroundColor: "black"
  },
  imageBorder: {
    textAlign: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  image: {
    padding: 20,
    width: 400,
    height: 550,
  },
  title: {
    fontSize: 30,
    color: "black",
    fontFamily: "sans-serif",
    textAlign: "center",
    backgroundColor: "#ffffff66",
    width: "100%",
    padding: 0,
    position: "absolute",
    top: "43%"
  },
  text: {
    fontSize: 35,
    marginTop: 0,
    padding: 10,
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
  },
  date: {
    fontSize: 20,
    color: "black",
    fontFamily: "sans-serif",
    textAlign: "center",
    backgroundColor: "#ffffff66",
    width: "100%",
    padding: 0,
    position: "absolute",
    top: "50.3%"
  }
});


export default UserComponent;
