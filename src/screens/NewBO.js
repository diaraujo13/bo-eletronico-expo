import { Formik } from 'formik'
import React, { Component, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-rapi-ui'
import FormWrapper from '../components/FormWrapper'

const NewBO = () => {
  const [loading, setLoading] = useState(false)

  return (
    <>
      <FormWrapper>
        <Formik
          initialValues={{}}
          onSubmit={values => {
            console.warn(values)
          }}
        ></Formik>
      </FormWrapper>
    </>
  )
}

export default NewBO
