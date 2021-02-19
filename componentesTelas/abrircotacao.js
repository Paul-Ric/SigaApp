import React ,{ useState,Component} from 'react'
import {View,Text,Image} from 'react-native'
import Css from './Indicadores/cotacaoCss'

import { TouchableOpacity } from 'react-native-gesture-handler';
import GaleriaFt from './galeriaFotos'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function({navigation}){

    
    const Stack =createStackNavigator()


    return(
        <View style={{backgroundColor:'#EEF3F6'}}>
            <View style={Css.viewTitle}>
                <Text style={Css.txtTitle}>Cotação de Peças</Text>
            </View>
        {/*Dados ASSOCIAÇÃO | COMPRADOR | DADOS DO VEICULO | OFICINA*/}
            <View style={Css.viewInformacaoGerais0}>
                <View style={Css.viewInformacaoGerais1}>
                    {/*Associação */}
                    <View style={Css.viewDados}> 
                        <Text style={Css.txtAssociacao}>Associação: </Text>

                        <View style={Css.viewtxtAssociacao}>
                                 <Text style={Css.txtAssociacao1}>APVS</Text>
                        </View>
                    
                    </View>
                   {/*CNPJ e Evento*/}
                   <View style={Css.viewDados1}>
                       <Text >CNPJ:</Text>

                       <View style={Css.viewtxtCnpj}>
                                 <Text style={Css.txtCnpj1}>42.543.564/0001-10</Text>
                        </View>

                        {/*Evento */}
                        
                            <Text style={Css.txtEvento0} >Evento:</Text>

                            <View style={Css.viewtxtEvento}>
                                    <Text style={Css.txtEvento1}>2021-00001</Text>
                            </View>
                   </View>

                    {/*Cotacao | DATA  */}
                    <View style={Css.viewDados2}>
                        {/*Cotacao */}
                       <Text >Cotação:</Text>

                       <View style={Css.viewtxtCotacao}>
                                 <Text style={Css.txtCotacao1}>29196</Text>
                        </View>

                        {/*Data Cotacao */}
                        
                            <Text style={Css.txtData0} >Data Cotação:</Text>

                            <View style={Css.viewtxtData}>
                                    <Text style={Css.txtData1}>23/02/2021</Text>
                            </View>
                   </View>

                   

                   <Text style={{backgroundColor:'#F1F1F1',height:5,marginTop:5}}> {"\n"}</Text>
                   
                   {/*Comprador*/} 

                    <View >
                        <View style={Css.viewDados}>
                            <Text style={Css.txtAssociacao}>Comprador:</Text>

                            <View style={Css.viewtxtComprador}>
                                 <Text style={Css.txtComprador1}>Paulo Ricardo Rodrigues</Text>
                            </View>

                            
                        </View>
                        <View style={Css.viewDados1Comprador}>
                                <Text >Telefone:</Text>

                                <View style={Css.viewtxtCnpj}>
                                            <Text style={Css.txtCnpj1}>42.543.564/0001-10</Text>
                                 </View>
                        </View>
                        {/*Evento */}
                       <View style={Css.viewDados1CompradorEvento}>             
                        <Text style={Css.txtEvento0} >Evento:</Text>

                            <View style={Css.viewtxtEvento}>
                                    <Text style={Css.txtEvento1}>2021-00001</Text>
                            </View>

                        </View>    

                    </View>

                    <Text style={{backgroundColor:'#F1F1F1',height:5,marginTop:5}}> {"\n"}</Text>

                    {/*Dados do Veículo*/}

                    <View>
                        <View style={Css.viewDadosVeiculo}>
                            
                                <Text style={Css.txtVeiculo1}>Veiculo :</Text>
                            

                            <View style={Css.viewtxtVeiculo}>
                                 <Text style={Css.txtVeiculo}>Palio</Text>
                            </View>

                        </View>

                        <View style={Css.viewDados1CompradorEvento}>             
                        <Text style={Css.txtEvento0} >Placa:</Text>

                            <View style={Css.viewtxtEvento}>
                                    <Text style={Css.txtEvento1}>2021-00001</Text>
                            </View>
                                {/*Cor */}
                            <Text style={Css.txtEvento0} >Cor:</Text>

                            <View style={Css.viewtxtcor}>
                                    <Text style={Css.txtCor}>Preto</Text>
                            </View>

                        </View> 

                    </View>
                    <View style={Css.viewStatus}>
                       <Text style={Css.txtStatus}>Status</Text>
                       <View >
                           <Image style={Css.imgStatus} source={require('../assets/home/autorizado.jpg')}/>
                       </View>
                   </View>
                    

                   

                    
                    

                </View> 
               
                <TouchableOpacity style={{width:120,height:20,backgroundColor:'#000f'}} onPress={()=>navigation.navigate('GaleriaFt')} >
                
                </TouchableOpacity>

                        
            </View>    


        </View>
        
        
    )
}