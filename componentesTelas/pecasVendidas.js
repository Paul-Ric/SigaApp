import React, { useState,Component } from 'react'
import {View,Text,ScrollView,Image,TouchableOpacity,Modal} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import DatePicker from 'react-native-datepicker'
import StylesPecasVendidas from './Indicadores/pecasVendidas/pecasVendidasCss'

import { RadioButton } from 'react-native-paper'
import { Modalize } from 'react-native-modalize';
import { useRef } from "react";



export default function PecasVendidas(navigation){

    const [checked, setChecked] = React.useState('first');
    const ModalizeInformacaoEvento= useRef(null)

        function onOpenAbrirInformacaoEvento(){
            ModalizeInformacaoEvento.current?.open()
        }
    // Data Piker
    const[state,setState] = React.useState({date:'2021-02-07'})  
    const[state1,setState1] = React.useState({date:'2021-02-06'})  
    return(
    
        <View>
          

        <View style={{backgroundColor:'#EEF3F6'}}>
            
            <Text style={StylesPecasVendidas.txtFinanceiro}>Peças Vendidas</Text>


            <View style={StylesPecasVendidas.viewFinanceiro}>
                <Text style={StylesPecasVendidas.txtPago}>Tipo de Data:</Text>
               

                    <View style={StylesPecasVendidas.radioButton}>
  
                        <RadioButton
                            value="first"
                            status={ checked === 'first' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('first')}
                        />
                       <Text style={StylesPecasVendidas.txtButton}>Compra</Text>
                        <RadioButton
                            value="second"
                            status={ checked === 'second' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('second')}
                        />
                        <Text style={StylesPecasVendidas.txtButton}>Entrega</Text>
                     
                    </View>   
                                   
                
            </View>

             {/*Data Piker */}
             <View style={{marginTop:15,marginRight:0,flexDirection:'row'}}>
                            <DatePicker style={StylesPecasVendidas.datePiker}
                                
                                date={state1.date}
                                mode="date"
                                placeholder="select date"
                                format="YYYY-MM-DD"
                                
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36,
                                    borderRadius:10,
                                    borderColor:'#3EE45C'
                                }
                                // ... You can check the source to find the other keys.
                                }}
                                onDateChange={(date) => {setState1({date: date})}}
                             />


                            <DatePicker style={StylesPecasVendidas.datePiker}
                                
                                date={state.date}
                                mode="date"
                                placeholder="select date"
                                format="YYYY-MM-DD"
                                
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36,
                                    borderRadius:10,
                                    borderColor:'#3EE45C'
                                }
                                // ... You can check the source to find the other keys.
                                }}
                                onDateChange={(date) => {setState({date: date})}}
                             />
                         </View>    
                         
            {/*Tela Scrool View */}
            <View style={StylesPecasVendidas.viewTela0}>
                <View style={StylesPecasVendidas.viewTela}>
                    {/*Texto Base */}
                        <View style={StylesPecasVendidas.viewTxtBase}>
                            <Text style={StylesPecasVendidas.txtStatus}>Status</Text>
                            <Text style={StylesPecasVendidas.txtStatus}>Evento</Text>
                            <Text style={StylesPecasVendidas.txtStatus}>Cotação</Text>
                        </View>
                    <ScrollView>
                        <View style={StylesPecasVendidas.viewMargin}>
                            {/*Evento com Modal */}
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesPecasVendidas.viewStatus}>
                                    <Image style={StylesPecasVendidas.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={StylesPecasVendidas.txtEvento}>2021-0001</Text>
                                    <Text style={StylesPecasVendidas.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesPecasVendidas.viewStatus}>
                                    <Image style={StylesPecasVendidas.imgStatus} source={require('../assets/home/AguardandoEntrega.jpg')}/>
                                    <Text style={StylesPecasVendidas.txtEvento}>2021-0001</Text>
                                    <Text style={StylesPecasVendidas.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesPecasVendidas.viewStatus}>
                                    <Image style={StylesPecasVendidas.imgStatus} source={require('../assets/home/EmTransito.jpg')}/>
                                    <Text style={StylesPecasVendidas.txtEvento}>2021-0001</Text>
                                    <Text style={StylesPecasVendidas.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesPecasVendidas.viewStatus}>
                                    <Image style={StylesPecasVendidas.imgStatus} source={require('../assets/home/Cancelado.jpg')}/>
                                    <Text style={StylesPecasVendidas.txtEvento}>2021-0001</Text>
                                    <Text style={StylesPecasVendidas.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesPecasVendidas.viewStatus}>
                                    <Image style={StylesPecasVendidas.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={StylesPecasVendidas.txtEvento}>2021-0001</Text>
                                    <Text style={StylesPecasVendidas.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesPecasVendidas.viewStatus}>
                                    <Image style={StylesPecasVendidas.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={StylesPecasVendidas.txtEvento}>2021-0001</Text>
                                    <Text style={StylesPecasVendidas.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesPecasVendidas.viewStatus}>
                                    <Image style={StylesPecasVendidas.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={StylesPecasVendidas.txtEvento}>2021-0001</Text>
                                    <Text style={StylesPecasVendidas.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesPecasVendidas.viewStatus}>
                                    <Image style={StylesPecasVendidas.imgStatus} source={require('../assets/home/NEGADO.jpg')}/>
                                    <Text style={StylesPecasVendidas.txtEvento}>2021-0001</Text>
                                    <Text style={StylesPecasVendidas.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesPecasVendidas.viewStatus}>
                                    <Image style={StylesPecasVendidas.imgStatus} source={require('../assets/home/AguardandoEntrega.jpg')}/>
                                    <Text style={StylesPecasVendidas.txtEvento}>2021-0001</Text>
                                    <Text style={StylesPecasVendidas.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesPecasVendidas.viewStatus}>
                                    <Image style={StylesPecasVendidas.imgStatus} source={require('../assets/home/AguardandoEntrega.jpg')}/>
                                    <Text style={StylesPecasVendidas.txtEvento}>2021-0001</Text>
                                    <Text style={StylesPecasVendidas.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesPecasVendidas.viewStatus}>
                                    <Image style={StylesPecasVendidas.imgStatus} source={require('../assets/home/AguardandoEntrega.jpg')}/>
                                    <Text style={StylesPecasVendidas.txtEvento}>2021-0001</Text>
                                    <Text style={StylesPecasVendidas.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity><TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesPecasVendidas.viewStatus}>
                                    <Image style={StylesPecasVendidas.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={StylesPecasVendidas.txtEvento}>2021-0001</Text>
                                    <Text style={StylesPecasVendidas.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>

                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesPecasVendidas.viewStatus}>
                                    <Image style={StylesPecasVendidas.imgStatus} source={require('../assets/home/Cancelado.jpg')}/>
                                    <Text style={StylesPecasVendidas.txtEvento}>2021-0001</Text>
                                    <Text style={StylesPecasVendidas.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity><TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesPecasVendidas.viewStatus}>
                                    <Image style={StylesPecasVendidas.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={StylesPecasVendidas.txtEvento}>2021-0001</Text>
                                    <Text style={StylesPecasVendidas.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesPecasVendidas.viewStatus}>
                                    <Image style={StylesPecasVendidas.imgStatus} source={require('../assets/home/Cancelado.jpg')}/>
                                    <Text style={StylesPecasVendidas.txtEvento}>2021-0001</Text>
                                    <Text style={StylesPecasVendidas.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesPecasVendidas.viewStatus}>
                                    <Image style={StylesPecasVendidas.imgStatus} source={require('../assets/home/AguardandoEntrega.jpg')}/>
                                    <Text style={StylesPecasVendidas.txtEvento}>2021-0001</Text>
                                    <Text style={StylesPecasVendidas.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesPecasVendidas.viewStatus}>
                                    <Image style={StylesPecasVendidas.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={StylesPecasVendidas.txtEvento}>2021-0001</Text>
                                    <Text style={StylesPecasVendidas.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesPecasVendidas.viewStatus}>
                                    <Image style={StylesPecasVendidas.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={StylesPecasVendidas.txtEvento}>2021-0001</Text>
                                    <Text style={StylesPecasVendidas.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesPecasVendidas.viewStatus}>
                                    <Image style={StylesPecasVendidas.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={StylesPecasVendidas.txtEvento}>2021-0001</Text>
                                    <Text style={StylesPecasVendidas.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesPecasVendidas.viewStatus}>
                                    <Image style={StylesPecasVendidas.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={StylesPecasVendidas.txtEvento}>2021-0001</Text>
                                    <Text style={StylesPecasVendidas.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesPecasVendidas.viewStatus}>
                                    <Image style={StylesPecasVendidas.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={StylesPecasVendidas.txtEvento}>2021-0001</Text>
                                    <Text style={StylesPecasVendidas.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesPecasVendidas.viewStatus}>
                                    <Image style={StylesPecasVendidas.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={StylesPecasVendidas.txtEvento}>2021-0001</Text>
                                    <Text style={StylesPecasVendidas.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesPecasVendidas.viewStatus}>
                                    <Image style={StylesPecasVendidas.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={StylesPecasVendidas.txtEvento}>2021-0001</Text>
                                    <Text style={StylesPecasVendidas.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesPecasVendidas.viewStatus}>
                                    <Image style={StylesPecasVendidas.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={StylesPecasVendidas.txtEvento}>2021-0001</Text>
                                    <Text style={StylesPecasVendidas.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesPecasVendidas.viewStatus}>
                                    <Image style={StylesPecasVendidas.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={StylesPecasVendidas.txtEvento}>2021-0001</Text>
                                    <Text style={StylesPecasVendidas.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity><TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesPecasVendidas.viewStatus}>
                                    <Image style={StylesPecasVendidas.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={StylesPecasVendidas.txtEvento}>2021-0001</Text>
                                    <Text style={StylesPecasVendidas.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>

                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesPecasVendidas.viewStatus}>
                                    <Image style={StylesPecasVendidas.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={StylesPecasVendidas.txtEvento}>2021-0001</Text>
                                    <Text style={StylesPecasVendidas.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity><TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesPecasVendidas.viewStatus}>
                                    <Image style={StylesPecasVendidas.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={StylesPecasVendidas.txtEvento}>2021-0001</Text>
                                    <Text style={StylesPecasVendidas.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesPecasVendidas.viewStatus}>
                                    <Image style={StylesPecasVendidas.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={StylesPecasVendidas.txtEvento}>2021-0001</Text>
                                    <Text style={StylesPecasVendidas.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesPecasVendidas.viewStatus}>
                                    <Image style={StylesPecasVendidas.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={StylesPecasVendidas.txtEvento}>2021-0001</Text>
                                    <Text style={StylesPecasVendidas.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesPecasVendidas.viewStatus}>
                                    <Image style={StylesPecasVendidas.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={StylesPecasVendidas.txtEvento}>2021-0001</Text>
                                    <Text style={StylesPecasVendidas.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesPecasVendidas.viewStatus}>
                                    <Image style={StylesPecasVendidas.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={StylesPecasVendidas.txtEvento}>2021-0001</Text>
                                    <Text style={StylesPecasVendidas.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesPecasVendidas.viewStatus}>
                                    <Image style={StylesPecasVendidas.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={StylesPecasVendidas.txtEvento}>2021-0001</Text>
                                    <Text style={StylesPecasVendidas.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>

                            
                             

                            



                        </View>    



                        



                    </ScrollView>
                </View> 

                
            </View>
           
            


        </View>

        {/*Modalize do Eventos */}
        <Modalize ref={ModalizeInformacaoEvento}
                snapPoint={650}>
                    {/*Informações do Evento */}
                    <Text style={StylesPecasVendidas.txtInfGeraisTitle}>Informações Gerais</Text>

                    <Text style={StylesPecasVendidas.txtInfGerais}>Cotação: 31002</Text>

                    <Text style={StylesPecasVendidas.txtInfGerais}>Pedido Compra: 174465</Text>

                    <Text style={StylesPecasVendidas.txtInfGerais}>Data Compra: 01/02/2021</Text>

                    <Text style={StylesPecasVendidas.txtInfGerais}>Data Cotação: 01/02/2021</Text>

                    <Text style={StylesPecasVendidas.txtInfGerais}>Associação: APVS</Text>

                    <Text style={StylesPecasVendidas.txtInfGerais}>Placa: GVR-9456</Text>
                    
                    <Text style={StylesPecasVendidas.txtInfGerais}>Veiculo: 1620Truck</Text>

                    <Text style={StylesPecasVendidas.txtInfGerais}>Peça : Rodoar</Text>

                    <Text style={StylesPecasVendidas.txtInfGerais}>Quantidade : 2</Text>

                    <Text style={StylesPecasVendidas.txtInfGerais}>Preço: R$ 250,72</Text>

                    <Text style={StylesPecasVendidas.txtInfGerais}>Data Entrega : 25/07/2021</Text>


                    <View style={StylesPecasVendidas.touchbleAbrirView}>
                    <TouchableOpacity style={StylesPecasVendidas.touchbleAbrir} >
                        <Text style={StylesPecasVendidas.touchbleAbrirTxt} >Abrir Cotação</Text>
                    </TouchableOpacity>
                    </View>



        </Modalize>
         
    </View>
    )
}



