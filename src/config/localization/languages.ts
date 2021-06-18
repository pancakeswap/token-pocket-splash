import { Language } from "@pancakeswap/uikit";

export const EN: Language = { locale: "en-US", language: "English", code: "en" };
export const ZHCN: Language = { locale: "zh-CN", language: "简体中文", code: "cn" };

export const languages = {
  "en-US": EN,
  "zh-CN": ZHCN,
};

export const languageList = Object.values(languages);
