/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  basePath: '/next-crash', 
 


    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.pravatar.cc',
          port: '', 
          pathname: '/150/**', 
        },
       
      ],
    },
  };
  
  export default nextConfig;