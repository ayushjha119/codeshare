import { Choice } from "@/lib/types";
import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";

interface ChoicesProps {
  choices: Choice[];
  initialValue: Choice;
  setValue: (_: Choice) => void;
}

export default function Choices({
  choices,
  initialValue,
  setValue,
}: ChoicesProps) {
  return (
    <RadioGroup value={initialValue} onChange={setValue}>
      <div className="flex gap-3 py-[7px] text-sm">
        {choices.map((choice) => (
          <RadioGroup.Option
            key={choice.label}
            value={choice}
            className={clsx("cursor-pointer select-none rounded-md")}
          >
            <span
              className={clsx(
                "rounded-md py-1 px-2",
                "transition-colors duration-100 ease-in-out"
              )}
            >
              {choice.label}
            </span>
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}
