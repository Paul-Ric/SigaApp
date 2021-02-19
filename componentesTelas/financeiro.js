import React, { useState } from 'react'
import {View,Text,ScrollView,Image,TouchableOpacity,Modal} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import StylesFinanceiro from './Indicadores/financeiro/financerioCss'
import { RadioButton } from 'react-native-paper'
import { Modalize } from 'react-native-modalize';
import { useRef } from "react";


export default function Financeiro({navigation}){

    
        const [checked, setChecked] = React.useState('first');

        const ModalizeInformacaoEvento= useRef(null)

        function onOpenAbrirInformacaoEvento(){
            ModalizeInformacaoEvento.current?.open()
        }
    
    return(

    <View>
          

        <View style={{backgroundColor:'#EEF3F6'}}>
            
            <Text style={StylesFinanceiro.txtFinanceiro}>Financeiro</Text>


            <View style={StylesFinanceiro.viewFinanceiro}>
                <Text style={StylesFinanceiro.txtPago}>Pago:</Text>

                    <View style={StylesFinanceiro.radioButton}>
  
                        <RadioButton
                            value="first"
                            status={ checked === 'first' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('first')}
                        />
                       <Text style={StylesFinanceiro.txtButton}>SIM</Text>
                        <RadioButton
                            value="second"
                            status={ checked === 'second' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('second')}
                        />
                        <Text style={StylesFinanceiro.txtButton}>NÃO</Text>
                        <RadioButton
                            value="three"
                            status={ checked === 'three' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('three')}
                        />
                        <Text style={StylesFinanceiro.txtButton}>Todos</Text>
                    </View>                  
                
            </View>
            {/*Tela Scrool View */}
            <View style={StylesFinanceiro.viewTela0}>
                <View style={StylesFinanceiro.viewTela}>
                    {/*Texto Base */}
                        <View style={StylesFinanceiro.viewTxtBase}>
                            <Text style={StylesFinanceiro.txtStatus}>Status</Text>
                            <Text style={StylesFinanceiro.txtStatus}>Evento</Text>
                            <Text style={StylesFinanceiro.txtStatus}>Cotação</Text>
                        </View>
                    <ScrollView>
                        <View style={StylesFinanceiro.viewMargin}>
                            {/*Evento com Modal */}
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesFinanceiro.viewStatus}>
                                    <Image style={StylesFinanceiro.imgStatus} source={require('../assets/home/pendente.jpg')}/>
                                    <Text style={StylesFinanceiro.txtEvento}>2021-0001</Text>
                                    <Text style={StylesFinanceiro.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesFinanceiro.viewStatus}>
                                    <Image style={StylesFinanceiro.imgStatus} source={require('../assets/home/NEGADO.jpg')}/>
                                    <Text style={StylesFinanceiro.txtEvento}>2021-0001</Text>
                                    <Text style={StylesFinanceiro.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesFinanceiro.viewStatus}>
                                    <Image style={StylesFinanceiro.imgStatus} source={require('../assets/home/autorizado.jpg')}/>
                                    <Text style={StylesFinanceiro.txtEvento}>2021-0001</Text>
                                    <Text style={StylesFinanceiro.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesFinanceiro.viewStatus}>
                                    <Image style={StylesFinanceiro.imgStatus} source={require('../assets/home/autorizado.jpg')}/>
                                    <Text style={StylesFinanceiro.txtEvento}>2021-0001</Text>
                                    <Text style={StylesFinanceiro.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesFinanceiro.viewStatus}>
                                    <Image style={StylesFinanceiro.imgStatus} source={require('../assets/home/autorizado.jpg')}/>
                                    <Text style={StylesFinanceiro.txtEvento}>2021-0001</Text>
                                    <Text style={StylesFinanceiro.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesFinanceiro.viewStatus}>
                                    <Image style={StylesFinanceiro.imgStatus} source={require('../assets/home/autorizado.jpg')}/>
                                    <Text style={StylesFinanceiro.txtEvento}>2021-0001</Text>
                                    <Text style={StylesFinanceiro.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesFinanceiro.viewStatus}>
                                    <Image style={StylesFinanceiro.imgStatus} source={require('../assets/home/NEGADO.jpg')}/>
                                    <Text style={StylesFinanceiro.txtEvento}>2021-0001</Text>
                                    <Text style={StylesFinanceiro.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesFinanceiro.viewStatus}>
                                    <Image style={StylesFinanceiro.imgStatus} source={require('../assets/home/NEGADO.jpg')}/>
                                    <Text style={StylesFinanceiro.txtEvento}>2021-0001</Text>
                                    <Text style={StylesFinanceiro.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesFinanceiro.viewStatus}>
                                    <Image style={StylesFinanceiro.imgStatus} source={require('../assets/home/autorizado.jpg')}/>
                                    <Text style={StylesFinanceiro.txtEvento}>2021-0001</Text>
                                    <Text style={StylesFinanceiro.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesFinanceiro.viewStatus}>
                                    <Image style={StylesFinanceiro.imgStatus} source={require('../assets/home/pendente.jpg')}/>
                                    <Text style={StylesFinanceiro.txtEvento}>2021-0001</Text>
                                    <Text style={StylesFinanceiro.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesFinanceiro.viewStatus}>
                                    <Image style={StylesFinanceiro.imgStatus} source={require('../assets/home/pendente.jpg')}/>
                                    <Text style={StylesFinanceiro.txtEvento}>2021-0001</Text>
                                    <Text style={StylesFinanceiro.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity><TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesFinanceiro.viewStatus}>
                                    <Image style={StylesFinanceiro.imgStatus} source={require('../assets/home/pendente.jpg')}/>
                                    <Text style={StylesFinanceiro.txtEvento}>2021-0001</Text>
                                    <Text style={StylesFinanceiro.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>

                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesFinanceiro.viewStatus}>
                                    <Image style={StylesFinanceiro.imgStatus} source={require('../assets/home/pendente.jpg')}/>
                                    <Text style={StylesFinanceiro.txtEvento}>2021-0001</Text>
                                    <Text style={StylesFinanceiro.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity><TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesFinanceiro.viewStatus}>
                                    <Image style={StylesFinanceiro.imgStatus} source={require('../assets/home/autorizado.jpg')}/>
                                    <Text style={StylesFinanceiro.txtEvento}>2021-0001</Text>
                                    <Text style={StylesFinanceiro.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesFinanceiro.viewStatus}>
                                    <Image style={StylesFinanceiro.imgStatus} source={require('../assets/home/pendente.jpg')}/>
                                    <Text style={StylesFinanceiro.txtEvento}>2021-0001</Text>
                                    <Text style={StylesFinanceiro.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesFinanceiro.viewStatus}>
                                    <Image style={StylesFinanceiro.imgStatus} source={require('../assets/home/pendente.jpg')}/>
                                    <Text style={StylesFinanceiro.txtEvento}>2021-0001</Text>
                                    <Text style={StylesFinanceiro.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesFinanceiro.viewStatus}>
                                    <Image style={StylesFinanceiro.imgStatus} source={require('../assets/home/autorizado.jpg')}/>
                                    <Text style={StylesFinanceiro.txtEvento}>2021-0001</Text>
                                    <Text style={StylesFinanceiro.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesFinanceiro.viewStatus}>
                                    <Image style={StylesFinanceiro.imgStatus} source={require('../assets/home/pendente.jpg')}/>
                                    <Text style={StylesFinanceiro.txtEvento}>2021-0001</Text>
                                    <Text style={StylesFinanceiro.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesFinanceiro.viewStatus}>
                                    <Image style={StylesFinanceiro.imgStatus} source={require('../assets/home/pendente.jpg')}/>
                                    <Text style={StylesFinanceiro.txtEvento}>2021-0001</Text>
                                    <Text style={StylesFinanceiro.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesFinanceiro.viewStatus}>
                                    <Image style={StylesFinanceiro.imgStatus} source={require('../assets/home/pendente.jpg')}/>
                                    <Text style={StylesFinanceiro.txtEvento}>2021-0001</Text>
                                    <Text style={StylesFinanceiro.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesFinanceiro.viewStatus}>
                                    <Image style={StylesFinanceiro.imgStatus} source={require('../assets/home/pendente.jpg')}/>
                                    <Text style={StylesFinanceiro.txtEvento}>2021-0001</Text>
                                    <Text style={StylesFinanceiro.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesFinanceiro.viewStatus}>
                                    <Image style={StylesFinanceiro.imgStatus} source={require('../assets/home/pendente.jpg')}/>
                                    <Text style={StylesFinanceiro.txtEvento}>2021-0001</Text>
                                    <Text style={StylesFinanceiro.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesFinanceiro.viewStatus}>
                                    <Image style={StylesFinanceiro.imgStatus} source={require('../assets/home/pendente.jpg')}/>
                                    <Text style={StylesFinanceiro.txtEvento}>2021-0001</Text>
                                    <Text style={StylesFinanceiro.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesFinanceiro.viewStatus}>
                                    <Image style={StylesFinanceiro.imgStatus} source={require('../assets/home/pendente.jpg')}/>
                                    <Text style={StylesFinanceiro.txtEvento}>2021-0001</Text>
                                    <Text style={StylesFinanceiro.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesFinanceiro.viewStatus}>
                                    <Image style={StylesFinanceiro.imgStatus} source={require('../assets/home/pendente.jpg')}/>
                                    <Text style={StylesFinanceiro.txtEvento}>2021-0001</Text>
                                    <Text style={StylesFinanceiro.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity><TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesFinanceiro.viewStatus}>
                                    <Image style={StylesFinanceiro.imgStatus} source={require('../assets/home/pendente.jpg')}/>
                                    <Text style={StylesFinanceiro.txtEvento}>2021-0001</Text>
                                    <Text style={StylesFinanceiro.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>

                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesFinanceiro.viewStatus}>
                                    <Image style={StylesFinanceiro.imgStatus} source={require('../assets/home/pendente.jpg')}/>
                                    <Text style={StylesFinanceiro.txtEvento}>2021-0001</Text>
                                    <Text style={StylesFinanceiro.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity><TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesFinanceiro.viewStatus}>
                                    <Image style={StylesFinanceiro.imgStatus} source={require('../assets/home/pendente.jpg')}/>
                                    <Text style={StylesFinanceiro.txtEvento}>2021-0001</Text>
                                    <Text style={StylesFinanceiro.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesFinanceiro.viewStatus}>
                                    <Image style={StylesFinanceiro.imgStatus} source={require('../assets/home/pendente.jpg')}/>
                                    <Text style={StylesFinanceiro.txtEvento}>2021-0001</Text>
                                    <Text style={StylesFinanceiro.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesFinanceiro.viewStatus}>
                                    <Image style={StylesFinanceiro.imgStatus} source={require('../assets/home/pendente.jpg')}/>
                                    <Text style={StylesFinanceiro.txtEvento}>2021-0001</Text>
                                    <Text style={StylesFinanceiro.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesFinanceiro.viewStatus}>
                                    <Image style={StylesFinanceiro.imgStatus} source={require('../assets/home/pendente.jpg')}/>
                                    <Text style={StylesFinanceiro.txtEvento}>2021-0001</Text>
                                    <Text style={StylesFinanceiro.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesFinanceiro.viewStatus}>
                                    <Image style={StylesFinanceiro.imgStatus} source={require('../assets/home/pendente.jpg')}/>
                                    <Text style={StylesFinanceiro.txtEvento}>2021-0001</Text>
                                    <Text style={StylesFinanceiro.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onOpenAbrirInformacaoEvento}>
                                
                                <View style={StylesFinanceiro.viewStatus}>
                                    <Image style={StylesFinanceiro.imgStatus} source={require('../assets/home/pendente.jpg')}/>
                                    <Text style={StylesFinanceiro.txtEvento}>2021-0001</Text>
                                    <Text style={StylesFinanceiro.txtCotacao}>30331</Text>
                                </View>
                                
                            </TouchableOpacity>

                            
                             

                            



                        </View>    



                        



                    </ScrollView>
                </View> 

                
            </View>
           
            


        </View>

        {/*Modalize do Eventos */}
        <Modalize ref={ModalizeInformacaoEvento}
                snapPoint={500}>
                    {/*Informações do Evento */}
                    <Text style={StylesFinanceiro.txtInfGeraisTitle}>Informações Gerais</Text>

                    <Text style={StylesFinanceiro.txtInfGerais}> Evento: 2021-00001</Text>

                    <Text style={StylesFinanceiro.txtInfGerais}>Cotação: 31002</Text>

                    <Text style={StylesFinanceiro.txtInfGerais}>Associação: APVS</Text>

                    <Text style={StylesFinanceiro.txtInfGerais}>Placa: TTX-0256</Text>

                    <Text style={StylesFinanceiro.txtInfGerais}>Veiculo: GOL G7</Text>

                    <Text style={StylesFinanceiro.txtInfGerais}>Parcela: 01/01</Text>

                    <Text style={StylesFinanceiro.txtInfGerais}>Vencimento: 27/02/2021</Text>
                    
                    <Text style={StylesFinanceiro.txtInfGerais}>Pago: NÃO</Text>

                    <Text style={StylesFinanceiro.txtInfGerais}>Valor: 1518,00</Text>


                    <View style={StylesFinanceiro.touchbleAbrirView}>
                    <TouchableOpacity style={StylesFinanceiro.touchbleAbrir} >
                        <Text style={StylesFinanceiro.touchbleAbrirTxt} >Autorização</Text>
                    </TouchableOpacity>
                    </View>



        </Modalize>
         
    </View>
    )
}