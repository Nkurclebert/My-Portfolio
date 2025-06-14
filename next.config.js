/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  compiler: {
    styledComponents: true, // enables better styled-components support with SWC
  },
};

module.exports = nextConfig;
