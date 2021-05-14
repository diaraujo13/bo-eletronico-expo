import { Formik } from 'formik'
import React, { Component, useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput, Button } from 'react-native-rapi-ui'
import FormField from '../components/form/FormField'
import FormWrapper from '../components/form/FormWrapper'
import { formSchema } from '../helpers/formSchema'

const NewBO = () => {
  const [form, setForm] = useState(formSchema)
  const [loading, setLoading] = useState(false)

  return (
    <View style={{ padding: 10 }}>
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
            <>
              {formSchema.map((formField, i) => (
                <FormField attrs={formField} key={i} formikObj={formikObj} />
              ))}
              <Button
                loading={loading}
                onPress={formikObj.handleSubmit}
                text='Salvar'
              />
            </>
          )}
        </Formik>
      </FormWrapper>
    </View>
  )
}

export default NewBO
