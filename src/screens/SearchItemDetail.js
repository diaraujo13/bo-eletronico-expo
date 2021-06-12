import React from 'react'
import { Linking, View } from 'react-native'
import { Button, Layout, TopNav, Text, theme } from 'react-native-rapi-ui'
import { Ionicons } from '@expo/vector-icons'

export default function ({ route, navigation }) {

  const { _id } = route.params;
  return (
    <Layout>
      <TopNav
        middleContent='Detalhes da ocorrência'
        leftContent={
          <Ionicons name='chevron-back' size={20} color={theme.black} />
        }
        leftAction={() => navigation.goBack()}
      />
      <ScrollView style={{flex: 1}}>

      <View
        style={{
          flex: 1
        }}
      >
        <Text fontWeight='bold'>Resumo da Ocorrência</Text>

        <Buttton text="FAZER DOWNLOAD PDF" onClick={ () => {
          Linking.openURL
        }}></Buttton>
      </View>
      </ScrollView>

    </Layout>
  )
}
