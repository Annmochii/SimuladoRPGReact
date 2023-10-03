import { StyleSheet, View, Text, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { DefaultButton } from '../DefaultButton/index.js'

export function Card(props){
    const styles = StyleSheet.create({
      Container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7F7F7',
        width: '100%',
        margin: 16,
      },
      Title: {
        fontSize: '24px',
        fontFamily: 'PoppinsBold',
        color: '#26262B',
      },
    });

    /* 
    - Imagem do item
    - Nome do item
    - Descrição do item (poder de ataque, defesa e qualquer outro atributo)
    - Botão para propor a troca */
    
    return (
      <View style={styles.Container}>
        <Image 
          source={props.image}
          color={'#26262B'}
          size={36}
        />
        <Text style={styles.Title}>{props.name}</Text>
        <Text style={styles.Desc}>{props.description}</Text>
        <DefaultButton valor='Propor uma troca'></DefaultButton>     
      </View>
    )
}