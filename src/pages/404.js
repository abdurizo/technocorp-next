import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      locale: locale,
    },
  };
}

export default function Custom404() {
  const { t } = useTranslation();
  return (
    <>
      <div className="wrap_404">
        <h1 className="text-[200px]">404</h1>
        <p className="text-[40px] mb-10">{t("not_found")}</p>
        <Link href="/" className="btn_404">
          {t("back_main")}
        </Link>
      </div>
    </>
  );
}
