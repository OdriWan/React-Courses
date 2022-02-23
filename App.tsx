// App.tsx
import React from "react";
import { NetworkProvider } from "react-native-offline";
import { QueryClient, QueryClientProvider } from "react-query";

import { Offline } from "./src/components/Offline";
import Navigator from "./src/Navigation/Navigator";

const queryClient = new QueryClient();

const App = () => {
  //   return <LoginScreen />;
  //   return <TermsScreen/>
  return (
    <NetworkProvider>
      <QueryClientProvider client={queryClient}>
        <Offline />
        <Navigator />
      </QueryClientProvider>
    </NetworkProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
