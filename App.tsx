/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
  ActivityIndicator,
} from 'react-native';


const currencyConverterEndPoint = 'https://api.frankfurter.app'

const fetchCurrencyLatest = () =>{
  return fetch(`${currencyConverterEndPoint}/latest`)
    .then(response => response.json())
    .then(data => Object.keys(data.rates))
}

const convertCurrencyAPI = (amount, sourceCurrency, targetCurrency) =>{
  return fetch(`${currencyConverterEndPoint}/latest?amount=${amount}&from=${sourceCurrency}&to=${targetCurrency}`)
    .then(response => response.json())
} 
 
const App = () =>{

  const [currencyList, setCurrencyList] = useState([]);
  const [targetOpen, setTargetOpen] = useState(false);
  const [open, setOpen] = useState(false); 
  const [sourceAmount, setSourceAmount] = useState("");
  const [sourceCurrency, setSourceCurrency] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");
  const [loading, setLoading] = useState(false)


  useEffect(() =>{
    fetchCurrencyLatest()
    .then(list => setCurrencyList(list))
  }, [])

  const convertCurrency = (amount, sourceCurrency, targetCurrency) =>{
    setLoading(true);
    convertCurrencyAPI(amount, sourceCurrency, targetCurrency)
      .then(data => {
        const { rates } = data;
        setTargetAmount(rates[targetCurrency].toString());
        setLoading(false);
      })
    }
    const swapCurrencies = () => {
      setSourceCurrency(targetCurrency);
      setTargetCurrency(sourceCurrency);
    };

  return (
    <SafeAreaView>
      <StatusBar />
      <View>
          <View style = {styles.main}> 
        <View 
        style = {styles.mainContainer}
        >
          <View>
             <Text style = {styles.texto}>Amount</Text>
              <TextInput 
              style = {styles.TextInput}
              onChangeText={value => setSourceAmount(value)}
              value={sourceAmount}
              keyboardType="numeric"
              />
              <Text style = {styles.texttm}>Convert</Text>
              <Text style = {styles.textt}>From:</Text>
              <DropDownPicker 
                style={[styles.TextInput, styles.dropDowno]}
                onChangeValue={value => setSourceCurrency(value)}
                open={open}
                value={sourceCurrency}
                items={currencyList.map(currency => ({
                  label: currency,
                  value: currency,
                }))}
                setOpen={setOpen}
                setValue={setSourceCurrency}
              />
          </View>
          <View>
          <View style={styles.swapButtonContainer}>
            <Button 
              title="⇅"
              onPress={swapCurrencies} 
              />
            </View>

          </View>
          <View>
              <Text style = {styles.texttt}>To:</Text>
              <DropDownPicker 
                style={[styles.TextInput, styles.dropDownt]}
                onChangeText = {value => setTargetCurrency(value)}
                open={targetOpen}
                value={targetCurrency}
                items={currencyList.map(currency => ({
                  label: currency,
                  value: currency,
                }))}
                setOpen={setTargetOpen}
                setValue={setTargetCurrency} 
              />
             <Text style = {styles.textf}>Converted Amount</Text>
              <TextInput 
              style = {[styles.TextInput , styles.last]}
              editable = {false}
              value = {targetAmount}
              />
          </View>
          {
          loading
            ? <ActivityIndicator color='#000000' size = 'large'/>
            : <Button onPress = {() => {convertCurrency (sourceAmount, sourceCurrency, targetCurrency)}} title = 'Convert'/>
          }
          </View>
          </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main:{
    padding: 20,
    backgroundColor: '#1E201E',
    height: '100%'
  },
  texto :{
    marginBottom: 5,
    fontSize: 20,
    color:'white',
  },
  textt:{
    color:'white',
    fontSize: 20
  },
  texttm:{
    fontSize: 17,
    marginTop: 5,
    color:'white',
    marginLeft: '40%'
  },
  texttt:{
    color:'white',
    fontSize: 20
  },
  dropDowno:{
    zIndex:1000
  },
  dropDownt:{
    zIndex:500
  },
  textf:{
    marginLeft:'25%',
    color:'white',
    fontSize: 20
  },
  mainContainer:{
    borderRadius: 11,
    marginTop: 140,
    padding: 20,
    height: 500,
    backgroundColor: '#3C3D37',
  },
  TextInput:{
    backgroundColor: '#ddd',
    color: 'black',
    borderRadius: 100,
    marginBottom: 5
  },
  last: {
    marginBottom: 25,
    textAlign: 'center', 
    backgroundColor: 'transparent', 
    color: '#2fe6de', 
    fontSize: 30, 
    borderWidth: 0, 
  },
  swapButtonContainer: {
    marginVertical: 10, 
    alignItems: 'center', 
    zIndex:200,
  },
});

export default App;