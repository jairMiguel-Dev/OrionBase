import React from "react";

export interface DicionarioItem {
  type?: string | undefined;
  explicação2?: string | undefined;
  maincode2?: string | undefined;
  item?: string | undefined;
  icon?: React.ReactNode;
  termo?: string | undefined;
  definicao?: string | undefined;
  maincode?: string | undefined;
  explicação?: string | undefined;
}