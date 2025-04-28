import { useTranslations } from "next-intl";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function FeesAndIntakeTable() {
  const t = useTranslations("internatioanl-student-table");

  const feesTable = [
    {
      title: t("tuition-fee-usd"),
      values: ["3300", "3300", "3300", "3300", "3300", "3300"],
    },
    {
      title: t("tuition-fee-inr"),
      values: [
        "2.9 Lakh",
        "2.9 Lakh",
        "2.9 Lakh",
        "2.9 Lakh",
        "2.9 Lakh",
        "2.9 Lakh",
      ],
    },
    {
      title: t("hostel-fee-usd"),
      values: ["500", "500", "500", "500", "500", "500"],
    },
    {
      title: t("hostel-fee-inr"),
      values: ["42,000", "42,000", "42,000", "42,000", "42,000", "42,000"],
    },
  ];

  const intakeTable = [
    { semester: t("autumn"), month: t("september") },
    { semester: t("spring"), month: t("january") },
  ];

  return (
    <div className="flex flex-col gap-10 py-10 bg-[--brand-blue] p-2 text-white">
      <div>
        <h2 className="text-2xl font-bold mb-6">{t("title-1")}</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="py-4">{t("particular")}</TableHead>
              <TableHead className="py-4">{t("year-1")}</TableHead>
              <TableHead className="py-4">{t("year-2")}</TableHead>
              <TableHead className="py-4">{t("year-3")}</TableHead>
              <TableHead className="py-4">{t("year-4")}</TableHead>
              <TableHead className="py-4">{t("year-5")}</TableHead>
              <TableHead className="py-4">{t("year-6")}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {feesTable.map((row, index) => (
              <TableRow
                key={index}
                className={index % 2 === 0 ? "bg-muted/10" : ""}
              >
                <TableCell className="py-4">{row.title}</TableCell>
                {row.values.map((value, idx) => (
                  <TableCell key={idx}>{value}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">{t("title-2")}</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="py-4">{t("semester")}</TableHead>
              <TableHead className="py-4">{t("months")}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {intakeTable.map((row, index) => (
              <TableRow
                key={index}
                className={index % 2 === 0 ? "bg-muted/10" : ""}
              >
                <TableCell className="py-4">{row.semester}</TableCell>
                <TableCell className="py-4">{row.month}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
export default FeesAndIntakeTable;
