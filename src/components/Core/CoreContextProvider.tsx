import React from "react";
import { MarkdownStore } from "../../stores/Markdown";

type CoreContextType = {
  markdownStore: MarkdownStore | null;
};

export const CoreContext = React.createContext<CoreContextType>({
  markdownStore: null,
});

export const CoreContextProvider: React.FC = ({ children }) => {
  return (
    <CoreContext.Provider value={{ markdownStore: new MarkdownStore() }}>
      {children}
    </CoreContext.Provider>
  );
};
