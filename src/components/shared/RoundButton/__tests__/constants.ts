import { ByRoleMatcher } from "@testing-library/react";

export const NAME = "round-button-name";
export const NAME_REGULAR = new RegExp(`${NAME}`, "i");
export const ROLE_BUTTON: ByRoleMatcher = "button";
export const ROLE_LINK: ByRoleMatcher = "link";
