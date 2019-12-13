import React,{Component} from 'react'
import {View,Text} from 'react-native'

export default class App extends Component{
  render(){
    return(
      <View style={{flex:1,backgroundColor:'yellow'}}>

          <View style={{flex:1,backgroundColor:'green'}}>
          <Text style={{fontWeight: 'bold', color:'black', textAlign:"center", fontSize:25}}> 
               
            
               M IRFAN HAIDER
              </Text>
         </View>
              
          <View style={{flex:4,backgroundColor:'green',flexDirection:'row'}}>
                <View style={{flex:2,backgroundColor:'yellow'}}> 
                    <Text style={{fontWeight: 'bold', color:'Black', textAlign:"center", fontSize:14,marginTop:120}}> 
                      Left Margin 
                  </Text>
                </View>
                <View style={{flex:4,backgroundColor:'yellow',flexDirection:'column'}}>
                    <View style={{flex:1,backgroundColor:'blue'}}>
                       <Text style={{fontWeight: 'bold', color:'Black', textAlign:"center", fontSize:14,marginTop:55}}> 
                      Title
                  </Text>
                    </View>
                    <View style={{flex:1,backgroundColor:'maroon'}}>
                         <Text style={{fontWeight: 'bold', color:'Black', textAlign:"center", fontSize:14,marginTop:55}}> 
                      Image
                  </Text>
                    </View>
                     <View style={{flex:1,backgroundColor:'orange'}}> 
                         <Text style={{fontWeight: 'bold', color:'Black', textAlign:"center", fontSize:14,marginTop:55}}> 
                      Detail
                  </Text>
                     </View> 
                </View>
                <View style={{flex:2,backgroundColor:'yellow'}}>
                   <Text style={{fontWeight: 'bold', color:'Black', textAlign:"center", fontSize:14,marginTop:120}}> 
                      Right Margin
                  </Text>
                </View>
               
                
          </View>
          <View style={{flex:1,backgroundColor:'green'}}>
          <Text style={{fontWeight: 'bold', color:'Black', textAlign:"center",
          fontSize:25}}> 
               MPL Task
              </Text>
          </View>
      </View>
    )
  }
}