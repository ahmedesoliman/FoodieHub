import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  Dimensions,
  Platform,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import { markers } from "../models/mapData";
import SwitchSelector from "react-native-switch-selector";
import SelectDropdown from "react-native-select-dropdown";

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

const ExploreScreen = () => {
  const initialMapState = {
    markers,
    categories: [],
    region: {
      latitude: 40.754932,
      longitude: -73.984016,
      latitudeDelta: 0.0,
      longitudeDelta: 0.0,
    },
  };
  const [state, setState] = React.useState(initialMapState);

  let mapIndex = 0;
  let mapAnimation = new Animated.Value(0);

  useEffect(() => {
    mapAnimation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      if (index >= state.markers.length) {
        index = state.markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(regionTimeout);

      const regionTimeout = setTimeout(() => {
        if (mapIndex !== index) {
          mapIndex = index;
          const { coordinate } = state.markers[index];
          _map.current.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: state.region.latitudeDelta,
              longitudeDelta: state.region.longitudeDelta,
            },
            350
          );
        }
      }, 10);
    });
  });

  const interpolations = state.markers.map((marker, index) => {
    const inputRange = [
      (index - 1) * CARD_WIDTH,
      index * CARD_WIDTH,
      (index + 1) * CARD_WIDTH,
    ];

    const scale = mapAnimation.interpolate({
      inputRange,
      outputRange: [1, 1.2, 1],
      extrapolate: "clamp",
    });

    return { scale };
  });

  const onMarkerPress = (mapEventData) => {
    const markerID = mapEventData._targetInst.return.key;

    let x = markerID * CARD_WIDTH + markerID * 20;
    if (Platform.OS === "ios") {
      x = x - SPACING_FOR_CARD_INSET;
    }

    _scrollView.current.scrollTo({ x: x, y: 0, animated: true });
  };

  const _map = React.useRef(null);
  const _scrollView = React.useRef(null);

  const properties = ["Bunglow/House", "Office", "Flat", "Open Ground"];
  return (
    <View
      style={{
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
      }}
    >
      <MapView
        ref={_map}
        region={state.region}
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
        }}
      >
        {state.markers.map((marker, index) => {
          const scaleStyle = {
            transform: [
              {
                scale: interpolations[index].scale,
              },
            ],
          };
          return (
            <MapView.Marker
              key={index}
              coordinate={marker.coordinate}
              onPress={(e) => onMarkerPress(e)}
            >
              <Animated.View style={scaleStyle}>
                <Animated.View style={[styles.markerWrap]}>
                  <Animated.Image
                    source={marker.icon}
                    style={[styles.marker]}
                    resizeMode="cover"
                  />
                  <Text style={styles.name}>{marker.price}</Text>
                </Animated.View>
                <View style={styles.arrowBorder} />
                <View style={styles.arrow} />
              </Animated.View>
            </MapView.Marker>
          );
        })}
      </MapView>

      <View style={styles.header}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => {}}
            style={[
              styles.signIn,
              {
                marginRight: 5,
              },
            ]}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: "#1e90ff",
                  paddingTop: 5,
                  paddingLeft: 10,
                  fontSize: 18,
                  marginBottom: 5,
                },
              ]}
            >
              List
            </Text>
          </TouchableOpacity>
          <View style={styles.searchBox}>
            <Image
              source={require("../assets/search.png")}
              style={{ marginTop: 5, marginRight: 10, width: 20, height: 20 }}
            />
            <TextInput
              placeholder="Search location"
              placeholderTextColor="gray"
              autoCapitalize="none"
              style={{ flex: 1, padding: 0, color: "black" }}
            />
          </View>
          <TouchableOpacity
            onPress={() => {}}
            style={[
              styles.signIn,
              {
                marginLeft: 5,
              },
            ]}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: "#1e90ff",
                  paddingTop: 10,
                  paddingLeft: 10,
                },
              ]}
            >
              Filter
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <SelectDropdown
            data={properties}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={{
              marginTop: 10,
              width: 145,
              height: 30,
            }}
            dropdownIconPosition="right"
            defaultButtonText="Property Type"
            buttonTextStyle={{
              fontSize: 14,
              color: "#1e90ff",
              fontWeight: "bold",
            }}
          />
          <SwitchSelector
            initial={0}
            textColor="gray" //'#7a44cf'
            selectedColor="#fff"
            buttonColor="#1e90ff"
            borderColor="#1e90ff"
            hasPadding
            options={[
              { label: "Buy", value: "b" },
              { label: "Rent", value: "r" },
            ]}
            testID="buy-rent-selector"
            accessibilityLabel="buy-rent-selector"
            style={{ marginTop: 10, marginLeft: 5, width: 100 }}
            height={30}
            bold={true}
          />
          <SwitchSelector
            initial={0}
            textColor="gray" //'#7a44cf'
            selectedColor="#fff"
            buttonColor="#1e90ff"
            borderColor="#1e90ff"
            hasPadding
            options={[
              { label: "Agent", value: "a" },
              { label: "Owner", value: "o" },
            ]}
            testID="customer-selector"
            accessibilityLabel="customer-selector"
            style={{ marginTop: 10, marginLeft: 5, width: 100 }}
            height={30}
            bold={true}
          />
        </View>
      </View>

      <Animated.ScrollView
        ref={_scrollView}
        horizontal
        pagingEnabled
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + 20}
        snapToAlignment="center"
        contentInset={{
          top: 0,
          left: SPACING_FOR_CARD_INSET,
          bottom: 0,
          right: SPACING_FOR_CARD_INSET,
        }}
        contentContainerStyle={{
          paddingHorizontal:
            Platform.OS === "android" ? SPACING_FOR_CARD_INSET : 0,
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: mapAnimation,
                },
              },
            },
          ],
          { useNativeDriver: true }
        )}
        style={styles.scrollView}
      >
        {state.markers.map((marker, index) => (
          <View style={styles.card} key={index}>
            <Image
              source={marker.image}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <TouchableOpacity>
              <View style={styles.textContent}>
                <Text numberOfLines={1} style={styles.cardtitle}>
                  <Text>&#8377; </Text>
                  {marker.price}
                </Text>
                <Text numberOfLines={1} style={styles.baseprice}>
                  <Text>&#8377; </Text>
                  {marker.baseprice}
                </Text>
              </View>
              <View style={styles.textContent2}>
                <View style={{ flexDirection: "row", paddingBottom: 5 }}>
                  <Image source={marker.f1_icon} style={styles.bottomicon} />
                  <Text style={styles.cardDescription}>{marker.feature1}</Text>
                  <Image source={marker.f2_icon} style={styles.bottomicon} />
                  <Text style={styles.cardDescription}>{marker.feature2}</Text>
                  <Image source={marker.f3_icon} style={styles.bottomicon} />
                  <Text style={styles.cardDescription}>{marker.feature3}</Text>
                </View>
                <Text numberOfLines={1} style={styles.cardDescription}>
                  {marker.address}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </Animated.ScrollView>
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  //   map: {
  //     height: '100%',
  //   },
  //   container: {
  //     flexDirection: 'column',
  //     alignSelf: 'flex-start',
  //   },
  //   // Callout bubble
  //   bubble: {
  //     FlexDirection: 'column',
  //     alignSelf: 'flex-start',
  //     backgroundColor: '#fff',
  //     borderRadius: 6,
  //     borderColor: '#ccc',
  //     borderWidth: 0.5,
  //     padding: 15,
  //     width: 150,
  //   },
  //   // Arrow becow the bubble
  header: {
    position: "absolute",
    flexDirection: "column",
    backgroundColor: "white",
    width: "100%",
    height: "13%",
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    //justifyContent: 'center',
  },
  arrow: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "maroon",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "maroon",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -0.5,
  },
  //   // Character name
  name: {
    fontSize: 16,
    marginLeft: 10,
    color: "white",
  },
  //   // Character image
  //   image: {
  //     width: 120,
  //     height: 80,
  //   },
  container: {
    flex: 1,
  },
  searchBox: {
    flexDirection: "row",
    backgroundColor: "lightgray",
    marginTop: 5,
    width: "65%",
    height: 40,
    borderRadius: 5,
    padding: 10,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  chipsScrollView: {
    position: "absolute",
    top: Platform.OS === "ios" ? 90 : 80,
    paddingHorizontal: 10,
  },
  chipsIcon: {
    marginRight: 5,
  },
  chipsItem: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 8,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    height: 35,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  scrollView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    // padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    flexDirection: "row",
  },
  textContent2: {
    //flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
  },
  cardtitle: {
    fontSize: 18,
    // marginTop: 5,
    fontWeight: "bold",
    color: "black",
  },
  baseprice: {
    fontSize: 14,
    color: "gray",
    fontWeight: "bold",
    marginLeft: 30,
    marginTop: 5,
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  markerWrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    height: 30,
    backgroundColor: "maroon",
    borderRadius: 15,
  },
  marker: {
    width: 20,
    height: 20,
    backgroundColor: "white",
    borderRadius: 6,
  },
  bottomicon: {
    width: 18,
    height: 18,
    marginRight: 5,
    marginLeft: 10,
  },
  button: {
    alignItems: "center",
    marginTop: 5,
  },
  signIn: {
    width: "15%",
    height: 40,
    marginTop: 5,
    borderRadius: 3,
  },
  textSign: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
