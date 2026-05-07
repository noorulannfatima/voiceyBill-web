import { FC } from "react";
import CountUp from "react-countup";
import { TrendingDownIcon, TrendingUpIcon, LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/format-currency";
import { formatPercentage } from "@/lib/format-percentage";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { DateRangeEnum, DateRangeType } from "@/components/date-range-select";

type CardType = "balance" | "income" | "expenses" | "savings";
type CardStatus = {
  label: string;
  colorClass: string;
  Icon: LucideIcon;
  description?: string;
};

interface SummaryCardProps {
  title: string;
  value?: number;
  dateRange?: DateRangeType;
  percentageChange?: number;
  isPercentageValue?: boolean;
  isLoading?: boolean;
  expenseRatio?: number;
  cardType: CardType;
}

const getCardStatus = (
  value: number,
  cardType: CardType,
  expenseRatio?: number
): CardStatus => {
  if (cardType === "savings") {
    if (value === 0) {
      return { label: "No Savings Record", colorClass: "text-white/40", Icon: TrendingDownIcon };
    }
    if (value < 10) {
      return {
        label: "Low Savings",
        colorClass: "text-white/50",
        Icon: TrendingDownIcon,
        description: `Only ${value.toFixed(1)}% saved`,
      };
    }
    if (value < 20) {
      return {
        label: "Moderate",
        colorClass: "text-white/60",
        Icon: TrendingDownIcon,
        description: `${expenseRatio?.toFixed(0)}% spent`,
      };
    }
    if (expenseRatio && expenseRatio > 75) {
      return {
        label: "High Spend",
        colorClass: "text-white/50",
        Icon: TrendingDownIcon,
        description: `${expenseRatio.toFixed(0)}% spent`,
      };
    }
    if (expenseRatio && expenseRatio > 60) {
      return {
        label: "Warning: High Spend",
        colorClass: "text-white/50",
        Icon: TrendingDownIcon,
        description: `${expenseRatio.toFixed(0)}% spent`,
      };
    }
    return { label: "Good Savings", colorClass: "text-white/80", Icon: TrendingUpIcon };
  }

  if (value === 0) {
    const typeLabel =
      cardType === "income" ? "Income" : cardType === "expenses" ? "Expenses" : "Balance";
    return { label: `No ${typeLabel}`, colorClass: "text-white/40", Icon: TrendingDownIcon };
  }

  if (cardType === "balance" && value < 0) {
    return {
      label: "Overdrawn",
      colorClass: "text-white/50",
      Icon: TrendingDownIcon,
      description: "Balance is negative",
    };
  }

  return { label: "", colorClass: "", Icon: TrendingDownIcon };
};

const getTrendDirection = (value: number, cardType: CardType) => {
  if (cardType === "expenses") return value <= 0 ? "positive" : "negative";
  return value >= 0 ? "positive" : "negative";
};

const SummaryCard: FC<SummaryCardProps> = ({
  title,
  value = 0,
  dateRange,
  percentageChange,
  isPercentageValue,
  isLoading,
  expenseRatio,
  cardType = "balance",
}) => {
  const status = getCardStatus(value, cardType, expenseRatio);
  const showTrend =
    percentageChange !== undefined &&
    percentageChange !== null &&
    cardType !== "savings";

  const trendDirection =
    showTrend && percentageChange !== 0
      ? getTrendDirection(percentageChange, cardType)
      : null;

  if (isLoading) {
    return (
      <Card className="border-0 bg-white/5 gap-0">
        <CardHeader className="flex flex-row items-center justify-between pb-5">
          <Skeleton className="h-4 w-24 bg-white/20" />
        </CardHeader>
        <CardContent className="space-y-8">
          <Skeleton className="h-10 w-full bg-white/20" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-3 w-12 bg-white/20" />
            <Skeleton className="h-3 w-16 bg-white/20" />
          </div>
        </CardContent>
      </Card>
    );
  }

  const formatCountupValue = (val: number) => {
    return isPercentageValue
      ? formatPercentage(val, { decimalPlaces: 1 })
      : formatCurrency(val, { isExpense: cardType === "expenses", showSign: false });
  };

  return (
    <Card className="border-0 bg-white/5 gap-0">
      <CardHeader className="flex flex-row items-center justify-between pb-5">
        <CardTitle className="text-[14px] text-white/60 font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div
          className={cn(
            "text-2xl font-bold tracking-tight",
            cardType === "balance" && value < 0 ? "text-white/50" : "text-white"
          )}
        >
          <CountUp
            start={0}
            end={value}
            preserveValue
            decimals={2}
            decimalPlaces={2}
            formattingFn={formatCountupValue}
          />
        </div>

        <div className="text-sm mt-1">
          {cardType === "savings" ? (
            <div className="flex items-center gap-1.5">
              <status.Icon className={cn("size-3.5", status.colorClass)} />
              <span className={status.colorClass}>{status.label}</span>
              {status.description && (
                <span className="text-white/40 ml-1">• {status.description}</span>
              )}
            </div>
          ) : dateRange?.value === DateRangeEnum.ALL_TIME ? (
            <span className="text-white/40">Showing {dateRange?.label}</span>
          ) : value === 0 || status.label ? (
            <div className="flex items-center gap-1.5">
              <status.Icon className={cn("size-3.5", status.colorClass)} />
              <span className={status.colorClass}>{status.label}</span>
              {status.description && (
                <span className="text-white/40">• {status.description}</span>
              )}
              {!status.description && (
                <span className="text-white/40">• {dateRange?.label}</span>
              )}
            </div>
          ) : showTrend ? (
            <div className="flex items-center gap-1.5">
              {percentageChange !== 0 && (
                <div
                  className={cn(
                    "flex items-center gap-0.5",
                    trendDirection === "positive"
                      ? "text-white/80"
                      : "text-white/40"
                  )}
                >
                  {trendDirection === "positive" ? (
                    <TrendingUpIcon className="size-3" />
                  ) : (
                    <TrendingDownIcon className="size-3" />
                  )}
                  <span>
                    {formatPercentage(percentageChange || 0, {
                      showSign: percentageChange !== 0,
                      isExpense: cardType === "expenses",
                      decimalPlaces: 1,
                    })}
                  </span>
                </div>
              )}
              {percentageChange === 0 && (
                <div className="flex items-center gap-0.5 text-white/40">
                  <TrendingDownIcon className="size-3" />
                  <span>{formatPercentage(0, { showSign: false, decimalPlaces: 1 })}</span>
                </div>
              )}
              <span className="text-white/40">• {dateRange?.label}</span>
            </div>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
