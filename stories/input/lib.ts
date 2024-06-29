'use client'

import { useState } from "react";

export function useInputState<T>(initialValue: T, onChange?: ((v: T) => T) | null, validator?: (v: string) => string | null) {
    const [value, setValue] = useState(initialValue);
    const errors = validator?.(value + '') || null;

    return Object.freeze({
      value, errors,
      get valid() { return !Boolean(errors)},
      get invalid() { return Boolean(errors)},
      setValue: (value: T) => {
        setValue(onChange ? onChange(value) : value);
      },
    })
  }