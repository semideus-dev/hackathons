import React from "react";

import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const SignUpPage = () => {
  return <SignUp appearance={{ baseTheme: dark }} />;
};

export default SignUpPage;
