import { defineConfig } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      cb: {
        primary: '#002fa7',
        'primary-active': '#00268a',
        ink: '#0a0a0a',
        body: '#4b5563',
        muted: '#737373',
        hairline: '#d4d4d2',
        canvas: '#fafaf8',
        'surface-soft': '#f0f0ee',
        'surface-strong': '#e6e7e2',
        'surface-dark': '#0a0a0a',
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
    't-cat':
      'text-[14px] leading-[1.4] tracking-[0.15em] font-600 uppercase text-cb-primary dark:text-white',
    'h-cover-zh':
      'text-[min(8.4vw,11.2vh)] leading-[1.02] tracking-[0.02em] font-300 text-cb-ink dark:text-white',
    'h-cover-en':
      'text-[min(11vw,14vh)] leading-[1] tracking-[-0.04em] font-200 text-cb-ink dark:text-white',
    'h-xl': 'text-[min(5vw,9.2vh)] leading-[1.06] tracking-[-0.03em] font-200 text-cb-ink dark:text-white',
    'h-xl-zh': 'text-[min(5vw,9.2vh)] leading-[1.08] tracking-[0] font-300 text-cb-ink dark:text-white',
    'h-md': 'text-[2.6vw] leading-[1.2] tracking-[0] font-400 text-cb-ink dark:text-white',
    body: 'text-[max(18px,1.08vw)] leading-[1.55] font-400 text-cb-body dark:text-slate-300',
    't-body': 'text-[max(18px,1.08vw)] leading-[1.55] font-400 text-cb-body dark:text-slate-300',
    'body-sm': 'text-[max(16px,0.92vw)] leading-[1.5] font-400 text-cb-body dark:text-slate-300',
    't-body-sm': 'text-[max(16px,0.92vw)] leading-[1.5] font-400 text-cb-body dark:text-slate-300',
    'kpi-hero':
      'text-[min(22vw,32vh)] leading-[0.9] tracking-[-0.05em] font-200 text-cb-ink dark:text-white',
    'kpi-xl':
      'text-[min(14vw,22vh)] leading-[0.9] tracking-[-0.04em] font-200 text-cb-ink dark:text-white',
    'kpi-lg':
      'text-[min(9vw,16vh)] leading-[0.95] tracking-[-0.03em] font-300 text-cb-ink dark:text-white',
    'data-label':
      'font-mono text-[max(14px,0.82vw)] leading-[1.4] font-500 tracking-[0.02em] text-cb-muted dark:text-slate-400',
    'ui-meta':
      'font-mono text-[14px] leading-[1.4] font-500 uppercase tracking-[0.12em] text-cb-muted dark:text-slate-400',
    callout: 'text-[max(14px,1vw)] leading-[1.55] font-400 text-cb-body dark:text-slate-300',
    'cb-body': 'text-[16px] leading-[1.5] text-cb-body',
    'cb-body-strong': 'text-[16px] leading-[1.5] font-600 text-cb-ink',
    'cb-caption': 'text-[13px] leading-[1.5] text-cb-muted',
    'cb-title-md': 'text-[20px] leading-[1.33] font-600 tracking-[0] text-cb-ink dark:text-white',
    'cb-display-sm': 'text-[40px] leading-[1.11] tracking-[-0.5px] font-400 text-cb-ink dark:text-white',
    'cb-display-lg': 'text-[56px] leading-[1.02] tracking-[-1.3px] font-400 text-cb-ink dark:text-white',
    'cb-display-xl': 'text-[68px] leading-[1] tracking-[-1.6px] font-400 text-cb-ink dark:text-white',
    'cb-kicker': 'text-[16px] leading-[1.4] font-600 tracking-[0.18em] uppercase text-cb-primary dark:text-white',
    'cb-kicker-soft': 'text-[18px] leading-[1.4] font-500 tracking-[0.16em] text-[#a8acb3] dark:text-slate-400',
    'cb-kicker-hero': 'text-[84px] leading-[1.02] font-600 tracking-[0.08em] uppercase text-white dark:text-white',
    'cb-quote': 'text-[20px] leading-[1.6] italic text-[#a8acb3] dark:text-slate-400',
    'cb-meta': 'text-[16px] leading-[1.5] text-cb-muted dark:text-slate-400',
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
    'swiss-page': 'mx-auto flex min-h-[82vh] max-w-[1040px] flex-col justify-between px-10 py-12 text-left',
    'swiss-head': 'flex flex-col gap-[1.4vh]',
    'swiss-section-title': 'h-xl-zh max-w-[11ch]',
    'swiss-lead': 'max-w-[42ch] text-[max(18px,1.08vw)] leading-[1.55] font-400 text-cb-body dark:text-slate-300',
    'swiss-list': 'mt-8 max-w-[44ch] text-[max(16px,0.92vw)] leading-[1.55] font-400 text-cb-ink dark:text-white',
    'swiss-panel': 'rounded-none border border-cb-hairline bg-cb-canvas px-7 py-6',
    'swiss-panel-soft': 'rounded-none bg-[#f0f0ee] px-7 py-6',
    'swiss-meta-row': 'flex items-center justify-between border-t border-cb-hairline pt-6',
    'swiss-rule': 'h-px w-full bg-cb-hairline',
    'swiss-accent-bar': 'h-[6px] w-16 bg-cb-primary',
  },
})
