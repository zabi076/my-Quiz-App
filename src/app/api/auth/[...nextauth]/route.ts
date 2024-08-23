import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';    
import { authOption } from '../../../../../libs/authOption';

const handler = NextAuth(authOption)


export { handler as GET, handler as POST };
