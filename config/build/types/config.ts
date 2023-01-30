export interface IBuildEnv {
  mode: TBuildMode;
  port: number;
}

export type TBuildMode = "production" | "development";
export type TBuildPaths = {
  entry: string;
  build: string;
  html: string;
};

export interface IBuildOptions {
  mode: TBuildMode;
  paths: TBuildPaths;
  isDev: boolean;
  port: number;
}
