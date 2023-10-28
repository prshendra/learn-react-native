import { FlatList } from "react-native";

import PlaceItem from './PlaceItem'

const DATA = [
  {
    title: "Kos Ayani",
    imageUri: 'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540hendraprasetya%252FReactNativeApp/ImagePicker/bf158a5e-52e0-401b-bfb8-2b0d6136ff76.jpeg',
    address: "Jl. Merak No 12 Ahmad Yani Utara, Denpasar",
    location: { lat: 24.00000, lng: 100.0000, },
    id: Date.now().toString() + Math.random().toString(),
  },
  {
    title: "Kos Sesetan",
    imageUri: 'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540hendraprasetya%252FReactNativeApp/ImagePicker/8c22ccaf-21b2-4b08-8041-8b28a1c572c1.jpeg',
    address: "Jl. Sesetan No 600, Denpasar Selatan",
    location: { lat: 24.00000, lng: 100.0000, },
    id: Date.now().toString() + Math.random().toString(),
  }
]

function PlaceList() {
  return <FlatList
    data={DATA}
    renderItem={({ item }) => <PlaceItem place={item} style={{ marginBottom: 10 }} />}
    keyExtractor={item => item.id}
  />
}

export default PlaceList;
