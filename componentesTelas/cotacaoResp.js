import React , { useState,Component }from 'react'
import {View,Text,ScrollView,Image,TouchableOpacity,Modal} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import CotacaoRespCss from './Indicadores/pecasVendidas/pecasVendidasCss'



import { RadioButton } from 'react-native-paper'
import { Modalize } from 'react-native-modalize';
import { useRef } from "react";





export default function CotacaoRespondida({navigation}){

    

    
    const ModalizeInformacaoEvento= useRef(null)

        function onOpenAbrirInformacaoEvento(){
            ModalizeInformacaoEvento.current?.open()
        }
    


    return(
        
    
    
        <View>
          

        <View style={{backgroundColor:'#EEF3F6'}}>
            
            <Text style={CotacaoRespCss.txtFinanceiro}>Cotação Respondida</Text>


           

             
                         
            {/*Tela Scrool View */}
            <View style={CotacaoRespCss.viewTela0}>
                <View style={CotacaoRespCss.viewTela}>
                    {/*Texto Base */}
                        <View style={CotacaoRespCss.viewTxtBase}>
                            <Text style={CotacaoRespCss.txtStatus}>Status</Text>
                            <Text style={CotacaoRespCss.txtStatus}>Evento</Text>
                            <Text style={CotacaoRespCss.txtStatus}>Cotação</Text>
                        </View>
                    <ScrollView>
                        <View style={CotacaoRespCss.viewMargin}>
                            {/*Evento com Modal */}
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={CotacaoRespCss.viewStatus}>
                                    <Image style={CotacaoRespCss.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={CotacaoRespCss.txtEvento}>2021-000100</Text>
                                    <Text style={CotacaoRespCss.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={CotacaoRespCss.viewStatus}>
                                    <Image style={CotacaoRespCss.imgStatus} source={require('../assets/home/AguardandoEntrega.jpg')}/>
                                    <Text style={CotacaoRespCss.txtEvento}>2021-0001</Text>
                                    <Text style={CotacaoRespCss.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={CotacaoRespCss.viewStatus}>
                                    <Image style={CotacaoRespCss.imgStatus} source={require('../assets/home/EmTransito.jpg')}/>
                                    <Text style={CotacaoRespCss.txtEvento}>2021-0001</Text>
                                    <Text style={CotacaoRespCss.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={CotacaoRespCss.viewStatus}>
                                    <Image style={CotacaoRespCss.imgStatus} source={require('../assets/home/Cancelado.jpg')}/>
                                    <Text style={CotacaoRespCss.txtEvento}>2021-0001</Text>
                                    <Text style={CotacaoRespCss.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={CotacaoRespCss.viewStatus}>
                                    <Image style={CotacaoRespCss.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={CotacaoRespCss.txtEvento}>2021-0001</Text>
                                    <Text style={CotacaoRespCss.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={CotacaoRespCss.viewStatus}>
                                    <Image style={CotacaoRespCss.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={CotacaoRespCss.txtEvento}>2021-0001</Text>
                                    <Text style={CotacaoRespCss.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={CotacaoRespCss.viewStatus}>
                                    <Image style={CotacaoRespCss.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={CotacaoRespCss.txtEvento}>2021-0001</Text>
                                    <Text style={CotacaoRespCss.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={CotacaoRespCss.viewStatus}>
                                    <Image style={CotacaoRespCss.imgStatus} source={require('../assets/home/NEGADO.jpg')}/>
                                    <Text style={CotacaoRespCss.txtEvento}>2021-0001</Text>
                                    <Text style={CotacaoRespCss.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={CotacaoRespCss.viewStatus}>
                                    <Image style={CotacaoRespCss.imgStatus} source={require('../assets/home/AguardandoEntrega.jpg')}/>
                                    <Text style={CotacaoRespCss.txtEvento}>2021-0001</Text>
                                    <Text style={CotacaoRespCss.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={CotacaoRespCss.viewStatus}>
                                    <Image style={CotacaoRespCss.imgStatus} source={require('../assets/home/AguardandoEntrega.jpg')}/>
                                    <Text style={CotacaoRespCss.txtEvento}>2021-0001</Text>
                                    <Text style={CotacaoRespCss.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={CotacaoRespCss.viewStatus}>
                                    <Image style={CotacaoRespCss.imgStatus} source={require('../assets/home/AguardandoEntrega.jpg')}/>
                                    <Text style={CotacaoRespCss.txtEvento}>2021-0001</Text>
                                    <Text style={CotacaoRespCss.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity><TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={CotacaoRespCss.viewStatus}>
                                    <Image style={CotacaoRespCss.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={CotacaoRespCss.txtEvento}>2021-0001</Text>
                                    <Text style={CotacaoRespCss.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>

                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={CotacaoRespCss.viewStatus}>
                                    <Image style={CotacaoRespCss.imgStatus} source={require('../assets/home/Cancelado.jpg')}/>
                                    <Text style={CotacaoRespCss.txtEvento}>2021-0001</Text>
                                    <Text style={CotacaoRespCss.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity><TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={CotacaoRespCss.viewStatus}>
                                    <Image style={CotacaoRespCss.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={CotacaoRespCss.txtEvento}>2021-0001</Text>
                                    <Text style={CotacaoRespCss.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={CotacaoRespCss.viewStatus}>
                                    <Image style={CotacaoRespCss.imgStatus} source={require('../assets/home/Cancelado.jpg')}/>
                                    <Text style={CotacaoRespCss.txtEvento}>2021-0001</Text>
                                    <Text style={CotacaoRespCss.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={CotacaoRespCss.viewStatus}>
                                    <Image style={CotacaoRespCss.imgStatus} source={require('../assets/home/AguardandoEntrega.jpg')}/>
                                    <Text style={CotacaoRespCss.txtEvento}>2021-0001</Text>
                                    <Text style={CotacaoRespCss.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={CotacaoRespCss.viewStatus}>
                                    <Image style={CotacaoRespCss.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={CotacaoRespCss.txtEvento}>2021-0001</Text>
                                    <Text style={CotacaoRespCss.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={CotacaoRespCss.viewStatus}>
                                    <Image style={CotacaoRespCss.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={CotacaoRespCss.txtEvento}>2021-0001</Text>
                                    <Text style={CotacaoRespCss.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={CotacaoRespCss.viewStatus}>
                                    <Image style={CotacaoRespCss.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={CotacaoRespCss.txtEvento}>2021-0001</Text>
                                    <Text style={CotacaoRespCss.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={CotacaoRespCss.viewStatus}>
                                    <Image style={CotacaoRespCss.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={CotacaoRespCss.txtEvento}>2021-0001</Text>
                                    <Text style={CotacaoRespCss.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={CotacaoRespCss.viewStatus}>
                                    <Image style={CotacaoRespCss.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={CotacaoRespCss.txtEvento}>2021-0001</Text>
                                    <Text style={CotacaoRespCss.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={CotacaoRespCss.viewStatus}>
                                    <Image style={CotacaoRespCss.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={CotacaoRespCss.txtEvento}>2021-0001</Text>
                                    <Text style={CotacaoRespCss.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={CotacaoRespCss.viewStatus}>
                                    <Image style={CotacaoRespCss.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={CotacaoRespCss.txtEvento}>2021-0001</Text>
                                    <Text style={CotacaoRespCss.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={CotacaoRespCss.viewStatus}>
                                    <Image style={CotacaoRespCss.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={CotacaoRespCss.txtEvento}>2021-0001</Text>
                                    <Text style={CotacaoRespCss.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={CotacaoRespCss.viewStatus}>
                                    <Image style={CotacaoRespCss.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={CotacaoRespCss.txtEvento}>2021-0001</Text>
                                    <Text style={CotacaoRespCss.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity><TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={CotacaoRespCss.viewStatus}>
                                    <Image style={CotacaoRespCss.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={CotacaoRespCss.txtEvento}>2021-0001</Text>
                                    <Text style={CotacaoRespCss.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>

                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={CotacaoRespCss.viewStatus}>
                                    <Image style={CotacaoRespCss.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={CotacaoRespCss.txtEvento}>2021-0001</Text>
                                    <Text style={CotacaoRespCss.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity><TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={CotacaoRespCss.viewStatus}>
                                    <Image style={CotacaoRespCss.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={CotacaoRespCss.txtEvento}>2021-0001</Text>
                                    <Text style={CotacaoRespCss.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={CotacaoRespCss.viewStatus}>
                                    <Image style={CotacaoRespCss.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={CotacaoRespCss.txtEvento}>2021-0001</Text>
                                    <Text style={CotacaoRespCss.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={CotacaoRespCss.viewStatus}>
                                    <Image style={CotacaoRespCss.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={CotacaoRespCss.txtEvento}>2021-0001</Text>
                                    <Text style={CotacaoRespCss.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={CotacaoRespCss.viewStatus}>
                                    <Image style={CotacaoRespCss.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={CotacaoRespCss.txtEvento}>2021-0001</Text>
                                    <Text style={CotacaoRespCss.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={CotacaoRespCss.viewStatus}>
                                    <Image style={CotacaoRespCss.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={CotacaoRespCss.txtEvento}>2021-0001</Text>
                                    <Text style={CotacaoRespCss.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={CotacaoRespCss.viewStatus}>
                                    <Image style={CotacaoRespCss.imgStatus} source={require('../assets/home/Entregue.jpg')}/>
                                    <Text style={CotacaoRespCss.txtEvento}>2021-0001</Text>
                                    <Text style={CotacaoRespCss.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>

                            
                             

                            



                        </View>    



                        



                    </ScrollView>
                </View> 

                
            </View>
           
            


        </View>

        {/*Modalize do Eventos */}
        <Modalize ref={ModalizeInformacaoEvento}
                snapPoint={470}>
                    {/*Informações do Evento */}
                    <Text style={CotacaoRespCss.txtInfGeraisTitle}>Informações Gerais</Text>

                    <Text style={CotacaoRespCss.txtInfGerais}>Cotação: 31002</Text>

                    <Text style={CotacaoRespCss.txtInfGerais}>Data: 09/02/2021 </Text>

                    <Text style={CotacaoRespCss.txtInfGerais}>Associação: APVS</Text>

                    <Text style={CotacaoRespCss.txtInfGerais}>Placa: OCR-2154</Text>

                    <Text style={CotacaoRespCss.txtInfGerais}>Veiculo: Jetta</Text>

                    <Text style={CotacaoRespCss.txtInfGerais}>Peça: Capô</Text>
                    
                    <Text style={CotacaoRespCss.txtInfGerais}>Quantidade: 1</Text>

                    <Text style={CotacaoRespCss.txtInfGerais}>Seu Preço: R$320 </Text>

                    <Text style={CotacaoRespCss.txtInfGerais}>Menor Preço: R$320</Text>

                    <Text style={CotacaoRespCss.txtInfGerais}>Ganhou: Sim</Text>

                   


                    <View style={CotacaoRespCss.touchbleAbrirView}>
                    <TouchableOpacity style={CotacaoRespCss.touchbleAbrir} >
                        <Text style={CotacaoRespCss.touchbleAbrirTxt} >Abrir Cotação</Text>
                    </TouchableOpacity>
                    </View>



        </Modalize>
         
    </View>
    )
}