"use client";

import { useState } from "react";
import { Calendar } from "./Calendar";
import { TimeSlots } from "./TimeSlots";
import { Button } from "@/components/ui/button";

export function Scheduler() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleConfirm = () => {
    if (selectedDate && selectedTime) {
      console.log("Confirmed:", {
        date: selectedDate.toLocaleDateString(),
        time: selectedTime,
      });
    }
  };

  return (
    <div className="p-6 flex-col items-center justify-center">
      <h2 className="text-xl font-semibold mb-6 flex justify-center">
        Select a Date & Time
      </h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        <Calendar selectedDate={selectedDate} onDateSelect={setSelectedDate} />
        <div className="flex flex-col gap-4">
          <div className="text-sm text-muted-foreground mb-2">
            {selectedDate.toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </div>
          <TimeSlots
            selectedTime={selectedTime}
            onTimeSelect={setSelectedTime}
          />
          <Button
            className="mt-4"
            disabled={!selectedDate || !selectedTime}
            onClick={handleConfirm}
          >
            Confirm
          </Button>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="inline-block w-4 h-4">🌐</span>
          <span>Eastern time - US & Canada</span>
        </div>
      </div>
    </div>
  );
}
