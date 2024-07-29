import "@testing-library/jest-dom"; // 👈 this is imported in order to use the jest-dom matchers
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(cleanup);
