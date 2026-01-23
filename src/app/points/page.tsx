import { defaultLocale } from "@/i18n";
import LocalePointsPage from "@/app/[locale]/points/page";

export default function PointsPage() {
  return <LocalePointsPage params={Promise.resolve({ locale: defaultLocale })} />;
}
