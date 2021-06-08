import React, { useState } from 'react'
import {View, Text, StyleSheet, Alert} from 'react-native'
import { TextInput, Button } from 'react-native-rapi-ui'
import FormField from '../components/form/FormField'
import FormWrapper from '../components/form/FormWrapper'
import { formSchema, personSchema, objetosSchema } from '../helpers/formSchema'
import { Layout, TopNav } from 'react-native-rapi-ui'
import { Section, SectionContent } from 'react-native-rapi-ui'
import { Ionicons } from '@expo/vector-icons'
import { FieldArray, Formik } from 'formik'
import FormGroup from '../components/form/FormGroup'
import PersonForm from '../components/widgets/PersonForm'
import ObjetosForm from '../components/widgets/ObjetosForm'
import {API_URL} from "../helpers/constants";

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
              onSubmit={ async values => {

                  fetch(API_URL, {
                      method: 'POST',
                      headers: {
                          'Content-Type': 'application/json',
                      },
                      body: JSON.stringify(values)
                  })
                      .then( res => res.json())
                      .then( res => {
                          if (!res.error){
                              alert("Dados salvos com sucesso");
                              navigation.goBack()
                          }
                      }).catch( err => {
                          Alert.alert("Erro", "Ocorreu um erro ao processar sua requisiçao")
                  })

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
                    {pessoasForm.map((formFields, i) => <PersonForm fields={formFields} key={i} index={i} formikObj={formikObj} />)}
                    <Button
                      color='gray'
                      onPress={() => {
                         setPessoasForm( [...pessoasForm, personSchema[0]])
                      }}
                      leftContent={
                        <Ionicons name='person' color='white' size={34} />
                      }
                      style={{ marginBottom: 10 }}
                      text='Adicionar Envolvido'
                    />
                  </FormGroup>
                  <FormGroup>
                    {objetosForm.map((formFields, i) => <ObjetosForm fields={formFields} key={i} index={i} formikObj={formikObj} />)}
                    <Button
                      color='gray'
                      onPress={() => {
                         setObjetosForm( [...objetosForm, objetosSchema[0]])
                      }}
                      leftContent={
                        <Ionicons name='archive' color='white' size={34} />
                      }
                      style={{ marginBottom: 10 }}
                      text='Adicionar Objeto'
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
