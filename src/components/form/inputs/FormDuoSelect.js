import React, { Component, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Picker } from '@react-native-community/picker'

const FormDuoSelect = props => {
  const {
    attrs: { name },
    values,
    setFieldValue,
    options
  } = props

  const [suboptions, setSubOptions] = useState([])
  return (
    <>
      <Picker
        onValueChange={itemValue => {
          setFieldValue(name, itemValue)
          console.log(options[itemValue], itemValue)
          setSubOptions(options[itemValue].options)
        }}
        selectedValue={values[name]}
      >
        {options.map(({ label, value }, index) => (
          <Picker.Item key={value} label={label} value={index} />
        ))}
      </Picker>
      <Picker
        onValueChange={itemValue =>
          setFieldValue(name + '_category', itemValue)
        }
        selectedValue={values[name + '_category']}
      >
        {suboptions.map(({ label, value }, index) => (
          <Picker.Item key={value} label={label} value={index} />
        ))}
      </Picker>
    </>
  )
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50'
  }
})

//make this component available to the app
export default FormDuoSelect
