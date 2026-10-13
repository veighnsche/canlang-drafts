import { test } from "@playwright/test";
import { defineDraftAppSuite } from "../../../../tests/e2e/drafts/suite.js";

defineDraftAppSuite(import.meta.url, (title, body) => test(title, body));
