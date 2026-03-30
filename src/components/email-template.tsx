// EmailTemplate.tsx
import React from "react";

interface EmailTemplateProps {
  naam: string;
  email: string;
  postcode: string;
  telefoonnummer: string;
  dakrenovatie: boolean;
  gevelisolatie: boolean;
  zonnepaneleninstallatie: boolean;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  naam,
  email,
  postcode,
  telefoonnummer,
  dakrenovatie,
  gevelisolatie,
  zonnepaneleninstallatie,
}) => {
  return (
    <div>
      <h1>Nieuw bericht van het Vertilux contactformulier</h1>
      <p><strong>Naam:</strong> {naam}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Postcode:</strong> {postcode}</p>
      <p><strong>Telefoonnummer:</strong> {telefoonnummer}</p>
      <p><strong>Dakrenovatie:</strong> {dakrenovatie ? "Ja" : "Nee"}</p>
      <p><strong>Gevelisolatie:</strong> {gevelisolatie ? "Ja" : "Nee"}</p>
      <p><strong>Zonnepaneleninstallatie:</strong> {zonnepaneleninstallatie ? "Ja" : "Nee"}</p>
    </div>
  );
};
