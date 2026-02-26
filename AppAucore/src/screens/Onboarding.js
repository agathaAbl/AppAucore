import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./StylesOnboarding";

export default function Onboarding() {
  const navigation = useNavigation();

  const [objetivo, setObjetivo] = useState("");
  const [tempo, setTempo] = useState("");

  function gerarPlano() {
    navigation.navigate("Home", { objetivo, tempo });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Qual seu objetivo?</Text>

      <TextInput
        placeholder="Ex: Aprender Programação"
        style={styles.input}
        value={objetivo}
        onChangeText={setObjetivo}
      />

      <TextInput
        placeholder="Quantas horas por semana?"
        style={styles.input}
        value={tempo}
        onChangeText={setTempo}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={gerarPlano}>
        <Text style={styles.buttonText}>Gerar Roadmap</Text>
      </TouchableOpacity>
    </View>
  );
}