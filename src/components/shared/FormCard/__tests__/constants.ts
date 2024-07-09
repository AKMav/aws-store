import { ByRoleMatcher } from "@testing-library/react";

export const TEST_CLASS = "test-class";
export const TEXT = "I'm a FormCards content";
export const TEXT_REGULAR = new RegExp(`${TEXT}`, "i");
export const ROLE_LINK: ByRoleMatcher = "link";
