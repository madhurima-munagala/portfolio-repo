import { clsx, type ClassValue } from "clsx";

/** Thin wrapper around clsx so class-name composition stays consistent. */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
