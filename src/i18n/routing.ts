import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['nl', 'en', 'fr'],
 
  // Used when no locale matches
  defaultLocale: 'en', 
  localePrefix: 'always'

});