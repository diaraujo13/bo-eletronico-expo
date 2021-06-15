import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { TextInput, Button, CheckBox } from "react-native-rapi-ui";
import FormField from "../components/form/FormField";
import FormWrapper from "../components/form/FormWrapper";
import { formSchema, personSchema, objetosSchema } from "../helpers/formSchema";
import { Layout, TopNav } from "react-native-rapi-ui";
import { Section, SectionContent } from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import { FieldArray, Formik } from "formik";
import FormGroup from "../components/form/FormGroup";
import PersonForm from "../components/widgets/PersonForm";
import ObjetosForm from "../components/widgets/ObjetosForm";
import VeiculosForm from "../components/widgets/VeiculosForm";

import { API_URL } from "../helpers/constants";

const NewBO = ({ navigation }) => {
  const [form, setForm] = useState(formSchema);
  const [pessoasForm, setPessoasForm] = useState(personSchema);
  const [objetosForm, setObjetosForm] = useState(objetosSchema);
  const [showPersonsForm, togglePersonsFormVisibility] = useState(false);
  const [showObjetosForm, toggleObjetosFormVisibility] = useState(false);
  const [showVeiculosForm, toggleVeiculosFormVisibility] = useState(false);


  const [loading, setLoading] = useState(false);
  const [dados, setDados] = React.useState("");

  return (
    <Layout>
      <TopNav
        leftContent={<Ionicons name="chevron-back" size={20} color={"#000"} />}
        leftAction={() => navigation.goBack()}
        middleContent="Formulário"
      />

      <Section>
        <SectionContent>
          <Text
            style={{
              fontSize: 27,
              fontFamily: "RobotoCondensed_700Bold",
              marginBottom: 10,
            }}
          >
            BOLETIM DE OCORRÊNCIA - POLÍCIA MILITAR
          </Text>
          <FormWrapper>
            <Formik
              initialValues={{}}
              onSubmit={async (values) => {
                console.log(API_URL);
                fetch(API_URL + "/boletim", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(values),
                });

                console
                  .log(values + "brendo")
                  .then((res) => res.json())
                  .then((res) => {
                    console.log(res);
                    if (!res.error) {
                      alert("Dados salvos com sucesso");
                      navigation.goBack();
                    }
                  })
                  .catch((err) => {
                    Alert.alert(
                      "Erro",
                      "Ocorreu um erro ao processar sua requisiçao"
                    );

                    console.error(err);
                  });
              }}
            >
              {(formikObj) => (
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

                  <View
                    style={{
                      marginTop: 10,
                      marginBottom: 10,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <CheckBox
                      value={showPersonsForm}
                      onValueChange={(val) => togglePersonsFormVisibility(val)}
                    />
                    <Text size="md" style={{ marginLeft: 10, color: "gray" }}>
                      Houve envolvidos?
                    </Text>
                  </View>

                  {showPersonsForm && (
                    <FormGroup>
                      {pessoasForm.map((formFields, i) => (
                        <PersonForm
                          fields={formFields}
                          key={i}
                          index={i}
                          formikObj={formikObj}
                        />
                      ))}
                      <Button
                        color="gray"
                        onPress={() => {
                          setPessoasForm([...pessoasForm, personSchema[0]]);
                        }}
                        leftContent={
                          <Ionicons name="person" color="white" size={34} />
                        }
                        style={{ marginBottom: 10 }}
                        text="Adicionar Envolvido"
                      />
                    </FormGroup>
                  )}

                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <CheckBox
                      value={showObjetosForm}
                      onValueChange={(val) => toggleObjetosFormVisibility(val)}
                    />
                    <Text size="md" style={{ marginLeft: 10, color: "gray" }}>
                      Houve objetos?
                    </Text>
                  </View>


                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <CheckBox
                      value={showObjetosForm}
                      onValueChange={(val) => toggleObjetosFormVisibility(val)}
                    />
                    <Text size="md" style={{ marginLeft: 10, color: "gray" }}>
                      Houve objetos?
                    </Text>
                  </View>






                  <View style={{ margin: 15 }}></View>

                  {showObjetosForm && (
                    <FormGroup>
                      {objetosForm.map((formFields, i) => (
                        <ObjetosForm
                          fields={formFields}
                          key={i}
                          index={i}
                          formikObj={formikObj}
                        />
                      ))}
                      <Button
                        color="gray"
                        onPress={() => {
                          setObjetosForm([...objetosForm, objetosSchema[0]]);
                        }}
                        leftContent={
                          <Ionicons name="archive" color="white" size={34} />
                        }
                        style={{ marginBottom: 10 }}
                        text="Adicionar Objeto"
                      />
                    </FormGroup>
                  )}



                
<View style={{ margin: 15 }}></View>

{showVeiculosForm && (
  <FormGroup>
    {objetosForm.map((formFields, i) => (
      <VeiculoForm
        fields={formFields}
        key={i}
        index={i}
        formikObj={formikObj}
      />
    ))}
    <Button
      color="gray"
      onPress={() => {
        setObjetosForm([...veiculosForm, veiculosSchema[0]]);
      }}
      leftContent={
        <Ionicons name="archive" color="white" size={34} />
      }
      style={{ marginBottom: 10 }}
      text="Adicionar Veículo"
    />
  </FormGroup>
)}









                  <Button
                    loading={loading}
                    onPress={formikObj.handleSubmit}
                    text="Salvar"
                  />
                </View>
              )}
            </Formik>
          </FormWrapper>
        </SectionContent>
      </Section>
    </Layout>
  );
};

export default NewBO;
