/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,TextInput,TouchableOpacity,FlatList
} from 'react-native';



const renderList = ({item , index},RemoveItem)=>{

  return(
    <View style={{height:100,backgroundColor:"purple",borderBottomWidth:1,borderBottomColor:"grey",flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingHorizontal:20}}>
          <Text style={{color:"#0000000",fontSize:16,fontWeight:"bold"}}>Work</Text>
  <Text style={{color:"#FFFFFF",fontSize:16,fontWeight:"bold"}}>{item}</Text>
              <TouchableOpacity onPress={()=>RemoveItem(index)} style={styles.buttonStyle}>
                      <Text style={styles.buttonTextStyle}>Remove</Text>
                  </TouchableOpacity>
    </View>
  )
  
}

const App = () => {
const [toDoList , setToDoList] = useState([]);
const [toDoText , setToDoText] = useState("");


const handleChangeText = (text)=>{
  setToDoText(text)
}
const addWork = ()=>{
  const dailyWork = toDoText
  setToDoList([...toDoList,dailyWork])
  setToDoText("")
}

const RemoveItem = (removeItemIndex)=>{
       let newList = toDoList.filter((value,index)=>{ 
        console.log("TTTTTTT",index);
         return index !== removeItemIndex
        }) 
        setToDoList([...newList])
        console.log("TTTTTTT",newList);
      
}

  return (
    
    <>
      <StatusBar barStyle="dark-content"  />
      <SafeAreaView style={styles.safeAreaViewStyle}>
          <View style={styles.addInformationView}>
              <View style={styles.headingNameStyle}>
              <Text style={styles.buttonTextStyle}>Daily work</Text>
              </View>
              <View style={{flex:3,justifyContent:"center",marginHorizontal:10}}>
                <TextInput value={toDoText} onChangeText={handleChangeText}  style={styles.inputStyle}/>
              </View>
              <View style={{flex:1,justifyContent:"center"}}>
                  <TouchableOpacity onPress={addWork} style={styles.buttonStyle}>
                      <Text style={styles.buttonTextStyle}>ADD</Text>
                  </TouchableOpacity>
              </View>
          </View>
          <View style={styles.toDoListView}>
                    <FlatList
                  data={toDoList}
                  renderItem={(item)=>renderList(item,RemoveItem)}
                  keyExtractor={(item) => item}
                  
                />
                 
          </View>
          
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeAreaViewStyle:{
    flex:1
  },
  addInformationView:{
    flex:1,backgroundColor:"green",flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingHorizontal:10
  },
  headingNameStyle:{
      flex:1,justifyContent:"center",alignItems:"center"
  },
  inputStyle:{
    height:40,        // for now i am set the harded value. 
    borderRadius:5,borderWidth:1,borderColor:"#FFFFFF"
  },
  buttonStyle:{
    height:30,width:70,backgroundColor:"orange",justifyContent:"center",alignItems:"center",borderRadius:5

  },buttonTextStyle:{
    fontSize:14,color:"#000000",fontWeight:"bold"
  },
  toDoListView:{
    flex:3
  },
  
});

export default App;
