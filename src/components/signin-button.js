"use client";

import { signIn } from "next-auth/react";

export function SignInButton() {
  // Określamy 'azure-ad' jako dostawcę
  return (
    <button onClick={() => signIn("microsoft-entra-id")}>
      Zaloguj się z Microsoft
    </button>
  );
}
