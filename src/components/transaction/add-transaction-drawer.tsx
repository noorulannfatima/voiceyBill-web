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
import {
  PlusIcon,
  XIcon,
  FileTextIcon,
  ScanTextIcon,
  MicIcon,
} from "lucide-react";
import { useState } from "react";
import TransactionForm from "./transaction-form";
import { cn } from "@/lib/utils";

type TransactionMode = "voice" | "scan" | "manual";

const AddTransactionDrawer = () => {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<TransactionMode>("voice");

  const onCloseDrawer = () => {
    setOpen(false);
  };

  const tabs = [
    {
      id: "voice" as TransactionMode,
      label: "Voice",
      icon: MicIcon,
      description: "Add transaction by voice",
    },
    {
      id: "scan" as TransactionMode,
      label: "AI Scan",
      icon: ScanTextIcon,
      description: "Scan receipt with AI",
    },
    {
      id: "manual" as TransactionMode,
      label: "Manual",
      icon: FileTextIcon,
      description: "Enter transaction details manually",
    },
  ];

  return (
    <Drawer direction="right" open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="!cursor-pointer">
          <PlusIcon className="h-4 w-4" />
          Add Transaction
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-w-md h-full flex flex-col">
        <DrawerHeader className="relative flex-shrink-0">
          <div>
            <DrawerTitle className="text-xl font-semibold">
              Add Transaction
            </DrawerTitle>
            <DrawerDescription>
              Choose how you want to add your transaction
            </DrawerDescription>
          </div>
          <DrawerClose className="absolute top-4 right-4">
            <XIcon className="h-5 w-5 !cursor-pointer" />
          </DrawerClose>
        </DrawerHeader>

        <div className="px-2 sm:px-4 pb-4 flex-shrink-0">
          <div className="flex space-x-1 rounded-lg bg-muted p-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setMode(tab.id)}
                  className={cn(
                    "flex-1 flex items-center cursor-pointer justify-center gap-1 sm:gap-2 rounded-md px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium transition-all",
                    mode === tab.id
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Icon className="h-4 w-4 flex-shrink-0" />
                  <span className="hidden xs:inline sm:inline">
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {mode === "manual" && (
            <TransactionForm onCloseDrawer={onCloseDrawer} mode="manual" />
          )}

          {mode === "scan" && (
            <TransactionForm onCloseDrawer={onCloseDrawer} mode="scan" />
          )}

          {mode === "voice" && (
            <TransactionForm onCloseDrawer={onCloseDrawer} mode="voice" />
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default AddTransactionDrawer;
