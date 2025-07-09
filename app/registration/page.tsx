"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icon } from "@/components/icon-mapper";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

// Dynamic import for the PDF components
const PDFDownloadButton = dynamic(
  () => {
    const component = import("@react-pdf/renderer").then((pdf) => {
      const { PDFDownloadLink } = pdf;
      const { RegistrationPDF } = require("@/components/RegistrationPDF");

      return ({ formData }: { formData: any }) => (
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
    });
    return component;
  },
  {
    ssr: false,
    loading: () => <Button disabled>Loading PDF...</Button>,
  }
);

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    title: "",
    civility: "",
    lastName: "",
    firstName: "",
    organization: "",
    address: "",
    postalCode: "",
    city: "",
    country: "",
    email: "",
    phone: "",
    fax: "",
    paperId1: "",
    paperId2: "",
    paperId3: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-20">
          <Badge
            variant="outline"
            className="border-slate-700 text-slate-400 bg-slate-900/50 px-6 py-2 mb-8 font-medium backdrop-blur-sm"
          >
            Conference Registration
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Register for WITS 2026
          </h1>
          <p className="text-xl text-slate-400 max-w-4xl mx-auto font-medium">
            Secure your spot at the premier conference on information
            technologies and systems
          </p>
        </div>

        <Card className="bg-slate-900/30 border-slate-800 backdrop-blur-sm mb-20">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-3 text-2xl">
              <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center">
                <Icon name="FileText" className="w-6 h-6 text-slate-300" />
              </div>
              CONFERENCE REGISTRATION FORM
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-slate-300">
            <div className="grid md:grid-cols-2 gap-6">
              <Field
                id="title"
                label="Title (Professor/Student/Industrial/Other)"
                value={formData.title}
                onChange={handleChange}
              />
              <Field
                id="civility"
                label="Civility (Mr./Mrs./Miss)"
                value={formData.civility}
                onChange={handleChange}
              />
              <Field
                id="lastName"
                label="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
              <Field
                id="firstName"
                label="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
              <Field
                id="organization"
                label="Organization"
                value={formData.organization}
                onChange={handleChange}
              />
              <Field
                id="address"
                label="Address"
                value={formData.address}
                onChange={handleChange}
              />
              <Field
                id="postalCode"
                label="Postal Code"
                value={formData.postalCode}
                onChange={handleChange}
              />
              <Field
                id="city"
                label="City"
                value={formData.city}
                onChange={handleChange}
              />
              <Field
                id="country"
                label="Country"
                value={formData.country}
                onChange={handleChange}
              />
              <Field
                id="email"
                label="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <Field
                id="phone"
                label="Phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <Field
                id="fax"
                label="Fax"
                value={formData.fax}
                onChange={handleChange}
              />
              <Field
                id="paperId1"
                label="Paper ID 1"
                value={formData.paperId1}
                onChange={handleChange}
              />
              <Field
                id="paperId2"
                label="Paper ID 2"
                value={formData.paperId2}
                onChange={handleChange}
              />
              <Field
                id="paperId3"
                label="Paper ID 3"
                value={formData.paperId3}
                onChange={handleChange}
              />
            </div>

            <div className="flex justify-center mt-8">
              <PDFDownloadButton formData={formData} />
            </div>

            <div className="mt-12 max-w-3xl mx-auto p-6 rounded-xl bg-red-900/30 border border-red-600 text-red-200 text-center text-lg">
              <div className="space-y-4">
                <p className="font-semibold text-white">Payment Information:</p>

                <div className="text-left space-y-2">
                  <p>
                    <span className="font-medium">Bank Name:</span> Banque
                    Populaire
                  </p>
                  <p>
                    <span className="font-medium">Address:</span> Agence AL
                    AZHAR – FEZ – MOROCCO
                  </p>
                  <p>
                    <span className="font-medium">Account Number:</span> MA
                    1272702111627249200009 94
                  </p>
                  <p>
                    <span className="font-medium">SWIFT Code:</span> BCPOMAMC
                  </p>
                  <p>
                    <span className="font-medium">Receiver:</span> Association
                    Nationale de recherche en Ingénierie des Technologies
                    Emergentes
                  </p>
                  <p>
                    <span className="font-medium">Transfer Reason:</span> WITS
                    2023 + Paper ID
                  </p>
                </div>

                <div className="pt-4 border-t border-red-600">
                  <p>
                    Please send us a scanned copy of the payment receipt with
                    the completed registration form to:{" "}
                    <span className="text-white font-semibold underline">
                      wits-conference@usmba.ac.ma
                    </span>
                  </p>
                  <p className="mt-2">
                    <strong className="text-white">Subject:</strong>{" "}
                    Registration for [please add your paper ID or Listener or
                    Industrial]
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

type FieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Field = ({ id, label, value, onChange }: FieldProps) => (
  <div className="space-y-2">
    <Label htmlFor={id} className="text-slate-300 font-medium">
      {label}
    </Label>
    <Input
      id={id}
      className="bg-slate-800 border-slate-700 text-white"
      value={value}
      onChange={onChange}
    />
  </div>
);
