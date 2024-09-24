import {View, Text,StyleSheet, Button, Alert, TextInput, Image, TouchableOpacity,} from 'react-native';
import React, {useState } from 'react';

export default function App() {

  const [quantidade, setQuantidade] = useState(0);
  const [maximo,satValorMaximo] = useState('');

  function adicionar(){
    if(quantidade < parseInt(maximo)){
      setQuantidade(quantidade + 1);
    }
    else if(maximo == ''){
      Alert.alert("Digite a quantidade máxima de pessoas no restaurante!");
    }
    else{
      Alert.alert("O restaurante está cheio!");
    }
  }
  function remover(){
    if(quantidade > 0){
      setQuantidade(quantidade - 1);
    }
    else{
      Alert.alert("O restaurante está vazio!");
    }
  }

  function setMaximo(text){
    satValorMaximo(text);
  }


  return (    
    <View style={styles.container}>

      <View style={style_header.app_name}>
        
        <Text style={style_header.text_container}>
          Contador Restaurante
        </Text>
  
      </View>

      <View style={style_body.text_container}>

        <Text style={[style_header.text_container,{fontSize:16,bottom: 18}]}>
          Pessoas no restaurante nesse momento:
        </Text>
        <Image source={require('./assets/prato-branco-vazio.webp')} style={{width: 320, height: 320, borderRadius: 90, left:20}}/>
      
        <View style={styles.counterText}>
          <Text style={{color: "black", fontSize: 55}}>
              {quantidade}
          </Text>
        </View>
        
      </View>

      <View style={styles.counterContainer}>
        <View style={{width: 140, height: 180,marginTop:80, paddingVertical: 12}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => adicionar()}>  
            <Text style={{color:'white', fontSize:19}}>Adicionar</Text>
          </TouchableOpacity>
        </View>

        <View style={{width: 140, height: 180,marginTop:80, paddingVertical: 12}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => remover()}>  
            <Text style={{color:'white', fontSize:19}}>Remover</Text>
          </TouchableOpacity>
        </View>

      </View>

      <View style={{marginTop: 10, marginHorizontal: 35, bottom: 50}}>
        <TextInput style={{borderWidth: 1, borderColor: 'black', padding: 10, borderRadius: 5, color:"black"}} placeholder="Digite a capacidade máxima de pessoas" keyboardType="numeric" onChangeText={setMaximo}/>
      </View>
        
      
    </View>
  )
}






const style_header = StyleSheet.create({
  app_name: {
    paddingVertical: 10,  
  },
  text_container: {
    color: 'black',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center', 
    justifyContent: 'center', 
  },
});

const style_body = StyleSheet.create({
  text_container: {
    alignContent: "center", 
    justifyContent:"center", 
    left:4, 
    right:20, 
    top: 60
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  counterContainer: {
    flexDirection: 'row-reverse', 
    justifyContent: 'space-around', 
    marginHorizontal: 35, 
    marginTop: 20 
  },
  counterText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    position: 'absolute', 
    top: 150, left: 170
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',    
  },
});