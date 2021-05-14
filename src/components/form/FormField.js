//FormikTextInputt liraries
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-rapi-ui'
import FormDateTimePicker from './inputs/FormDateTimePicker'
import FormTimePicker from './inputs/FormTimePicker'
import FormSelect from './inputs/FormSelect'

// create a component
const FormField = ({ attrs, formikObj }) => {
  const { title, subtitle, placeholder, value, name, ...otherProps } = attrs
  const { handleChange } = formikObj

  const renderInputComponent = () => {
    switch (attrs.inputType) {
      case 'text':
        return (
          <TextInput
            placeholder={placeholder}
            underlineColorAndroid='rgba(0,0,0,0)'
            onChangeText={handleChange(name)}
            name={name}
            value={value}
            {...formikObj}
          />
        )
        break
      case 'datetime':
        return <FormDateTimePicker name={name} {...formikObj} />
        break
      case 'select':
        return <FormSelect attrs={attrs} {...formikObj} />
        break
      default:
        break
    }
  }

  return (
    <View>
      {title && <Text style={styles.form_field_label}>{title}</Text>}
      {subtitle && <Text style={styles.form_field_subtitle}>{subtitle}</Text>}
      <View style={styles.px10}>{renderInputComponent()}</View>
    </View>
  )
}

// define your styles
const styles = StyleSheet.create({
  px10: { paddingVertical: 10 },
  form_field_label: {
    fontSize: 20,
    fontFamily: 'RobotoCondensed_400Regular',
    marginBottom: 10,
    textTransform: 'uppercase'
  },
  form_field_subtitle: {
    fontSize: 15,
    color: 'gray',
    fontFamily: 'RobotoCondensed_400Regular',
    marginBottom: 10
  },
  container: {
    flex: 1
  }
})

//make this component available to the app
export default FormField
