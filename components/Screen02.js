import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet, FlatList } from "react-native";
import image01 from '../assets/image01.png'
import image02 from '../assets/image02.png'
import image03 from '../assets/image03.png'
function Screen02({ navigation }) {
    const [type, setType] = useState("All");
    const bike = [
        {
            name: 'Pinarello',
            price: '1800',
            sale: '20%',
            old_price: '2100',
            image: image01,
        },
        {
            name: 'Pinarello',
            price: '1800',
            sale: '20%',
            old_price: '2100',
            image: image02,
        },
        {
            name: 'Pinarello',
            price: '1800',
            sale: '20%',
            old_price: '2100',
            image: image03,
        },
        {
            name: 'Pinarello',
            price: '1800',
            sale: '20%',
            old_price: '2100',
            image: image01,
        },
        {
            name: 'Pinarello',
            price: '1800',
            sale: '20%',
            old_price: '2100',
            image: image02,
        },
        {
            name: 'Pinarello',
            price: '1800',
            sale: '20%',
            old_price: '2100',
            image: image03,
        },

    ]

  
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text style={{ fontWeight: "700", fontSize: 24, color: "red" }}>
        The world's Best Bike
      </Text>
      <View style={styles.filter}>
        <TouchableOpacity
          style={[
            styles.filterContainer,
            type === "All" && styles.selectedButton,
          ]}
          onPress={() => setType("All")}
        >
          <Text
            style={[
                styles.text,
                type === "All" && styles.selectedText,
              ]}
          >All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterContainer,
            type === "Roadbike" && styles.selectedButton,
          ]}
          onPress={() => setType("Roadbike")}
        >
          <Text
             style={[
                styles.text,
                type === "Roadbike" && styles.selectedText,
              ]}
          >Roadbike</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterContainer,
            type === "Mountain" && styles.selectedButton,
          ]}
          onPress={() => setType("Mountain")}
        >
          <Text
             style={[
                styles.text,
                type === "Mountain" && styles.selectedText,
              ]}
          >Mountain</Text>
        </TouchableOpacity>
      </View>
        <FlatList 
            data={bike}
            renderItem={({item}) => (
                <View style={styles.itemContainer}>
                    <TouchableOpacity onPress={() =>navigation.navigate('Screen03', {
                        name: item.name,
                        price: item.price,
                        sale: item.sale,
                        old_price: item.old_price,
                        image: item.image
                    })}>
                    <Image source={item.image} style={{width: 150, height: 100}}/>
                    <Text style={{marginTop: 10}}>{item.name}</Text>
                    <Text style={{fontWeight: '700', marginTop: 10}}>${item.price}</Text>
                    </TouchableOpacity>
                </View>
            )}
           
            numColumns={2}
        />
    </View>
  );
}
export default Screen02;

const styles = StyleSheet.create({
  filter: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10
  },
  filterContainer: {
    width: 100,
    height: 40,
    backgroundColor: "#fff",
    borderColor: "red",
    borderWidth: 1,
    marginRight: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
    color: 'gray'
  },    
  selectedText: {
    color: 'red'
  },
  itemContainer:{
    width: 150,
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 40,
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: '#F7BA8326'
  }
});
