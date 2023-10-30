import { useEffect, useState } from "react";
import { FlatList } from "react-native";

import PlaceItem from "./PlaceItem";
import { fetchPlaces } from "../../util/database";
import { useIsFocused } from "@react-navigation/native";

function PlaceList() {
  const [places, setPlaces] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      (async () => {
        const places = await fetchPlaces();
        setPlaces(places);
      })();
    }
  }, [isFocused]);

  return (
    <FlatList
      data={places}
      renderItem={({ item }) => (
        <PlaceItem place={item} style={{ marginBottom: 10 }} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

export default PlaceList;
