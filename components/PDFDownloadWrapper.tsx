"use client";

import { PDFDownloadLink } from "@react-pdf/renderer";
import { RegistrationPDF } from "./RegistrationPDF";
import { Button } from "@/components/ui/button";

export default function PDFDownloadWrapper({ formData }: { formData: any }) {
  return (
    <PDFDownloadLink
      document={<RegistrationPDF formData={formData} />}
      fileName="WITS-2023-Registration-Form.pdf"
      className="inline-block"
    >
      {({ loading }) => (
        <Button disabled={loading}>
          {loading ? "Preparing document..." : "Download Registration Form"}
        </Button>
      )}
    </PDFDownloadLink>
  );
}
