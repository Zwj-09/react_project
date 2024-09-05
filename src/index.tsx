import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { IntlProvider } from "react-intl";
import { BrowserRouter } from "react-router-dom";

import "@/index.css";
import App from "@/App";

import enUS from "@/config/en-US.json";
import zhCN from "@/config/zh-CN.json";
import Loading from "./components/Loading";

const messages: Record<string, any> = {
  "en-US": enUS,
  "zh-CN": zhCN,
};
const locale =
  // "en-US";
  "zh-CN";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Suspense fallback={<Loading />}>
    <BrowserRouter>
      <IntlProvider
        messages={messages[locale]}
        locale={locale}
        defaultLocale="zh_CN"
        defaultRichTextElements={{
          bbb: (str) => <b>{str}</b>,
        }}
      >
        <App />
      </IntlProvider>
    </BrowserRouter>
  </Suspense>
);
