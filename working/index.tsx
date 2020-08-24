import React from "react";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";

// Translated messages in French with matching IDs to what you declared
const messagesInFrench = {
  myMessage: "Aujourd'hui, c'est le {ts, date, ::yyyyMMdd}"
};

export default function App() {
  return (
    <IntlProvider messages={messagesInFrench} locale="fr" defaultLocale="en">
      <p>
        <FormattedMessage
          id="myMessage"
          defaultMessage="Today is {ts, date, ::yyyyMMdd}"
          values={{ ts: Date.now() }}
        />
        <FormattedNumber value={19} style="currency" currency="EUR" />
      </p>
    </IntlProvider>
  );
}
