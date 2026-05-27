import { useState } from "react";
import { SlidersHorizontal, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { BudgetSummary } from "@/features/budget/budgetType";
import BudgetForm from "./budget-form";

interface SetBudgetDrawerProps {
  month: number;
  year: number;
  budget?: BudgetSummary;
}

const SetBudgetDrawer = ({ month, year, budget }: SetBudgetDrawerProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Drawer direction="right" open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button>
          <SlidersHorizontal className="h-4 w-4" />
          {budget?.hasBudget ? "Update Budget" : "Set Budget"}
        </Button>
      </DrawerTrigger>
      <DrawerContent className="flex h-full max-w-md flex-col overflow-hidden">
        <DrawerHeader className="relative flex-shrink-0">
          <div>
            <DrawerTitle className="text-xl font-semibold">
              {budget?.hasBudget ? "Update Budget" : "Set Budget"}
            </DrawerTitle>
            <DrawerDescription>
              Set your monthly spending limit and category limits.
            </DrawerDescription>
          </div>
          <DrawerClose className="absolute right-4 top-4">
            <XIcon className="h-5 w-5 !cursor-pointer" />
          </DrawerClose>
        </DrawerHeader>

        <div className="min-h-0 flex-1">
          <BudgetForm
            month={month}
            year={year}
            budget={budget}
            onCloseDrawer={() => setOpen(false)}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default SetBudgetDrawer;
