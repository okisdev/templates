export type Locale = 'en' | 'zh-HK';

export type LocaleMessages = {
  [key in Locale]: Record<string, string>;
};
