import React from 'react'
import { Text ,StyleSheet,View,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CheckoutComponent = ({navigation}) => {
    return (
        <View>
          <Text style={{textAlign: 'center', color: 'green'}}>
            Checkout successfull
          </Text>
          <Icon
            style={{textAlign: 'center'}}
            name="checkmark-done"
            color="green"
            size={150}
          />
          <TouchableOpacity
            style={styles.Touchable}
            onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={styles.TouchableText}>BUY MORE</Text>
          </TouchableOpacity>
        </View>
            
    )
};

const styles = StyleSheet.create({
    Touchable: {
      marginTop: 10,
      backgroundColor: 'green',
    },
    TouchableText: {
      color: 'white',
      textAlign: 'center',
      margin: 10,
    },
  });
export default CheckoutComponent;
