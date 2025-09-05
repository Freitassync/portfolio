export const lightTheme = {
  colors: {
    primary: '#2563EB',
    secondary: '#64748B',
    accent: '#06B6D4',
    background: '#FFFFFF',
    surface: '#F8FAFC',
    text: {
      primary: '#0F172A',
      secondary: '#475569',
      muted: '#94A3B8',
    },
    border: '#E2E8F0',
    success: '#22C55E',
    warning: '#F59E0B',
    error: '#EF4444',
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem',
  },
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },
  breakpoints: {
    mobile: '640px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
  },
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },
};

export const darkTheme = {
  ...lightTheme,
  colors: {
    primary: '#3B82F6',
    secondary: '#94A3B8',
    accent: '#06B6D4',
    background: '#0F172A',
    surface: '#1E293B',
    text: {
      primary: '#F8FAFC',
      secondary: '#CBD5E1',
      muted: '#64748B',
    },
    border: '#334155',
    success: '#22C55E',
    warning: '#F59E0B',
    error: '#EF4444',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.3)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.3)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.3)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.3), 0 8px 10px -6px rgb(0 0 0 / 0.3)',
  },
};

// Para compatibilidade com código existente
export const theme = lightTheme;

export type Theme = typeof lightTheme;
