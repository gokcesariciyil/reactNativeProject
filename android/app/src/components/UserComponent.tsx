import React, { useEffect, useState } from 'react';
import { View, Image, Text, ActivityIndicator } from 'react-native';
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
      } catch (error:any) {
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
      {popularShows.map((show) => (
        <View key={show.id}>
          <Image source={{ uri: show.image?.medium }} />
          <Text>{show.name}</Text>
          <Text>{show.premiered}</Text>
        </View>
      ))}
    </View>
  );
};

export default UserComponent;
