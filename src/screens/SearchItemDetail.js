import React from 'react'
import { View } from 'react-native'
import { Layout, TopNav, Text, theme } from 'react-native-rapi-ui'
import { Ionicons } from '@expo/vector-icons'

export default function ({ navigation }) {
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
        {/* This text using ubuntu font */}
        <Text fontWeight='bold'>This is the second screen</Text>
      </View>
      </ScrollView>

    </Layout>
  )
}
