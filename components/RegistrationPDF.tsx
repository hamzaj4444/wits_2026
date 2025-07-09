"use client";

import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// PDF styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
  },
  header: {
    marginBottom: 20,
    textAlign: "center",
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 20,
  },
  section: {
    marginBottom: 15,
  },
  label: {
    fontSize: 12,
    marginBottom: 5,
    fontWeight: "bold",
  },
  instructionText: {
    fontSize: 10,
    marginBottom: 5,
  },
  boldText: {
    fontWeight: "bold",
  },
});

// The actual PDF document
export const RegistrationPDF = ({ formData }: { formData: any }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>WITS-2023 CONFERENCE REGISTRATION FORM</Text>
        <Text style={styles.subtitle}>
          2023 international conference on WIreless Technologies, embedded and
          intelligent Systems
        </Text>
        <Text style={styles.subtitle}>December 14, 15 and 16, 2023</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Personal Information</Text>
        <Text style={styles.instructionText}>Title: {formData.title}</Text>
        <Text style={styles.instructionText}>
          Civility: {formData.civility}
        </Text>
        <Text style={styles.instructionText}>
          First Name: {formData.firstName}
        </Text>
        <Text style={styles.instructionText}>
          Last Name: {formData.lastName}
        </Text>
        <Text style={styles.instructionText}>Email: {formData.email}</Text>
        <Text style={styles.instructionText}>Phone: {formData.phone}</Text>
        <Text style={styles.instructionText}>Fax: {formData.fax}</Text>
        <Text style={styles.instructionText}>
          Organization: {formData.organization}
        </Text>
        <Text style={styles.instructionText}>Address: {formData.address}</Text>
        <Text style={styles.instructionText}>
          Postal Code: {formData.postalCode}
        </Text>
        <Text style={styles.instructionText}>City: {formData.city}</Text>
        <Text style={styles.instructionText}>Country: {formData.country}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Submitted Papers</Text>
        <Text style={styles.instructionText}>
          Paper ID 1: {formData.paperId1 || "-"}
        </Text>
        <Text style={styles.instructionText}>
          Paper ID 2: {formData.paperId2 || "-"}
        </Text>
        <Text style={styles.instructionText}>
          Paper ID 3: {formData.paperId3 || "-"}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Payment Information:</Text>
        <Text style={styles.instructionText}>
          Name of the bank: Banque Populaire
        </Text>
        <Text style={styles.instructionText}>
          Address: Agence AL AZHAR – FEZ – MOROCCO
        </Text>
        <Text style={styles.instructionText}>
          Account Number: MA 1272702111627249200009 94
        </Text>
        <Text style={styles.instructionText}>SWIFT: BCPOMAMC</Text>
        <Text style={styles.instructionText}>
          Receiver: Association Nationale de recherche en Ingénierie des
          Technologies Emergentes
        </Text>
        <Text style={styles.instructionText}>
          Transfer Reason: WITS 2023 + Paper ID
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Registration Fee includes:</Text>
        <Text style={styles.instructionText}>
          • Admission to all technical sessions
        </Text>
        <Text style={styles.instructionText}>
          • Volume of abstract and other handouts
        </Text>
        <Text style={styles.instructionText}>• Lunches for 2 days</Text>
        <Text style={styles.instructionText}>• Coffee breaks for 3 days</Text>
        <Text style={styles.instructionText}>
          • Electronic conference proceedings
        </Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={styles.instructionText}>
          Please send us a scanned copy of the payment receipt with this
          completed registration form to:
        </Text>
        <Text style={[styles.instructionText, styles.boldText]}>
          wits-conference@usmba.ac.ma
        </Text>
        <Text style={styles.instructionText}>
          with Subject: Registration for [please add your paper ID or Listener
          or Industrial]
        </Text>
      </View>
    </Page>
  </Document>
);
