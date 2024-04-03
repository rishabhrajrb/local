import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'


const Calculator = () => {
    const [value, setvalue] = useState('');

    const btnpress = (value) => {

        if (value === "c") {
            setvalue('');

        }
    }
    const btnpress1 = (value) => {
       // console.log('abc', value)
        if (value ==="DL") {
            setvalue(value => value.slice(0, -1))
        }


    }
    const btnpressequal = () => {
       
        if (value) {

            try {
                setvalue(eval(value));
              
            

            } catch (error) {
                setvalue('error')
            }
        }
       
    }
    const digpress = (input) => {
        if (!isNaN(input)) {
            setvalue(value + input)
        }

    }
    const optpress = (input) => {
        if (['+', '-', '*', '/', '%'].includes(input)) {
            setvalue(value + input)
        }
    }

    const dotpress = () => {
        if (!value.includes('.')){

           
        setvalue(value + ".")
        }else {
           
           const value1 = value.slice(-1);
            if (!isNaN(value1)) {
               
                setvalue(value + ".");
            }
        }
    }
    

    return (

        <View>
            <Text style={style.count}>{value}</Text>



            <View style={style.background}>
                <TouchableOpacity onPress={() => btnpress('c')} >
                    <Text style={style.text}>c</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => btnpress1('DL')}>
                    <Text style={style.text}>DL</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => optpress('/')} >
                    <Text style={style.text}>/</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => optpress('%')}>
                    <Text style={style.text}>%</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => digpress('7')} >
                    <Text style={style.text}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => digpress('8')}>
                    <Text style={style.text}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => digpress('9')} >
                    <Text style={style.text}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => optpress('*')} >
                    <Text style={style.text}>*</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => digpress('4')}>
                    <Text style={style.text}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => digpress('5')} >
                    <Text style={style.text}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => digpress('6')}>
                    <Text style={style.text}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => optpress('-')} >
                    <Text style={style.text}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => digpress('1')} >
                    <Text style={style.text}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => digpress('2')} >
                    <Text style={style.text}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => digpress('3')}>
                    <Text style={style.text}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => optpress('+')} >
                    <Text style={style.text}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => digpress('00')} >
                    <Text style={style.text}>00</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => digpress('0')}>
                    <Text style={style.text}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dotpress('.')}>
                    <Text style={style.text}>.</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => btnpressequal(value)}>
                    <Text style={style.text}>=</Text>
                </TouchableOpacity>
            </View>
        </View>

    )

}
const style = StyleSheet.create({

    count: {
        paddingTop: 20,
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black',
        paddingRight: 20,
        textAlign: 'right',
        width: '100%'

    },
    background: {
        backgroundColor: 'red',
        flexDirection: 'row',

        flexWrap: 'wrap',
        marginTop: 50,

        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,





    },
    text: {
        fontSize: 30,
        color: 'white',
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 10,
        // elevation:2,
        margin: 10,
        height: 70,
        width: 70,
        textAlign: 'center',


        // justifyContent:'center'

    },

})
export default Calculator;