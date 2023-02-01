import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { IBuildOptions } from "./types/config";

export function buildLoaders(options: IBuildOptions): webpack.RuleSetRule[] {
  const typescript = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const styles = {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes(".module."),
            localIdentName: options.isDev ? "[local]" : "[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  };

  return [typescript, styles];
}
