import React, { Component, useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput, Button } from 'react-native-rapi-ui'
import FormField from '../components/form/FormField'
import FormWrapper from '../components/form/FormWrapper'
import { formSchema, personSchema, objetosSchema } from '../helpers/formSchema'
import { Layout, TopNav } from 'react-native-rapi-ui'
import { Section, SectionContent } from 'react-native-rapi-ui'
import { Ionicons } from '@expo/vector-icons'
import { FieldArray, Formik } from 'formik'
import FormGroup from '../components/form/FormGroup'

const NewBO = ({ navigation }) => {
  const [form, setForm] = useState(formSchema)
  const [pessoasForm, setPessoasForm] = useState(personSchema)
  const [objetosForm, setObjetosForm] = useState(objetosSchema)

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
                  <FormGroup>
                    {form.map((formField, i) => (
                      <FormField
                        attrs={formField}
                        key={i}
                        formikObj={formikObj}
                      />
                    ))}
                  </FormGroup>
                  <FormGroup>
                    {pessoasForm.map((formField, i) => (
                      <FormField
                        attrs={formField}
                        key={'person-' + i}
                        formikObj={formikObj}
                      />
                    ))}

                    <Button
                      color='gray'
                      onPress={() => {
                        let newForm = setForm({
                          ...form,
                          pessoas: [...form.pessoas]
                        })
                      }}
                      leftContent={
                        <Ionicons name='person' color='white' size={34} />
                      }
                      style={{ marginBottom: 10 }}
                      text='Adicionar Envolvido'
                    />
                  </FormGroup>

                  <FormGroup>
                    <FieldArray
                      name='objetos'
                      render={arrayHelpers => (
                        <>
                          {formikObj.values.objetos &&
                          formikObj.values.objetos.length > 0
                            ? formikObj.values.objetos.map(
                                (formField, index) => (
                                  <View>
                                    <FormField
                                      attrs={{
                                        ...formField,
                                        name: `objetos.${index}`
                                      }}
                                      name={`objetos.${index}`}
                                      key={'objetos-' + index}
                                      formikObj={formikObj}
                                    />
                                  </View>
                                )
                              )
                            : null}

                          <Button
                            color='gray'
                            leftContent={
                              <Ionicons
                                name='archive'
                                color='white'
                                size={34}
                              />
                            }
                            onPress={() => {
                              arrayHelpers.push(objetosSchema[0])
                            }}
                            text='Adicionar objeto'
                            style={{ marginBottom: 10 }}
                          />
                        </>
                      )}
                    />
                  </FormGroup>

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
