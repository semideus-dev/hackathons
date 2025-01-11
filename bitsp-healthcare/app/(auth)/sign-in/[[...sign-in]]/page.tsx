import React from "react";

import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const SignInPage = () => {
  return <SignIn appearance={{ baseTheme: dark }} />;
};

export default SignInPage;
