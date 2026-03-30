// import 'server-only';
// import { getRequestConfig } from 'next-intl/server';

// export default getRequestConfig(async ({ locale }) => {
//   if (!locale) {
//     throw new Error('Locale is required but was undefined'); // ✅ Handle missing locale
//   }

//   const messages = (await import(`../messages/${locale}.json`)).default;

//   return {
//     locale,  // ✅ Ensure `locale` is a string
//     messages
//   };
// });
