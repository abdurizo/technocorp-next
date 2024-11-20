const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "ru",
    locales: ["uz", "ru", "en"],
    localeDetection: false,
  },
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales")
      : "/locales",
  fallbackLng: {
    default: ["ru"],
  },
};
