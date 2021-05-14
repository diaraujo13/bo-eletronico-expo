import { Formik } from 'formik'
import React, { Component, useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput, Button } from 'react-native-rapi-ui'
import FormField from '../components/form/FormField'
import FormWrapper from '../components/form/FormWrapper'
import { formSchema } from '../helpers/formSchema'
import { Layout, TopNav } from 'react-native-rapi-ui'
import { Section, SectionContent } from 'react-native-rapi-ui'
import { Ionicons } from '@expo/vector-icons'

const NewBO = ({ navigation }) => {
  const [form, setForm] = useState(formSchema)
  const [loading, setLoading] = useState(false)

  return (
    <Layout>
      <TopNav
        leftContent={<Ionicons name='chevron-back' size={20} color={'#000'} />}
        leftAction={() => navigation.goBack()}
        middleContent='Formulário'
      />

      <Section>
        <SectionContent>
          <Text
            style={{
              fontSize: 27,
              fontFamily: 'RobotoCondensed_700Bold',
              marginBottom: 10
            }}
          >
            BOLETIM DE OCORRÊNCIA - POLÍCIA MILITAR
          </Text>
          <FormWrapper>
            <Formik
              initialValues={{}}
              onSubmit={values => {
                console.log(JSON.stringify(values))
              }}
            >
              {formikObj => (
                <View style={{ flex: 1, paddingBottom: 200 }}>
                  {formSchema.map((formField, i) => (
                    <FormField
                      attrs={formField}
                      key={i}
                      formikObj={formikObj}
                    />
                  ))}

                  <Button
                    color='gray'
                    onPress={formikObj.handleSubmit}
                    leftContent={
                      <Ionicons name='person' color='white' size={34} />
                    }
                    style={{ marginBottom: 10 }}
                    text='Adicionar Envolvido'
                  />

                  <Button
                    color='gray'
                    leftContent={
                      <Ionicons name='archive' color='white' size={34} />
                    }
                    onPress={formikObj.handleSubmit}
                    text='Adicionar objeto'
                    style={{ marginBottom: 10 }}
                  />

                  <Button
                    loading={loading}
                    onPress={formikObj.handleSubmit}
                    text='Salvar'
                  />
                </View>
              )}
            </Formik>
          </FormWrapper>
        </SectionContent>
      </Section>
    </Layout>
  )
}

export default NewBO
