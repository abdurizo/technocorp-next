const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "uz",
    locales: ["uz", "ru", "en"],
    localeDetection: false,
  },
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales")
      : "/locales",
  fallbackLng: {
    default: ["uz"],
  },
};
