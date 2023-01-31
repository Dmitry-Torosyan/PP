import NextAuth, { NextAuthOptions } from "next-auth";
import OktaProvider from "next-auth/providers/okta";

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    OktaProvider({
      clientId: process.env.OKTA_OAUTH2_CLIENT_ID,
      clientSecret: process.env.OKTA_OAUTH2_CLIENT_SECRET,
      issuer: process.env.OKTA_OAUTH2_ISSUER
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  theme: {
    colorScheme: "light",
  },
  callbacks: {
    async jwt({ token }) {
      console.log("token", token);
      token.userRole = "admin";
      return token;
    },
  },
};

export default NextAuth(authOptions);
