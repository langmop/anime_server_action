"use client";
import React, { useEffect, useRef, useState } from "react";
import { TwoThumbInputRange } from "react-two-thumb-input-range";

const RangeSelector = ({ maxRange }: { maxRange: number }) => {
  const [value, setValue] = useState<[number, number]>([0, 60]);

  const onValueSChange = (values: [number, number]) => {
    if (values[1] - values[0] < 60) {
      return;
    }
    setValue(values);
  };

  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref?.current) {
      const selector = ref?.current?.querySelectorAll("small");
      const leftSelector = selector[0];
      const rightSelector = selector[1];
      leftSelector.innerHTML = `${Math.floor(value[0] / 60)}:${value[0] % 60}`;
      rightSelector.innerHTML = `${Math.floor(value[1] / 60)}:${value[1] % 60}`;
    }
  }, [value]);

  return (
    <div ref={ref}>
      <TwoThumbInputRange
        onChange={onValueSChange}
        values={value}
        min={0}
        max={maxRange * 60}
      />
    </div>
  );
};

export default RangeSelector;
