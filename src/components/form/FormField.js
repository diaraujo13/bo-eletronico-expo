//FormikTextInputt liraries
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-rapi-ui'
import FormDatePicker from './inputs/FormDatePicker'
import FormTimePicker from './inputs/FormTimePicker'
import FormSelect from './inputs/FormSelect'
import FormDuoSelect from './inputs/FormDuoSelect'

// create a component
const FormField = ({ attrs, formikObj }) => {
  const { title, subtitle, placeholder, name, ...otherProps } = attrs
  const { handleChange, values } = formikObj

  const renderInputComponent = () => {
    switch (attrs.inputType) {
      case 'text':
        return (
          <TextInput
            placeholder={placeholder}
            underlineColorAndroid='rgba(0,0,0,0)'
            onChangeText={handleChange(name)}
            value={values[name]}
            {...formikObj}
          />
        )
        break
      case 'date':
        return <FormDatePicker  {...formikObj} />
        break
      case 'select':
        return (
          <FormSelect
            attrs={attrs}
            {...formikObj}
            {...otherProps}
          />
        )
        break
      case 'duo_select':
        return (
          <FormDuoSelect
            name={name}
            attrs={attrs}
            {...formikObj}
            {...otherProps}
          />
        )
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
    fontSize: 13,
    fontFamily: 'RobotoCondensed_400Regular',
    marginBottom: 10,
    textTransform: 'uppercase'
  },
  form_field_subtitle: {
    fontSize: 11,
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
