import React from 'react'
import { View } from 'react-native'
import { Layout, Text } from 'react-native-rapi-ui'
import { TopNav } from 'react-native-rapi-ui'

export default function ({ navigation }) {
  return (
    <Layout>
      <TopNav middleContent='Procurar' />
      <View
        style={{
          flex: 1,
          padding: 20
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'RobotoCondensed_400Regular',
            marginBottom: 10,
            textTransform: 'uppercase'
          }}
        >
          PROCURAR
        </Text>
      </View>
    </Layout>
  )
}
