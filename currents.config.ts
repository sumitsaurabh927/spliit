import { CurrentsConfig } from "@currents/playwright";

const config: CurrentsConfig = {
  projectId: "gU5z8u",
  recordKey: process.env.CURRENTS_RECORD_KEY!
};

export default config;