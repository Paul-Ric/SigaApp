import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    
    txtFinanceiro:{
        fontSize:25,
        marginTop:15,
        textAlign:'center'
    },
    viewFinanceiro:{
        flexDirection:'row',
        marginTop:25
        
        
    },
    txtPago:{
        marginTop:25,
        fontSize:18
    },
    radioButton:{
        marginTop:20,
        marginHorizontal:25,
        flexDirection:'row'
    },
    txtButton:{
        marginTop:7
    },
    viewTela:{
        width:380,
        height:620,
        backgroundColor:'#FFF',
        marginTop:15,
        borderRadius:15,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    viewTela0:{
        justifyContent:'center',
        alignItems:'center'
    },
    //Dentro do Scroll Views
    imgStatus:{
        width:105,
        height:20,
        marginStart:0
    },
  
    //Texto Base Status...
    viewTxtBase:{
        flexDirection:'row',
        
    },
    txtStatus:{
        marginHorizontal:40
    },
    //Evento
    viewStatus:{
        flexDirection:'row',
        backgroundColor:'#F1F1F1',
        marginBottom:10
        
    },
    txtEvento:{
        marginStart:45
    },
    txtCotacao:{
        marginStart:75
    },
    //View Margin dos Eventos
    viewMargin:{
        marginTop:10,   
    },
    //Modalize Informações Gerais
    txtInfGeraisTitle:{
        fontSize:20,
        textAlign:'center'
    },
    txtInfGerais:{
        marginTop:20,
        fontSize:15,
        marginLeft:5
    },
    touchbleAbrir:{
        width:200,
        height:45,
        backgroundColor:'#77B9F3',
        padding:7,
        borderRadius:10
    },
    touchbleAbrirView:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:10
    },
    touchbleAbrirTxt:{
        textAlign:'center',
        fontSize:20,
        color:'#FFF'
        
    },
    //Date Piker
    datePiker:{
        width:120,
        
    }
 
})