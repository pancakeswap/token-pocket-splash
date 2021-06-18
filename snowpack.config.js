/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    static: { url: "/static", static: true, resolve: false },
    src: "/",
  },
  plugins: ["@snowpack/plugin-typescript", "@snowpack/plugin-dotenv"],
};
