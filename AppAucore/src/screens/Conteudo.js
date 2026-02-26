import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./StylesConteudo";

export default function Conteudo() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Fundamentos</Text>

      <Text style={styles.text}>
        Lógica de programação é a base para resolver problemas
        utilizando instruções organizadas.
      </Text>

      <Text style={styles.text}>
        Ela envolve:
      </Text>

      <Text style={styles.bullet}>• Variáveis</Text>
      <Text style={styles.bullet}>• Condições</Text>
      <Text style={styles.bullet}>• Estruturas de repetição</Text>
    </ScrollView>
  );
}