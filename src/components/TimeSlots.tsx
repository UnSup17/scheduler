import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TimeSlotsProps {
  selectedTime: string | null;
  onTimeSelect: (time: string) => void;
}

export function TimeSlots({ selectedTime, onTimeSelect }: TimeSlotsProps) {
  const timeSlots = ["10:00am", "11:00am", "1:00pm", "2:30pm", "4:00pm"];

  return (
    <div className="flex flex-col gap-2 w-full max-w-xs">
      {timeSlots.map((time) => (
        <Button
          key={time}
          variant={selectedTime === time ? "default" : "outline"}
          className={cn(
            "w-full justify-center text-base",
            selectedTime === time && "bg-primary text-primary-foreground",
          )}
          onClick={() => onTimeSelect(time)}
        >
          {time}
        </Button>
      ))}
    </div>
  );
}
