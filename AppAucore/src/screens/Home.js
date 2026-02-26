import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import styles from "./StylesHome";

export default function Home() {
  const route = useRoute();
  const navigation = useNavigation();

  const { objetivo } = route.params || {};

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Roadmap</Text>
      <Text style={styles.subtitle}>{objetivo}</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Conteudo")}
      >
        <Text style={styles.cardTitle}>Módulo 1 - Fundamentos</Text>
        <Text style={styles.cardSubtitle}>
          Conceitos básicos e estrutura
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>Módulo 2 - Intermediário</Text>
        <Text style={styles.cardSubtitle}>
          Aplicações práticas e exercícios
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>Módulo 3 - Avançado</Text>
        <Text style={styles.cardSubtitle}>
          Projetos reais e desafios
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}