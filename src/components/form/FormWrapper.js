import React, { Component } from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native'
import KeyboardSpacer from 'react-native-keyboard-spacer'

const FormWrapper = props => {
  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          >
            {props.children}
          </KeyboardAvoidingView>
        </ScrollView>
      </TouchableWithoutFeedback>
      <KeyboardSpacer />
    </>
  )
}

export default FormWrapper
