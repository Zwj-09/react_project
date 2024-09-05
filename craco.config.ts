import path from "path";

const pathResolve = (dir: string) => {
  return path.resolve(__dirname, dir);
};

module.exports = {
  webpack: {
    alias: {
      "@": pathResolve("src"),
    },
  },
  extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
};
