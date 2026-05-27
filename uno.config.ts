import { defineConfig } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      cb: {
        primary: '#0052ff',
        'primary-active': '#003ecc',
        ink: '#0a0b0d',
        body: '#5b616e',
        muted: '#7c828a',
        hairline: '#dee1e6',
        canvas: '#ffffff',
        'surface-soft': '#f7f7f7',
        'surface-strong': '#eef0f3',
        'surface-dark': '#0a0b0d',
        'on-dark': '#ffffff',
      },
    },
    borderRadius: {
      cbsm: '8px',
      cbmd: '12px',
      cblg: '16px',
      cbxl: '24px',
      cbpill: '100px',
    },
    spacing: {
      'cb-xs': '8px',
      'cb-sm': '12px',
      'cb-base': '16px',
      'cb-md': '20px',
      'cb-lg': '24px',
      'cb-xl': '32px',
      'cb-2xl': '48px',
    },
  },
  shortcuts: {
    'cb-body': 'text-[16px] leading-[1.5] text-cb-body',
    'cb-body-strong': 'text-[16px] leading-[1.5] font-600 text-cb-ink',
    'cb-caption': 'text-[13px] leading-[1.5] text-cb-muted',
    'cb-title-md': 'text-[18px] leading-[1.33] font-600 tracking-[0] text-cb-ink',
    'cb-display-sm': 'text-[36px] leading-[1.11] tracking-[-0.5px] font-400 text-cb-ink',
    'cb-pill-btn':
      'inline-flex items-center justify-center rounded-cbpill bg-cb-primary px-5 py-3 text-[16px] leading-[1.15] font-600 text-white',
    'cb-card':
      'rounded-cbxl border border-cb-hairline bg-cb-canvas px-cb-xl py-cb-xl text-cb-ink',
    'cb-card-soft':
      'rounded-cbxl bg-cb-surface-soft px-cb-xl py-cb-xl text-cb-ink',
    'cb-band-dark':
      'bg-cb-surface-dark text-cb-on-dark px-cb-2xl py-cb-2xl rounded-cbxl',
    'cb-case-copy': 'mt-3 text-[1.05rem] leading-7 text-cb-body',
    'cb-case-media': 'mt-6 flex min-h-[280px] items-center justify-center',
    'cb-case-image': 'block w-full max-w-[360px] max-h-[280px] object-contain',
    'cb-case-image-rounded': 'block w-full max-w-[360px] max-h-[280px] object-contain rounded-[18px]',
  },
})
