import { normalize } from "../types/normalilze";

export default {
  colors: {
    white: '#FFFFFF',
    primary_black: '#1b1d1f',
    primary_red: '#F23D3C',
    primary_off_white: '#FCF6F1',
    primary_blue: '#1351B4',
    primary_blue_main: '#0581C6 ',

    red01: '#C72C2B',
    red02: '#F27A79',
    red03: '#F2B6B5',
    red04: '#F2D6D5',

    blue01: '#B0CCD9',
    blue02: '#D3E2EA',
    blue03: '#E2ECF2',

    success: '#839E20',
    
    alert: '#E67425',
    error: '#e03131',

    gray02: '#4C4C56',
    gray03: '#75788B',
    gray04: '#8A8A99',
    gray05: '#DEE0EC',
    gray06: '#EDEFF3',
    gray07: '#F2F3F9',
    neutral: '#F6F6F6',

    gold_yellow: '#E5C767',
    purplish_blue: '#4762B4',
    pink: '#FF97AF',
    pinkish_purple: '#AE729E',
    green: '#6D7B3B',
    greenSuccess: '#54b948'
  },
  fonts: {
    REGULAR: 'Inter_400Regular',
    REGULAR_ITALIC: 'Inter_400Regular_Italic',
    MEDIUM: 'Inter_500Medium',
    SEMI_BOLD: 'Inter_600SemiBold',
    BOLD: 'Inter_700Bold',
  },
  fontSizes: {
    XXXS: normalize(8),
    XXS: normalize(10),
    XS: normalize(12),
    SMS: normalize(14),
    SM: normalize(16),
    MD: normalize(16),
    LG: normalize(18),
    LG2: normalize(20),
    XL: normalize(24),
    XL2: normalize(28),
    XXL: normalize(32),
    XXX: normalize(36),
  },
};
