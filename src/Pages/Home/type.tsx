import React from "react";

export interface DicionarioItem {
  type: string;
  explicação2?: string | undefined;
  maincode2?: string | undefined;
  item?: string | undefined;
  icon?: React.ReactNode;
  termo?: string | undefined;
  definicao?: string;
  maincode?: string;
  explicação?: string;
}