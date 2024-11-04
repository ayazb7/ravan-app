import { withNextVideo } from "next-video/process";
import path from "path";
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve("./"); // Set @ to project root
    return config;
  },
};

export default withNextVideo(nextConfig);
