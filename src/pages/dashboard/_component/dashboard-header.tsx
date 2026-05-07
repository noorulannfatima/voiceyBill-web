import { DateRangeSelect, DateRangeType } from "@/components/date-range-select";
import AddTransactionDrawer from "@/components/transaction/add-transaction-drawer";

interface Props {
  title: string;
  subtitle: string;
  dateRange?: DateRangeType;
  setDateRange?: (range: DateRangeType) => void;
}

const DashboardHeader = ({ title, subtitle, dateRange, setDateRange }: Props) => {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
      <div className="space-y-1">
        <h2 className="text-2xl lg:text-3xl font-semibold text-white">{title}</h2>
        <p className="text-white/50 text-sm">{subtitle}</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-end gap-3">
        <DateRangeSelect
          dateRange={dateRange || null}
          setDateRange={(range) => setDateRange?.(range)}
        />
        <AddTransactionDrawer />
      </div>
    </div>
  );
};

export default DashboardHeader;
