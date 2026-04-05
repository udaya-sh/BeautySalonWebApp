import { getTranslations } from "next-intl/server";

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function EmailTemplate(data: EmailTemplateProps) {

  const t = await getTranslations("contact.form");

  return (
    <div>
      {/* <h1>{t("title")}</h1> */}
      <p>
        <strong>{t("name")}:</strong> {data.name}
      </p>
      <p>
        <strong>{t("email")}:</strong> {data.email}
      </p>
      <p>
        <strong>{t("phone")}:</strong> {data.phone}
      </p>
      <p>
        <strong>{t("message")}:</strong> {data.message}
      </p>
    </div>
  );
};
