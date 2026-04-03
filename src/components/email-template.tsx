// EmailTemplate.tsx
import React from "react";
import { useTranslations } from "next-intl";

interface EmailTemplateProps {
  name: string;
  email: string;
  companyName: string;
  phone: string;
  selectedService: string;
  message: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  email,
  companyName,
  phone,
  selectedService,
  message,
}) => {
  const t = useTranslations("emailTemplate");

  return (
    <div>
      <h1>{t("title")}</h1>
      <p>
        <strong>{t("name")}:</strong> {name}
      </p>
      <p>
        <strong>{t("email")}:</strong> {email}
      </p>
      <p>
        <strong>{t("companyName")}:</strong> {companyName}
      </p>
      <p>
        <strong>{t("phone")}:</strong> {phone}
      </p>
      <p>
        <strong>{t("selectedService")}:</strong> {selectedService}
      </p>
      <p>
        <strong>{t("message")}:</strong> {message}
      </p>
    </div>
  );
};
