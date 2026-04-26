/* global React */
// Scalio LP — seções

const RED = '#E63027';
const BLACK = '#0A0A0A';
const PAPER = '#F5F2EC';
const INK = '#1A1A1A';
const MUTE = '#8A857C';

// Theme helper: returns { bg, fg, mute, border, panel }
const useTheme = (dark) => dark ? {
  bg: BLACK, fg: PAPER, mute: 'rgba(245,242,236,0.55)',
  border: 'rgba(245,242,236,0.18)', panel: '#141414',
  inverse: { bg: PAPER, fg: BLACK },
} : {
  bg: PAPER, fg: BLACK, mute: MUTE,
  border: 'rgba(10,10,10,0.18)', panel: '#EDE9E0',
  inverse: { bg: BLACK, fg: PAPER },
};

// =====================================================================
// Brand primitives (inlined to avoid cross-file deps)
// =====================================================================
const Wordmark = ({ size = 60, color, accent = RED }) => (
  <span style={{
    fontFamily: '"Anton", Impact, sans-serif',
    fontWeight: 900, fontSize: size, letterSpacing: '-0.02em',
    lineHeight: 0.82, color, textTransform: 'uppercase',
    display: 'inline-block',
  }}>
    SCAL<span style={{ color: accent }}>I</span>O
  </span>
);

const SymS = ({ size = 32, fg, bg, accent = RED, withBg = true }) => (
  <svg viewBox="0 0 200 200" width={size} height={size} style={{ display: 'block' }}>
    {withBg && <rect x="0" y="0" width="200" height="200" fill={bg} />}
    <rect x="32" y="32" width="136" height="32" fill={fg} />
    <rect x="32" y="84" width="136" height="32" fill={accent} />
    <rect x="32" y="136" width="136" height="32" fill={fg} />
    <rect x="32" y="32" width="32" height="84" fill={fg} />
    <rect x="136" y="84" width="32" height="84" fill={fg} />
    <circle cx="160" cy="44" r="4" fill={accent} />
    <circle cx="40" cy="156" r="4" fill={accent} />
  </svg>
);

// =====================================================================
// NAV
// =====================================================================
// Ícones para o toggle de tema
const SunIcon = ({ size = 18, color }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);
const MoonIcon = ({ size = 18, color }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const Nav = ({ dark, onToggle }) => {
  const t = useTheme(dark);
  // Em tema claro, mostra logo escuro; em tema escuro, logo claro
  const logoSrc = dark ? 'assets/logos/scalio-lockup-light-2000.png' : 'assets/logos/scalio-lockup-dark-2000.png';
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: t.bg, color: t.fg,
      borderBottom: `1px solid ${t.border}`,
      padding: '14px 36px',
      display: 'flex', alignItems: 'center', gap: 24,
      fontFamily: '"Inter Tight", Helvetica, Arial, sans-serif',
    }}>
      <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={logoSrc}
          alt="Scalio"
          style={{ height: 32, width: 'auto', display: 'block' }}
        />
      </a>
      <div style={{ flex: 1 }} />
      <div style={{ display: 'flex', gap: 22, fontSize: 13, opacity: 0.75 }}>
        {['Produto', 'Como funciona', 'Cases', 'Preços', 'FAQ'].map(label => (
          <a key={label} href={`#${label}`} style={{ color: 'inherit', textDecoration: 'none' }}>{label}</a>
        ))}
      </div>
      <button
        type="button"
        onClick={onToggle}
        aria-label={dark ? 'Ativar modo claro' : 'Ativar modo escuro'}
        title={dark ? 'Modo claro' : 'Modo escuro'}
        style={{
          background: 'transparent', border: `1px solid ${t.border}`,
          color: t.fg, width: 36, height: 36, display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', borderRadius: 0,
        }}
      >
        {dark ? <SunIcon color={t.fg} /> : <MoonIcon color={t.fg} />}
      </button>
      <a href="#waitlist" style={{
        background: RED, color: BLACK, textDecoration: 'none',
        padding: '10px 18px', fontWeight: 800, fontSize: 12,
        letterSpacing: '0.18em', textTransform: 'uppercase',
      }}>Lista de espera</a>
    </nav>
  );
};

// =====================================================================
// HERO
// =====================================================================
const Hero = ({ dark }) => {
  const t = useTheme(dark);
  return (
    <section style={{
      background: t.bg, color: t.fg, padding: '64px 36px 72px',
      borderBottom: `1px solid ${t.border}`, position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: t.mute,
        marginBottom: 22,
      }}>
        <span>● field operations system · BR</span>
        <span>v1.0 / lista aberta</span>
      </div>

      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 10,
        background: RED, color: BLACK, padding: '6px 14px', marginBottom: 18,
        fontSize: 11, fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase',
      }}>
        <span style={{ width: 8, height: 8, background: BLACK, display: 'inline-block' }} />
        Em breve · entre antes de todo mundo
      </div>

      <h1 style={{
        margin: 0, fontFamily: '"Anton", Impact, sans-serif', fontWeight: 900,
        fontSize: 'clamp(80px, 14vw, 220px)', letterSpacing: '-0.02em',
        lineHeight: 0.82, textTransform: 'uppercase',
      }}>
        O FIM DAS<br/>
        ANOTAÇÕES<br/>
        <span style={{ color: RED }}>PERDIDAS.</span>
      </h1>

      <div style={{
        marginTop: 28, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 32, alignItems: 'end',
      }}>
        <div style={{
          fontFamily: 'Helvetica, Arial, sans-serif', fontSize: 22, lineHeight: 1.35,
          maxWidth: 640, fontWeight: 400,
        }}>
          Scalio padroniza, registra e gera relatórios de campo em tempo real —
          pra técnicos, instaladores e agentes que vivem no campo e perdem tempo
          (e dinheiro) com anotação manual.
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-end' }}>
          <a href="#waitlist" style={{
            background: RED, color: BLACK, textDecoration: 'none',
            padding: '18px 30px', fontFamily: '"Anton", Impact, sans-serif',
            fontSize: 28, letterSpacing: '-0.02em', textTransform: 'uppercase',
            display: 'inline-flex', alignItems: 'center', gap: 14,
          }}>
            ENTRAR NA LISTA <span style={{ fontSize: 22 }}>→</span>
          </a>
          <div style={{ fontSize: 11, color: t.mute, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Sem cartão · acesso prioritário ao beta
          </div>
        </div>
      </div>

      {/* big symbol corner */}
      <div style={{ position: 'absolute', right: -40, top: 32, opacity: dark ? 0.08 : 0.06 }}>
        <SymS size={420} bg={t.fg} fg={t.bg} accent={RED} withBg={false} />
      </div>
    </section>
  );
};

// =====================================================================
// MARQUEE STATS
// =====================================================================
const Marquee = ({ dark }) => {
  const t = useTheme(dark);
  const items = [
    '90% MENOS RETRABALHO', '●', 'RELATÓRIOS EM TEMPO REAL', '●',
    'PADRONIZAÇÃO POR EQUIPE', '●', 'FUNCIONA OFFLINE', '●',
    'PDF AUTOMÁTICO', '●', 'CAMPO → ESCRITÓRIO EM SEGUNDOS', '●',
  ];
  const row = [...items, ...items, ...items];
  return (
    <div style={{
      background: RED, color: BLACK, padding: '18px 0', overflow: 'hidden',
      borderTop: `1px solid ${t.border}`, borderBottom: `1px solid ${t.border}`,
    }}>
      <div style={{
        display: 'flex', gap: 36, whiteSpace: 'nowrap',
        animation: 'scalio-marquee 40s linear infinite',
        fontFamily: '"Anton", Impact, sans-serif', fontSize: 32,
        letterSpacing: '-0.01em', textTransform: 'uppercase',
      }}>
        {row.map((s, i) => <span key={i}>{s}</span>)}
      </div>
      <style>{`
        @keyframes scalio-marquee { from { transform: translateX(0); } to { transform: translateX(-33.33%); } }
      `}</style>
    </div>
  );
};

// =====================================================================
// PROBLEM
// =====================================================================
const Problem = ({ dark }) => {
  const t = useTheme(dark);
  const pains = [
    { n: '01', t: 'Anotação no papel', d: 'Caderno molha, foto some, ninguém entende a letra. O dado morre antes de chegar ao escritório.' },
    { n: '02', t: 'Cada técnico, um padrão', d: 'Sem template, cada visita vira um relatório diferente — e nenhum bate com o outro.' },
    { n: '03', t: 'Retrabalho silencioso', d: 'Falta a foto do roteador. Falta a coordenada. Volta na obra. Volta no cliente. Volta o custo.' },
    { n: '04', t: 'Cliente sem visibilidade', d: 'O cliente quer ver o que foi feito. Você quer mostrar. Mas o relatório só sai dois dias depois.' },
  ];
  return (
    <section id="Produto" style={{
      background: t.bg, color: t.fg, padding: '72px 36px',
      borderBottom: `1px solid ${t.border}`,
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        marginBottom: 36, paddingBottom: 18, borderBottom: `2px solid ${t.fg}`,
      }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: t.mute, marginBottom: 8 }}>
            01 · O problema
          </div>
          <h2 style={{
            margin: 0, fontFamily: '"Anton", Impact, sans-serif', fontWeight: 900,
            fontSize: 'clamp(56px, 8vw, 120px)', letterSpacing: '-0.02em', lineHeight: 0.85,
            textTransform: 'uppercase',
          }}>
            CAMPO É <span style={{ color: RED }}>CAOS</span><br/>QUANDO NÃO TEM SISTEMA.
          </h2>
        </div>
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0,
        border: `1px solid ${t.fg}`, borderRight: 'none', borderBottom: 'none',
      }}>
        {pains.map((p, i) => (
          <div key={i} style={{
            padding: 24, borderRight: `1px solid ${t.fg}`, borderBottom: `1px solid ${t.fg}`,
            display: 'flex', flexDirection: 'column', gap: 14, minHeight: 240,
          }}>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
              letterSpacing: '0.2em', color: RED,
            }}>{p.n}</div>
            <div style={{
              fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 700,
              fontSize: 26, letterSpacing: '-0.03em', lineHeight: 1, marginTop: 'auto',
            }}>{p.t}</div>
            <div style={{ fontSize: 14, lineHeight: 1.45, opacity: 0.8 }}>{p.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

// =====================================================================
// SOLUTION (with mockup placeholder)
// =====================================================================
const Solution = ({ dark }) => {
  const t = useTheme(dark);
  return (
    <section style={{
      background: RED, color: BLACK, padding: '72px 36px',
      borderBottom: `1px solid ${t.border}`,
    }}>
      <div style={{
        fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase',
        marginBottom: 16, opacity: 0.75,
      }}>
        02 · A solução
      </div>
      <h2 style={{
        margin: 0, fontFamily: '"Anton", Impact, sans-serif', fontWeight: 900,
        fontSize: 'clamp(64px, 10vw, 160px)', letterSpacing: '-0.02em', lineHeight: 0.85,
        textTransform: 'uppercase',
      }}>
        UM APP. UM PADRÃO.<br/>ZERO PAPEL.
      </h2>
      <div style={{
        marginTop: 28, fontSize: 22, lineHeight: 1.35,
        fontFamily: 'Helvetica, Arial, sans-serif', maxWidth: 720,
      }}>
        Scalio é o sistema operacional do trabalho de campo. Templates por tipo
        de visita, captura estruturada, foto+geolocalização automáticas, relatório
        em PDF gerado no fim — entregue ao cliente antes do técnico subir no carro.
      </div>

      {/* phone mockup */}
      <div style={{
        marginTop: 48, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28,
      }}>
        <div style={{
          background: BLACK, color: PAPER, padding: 28, position: 'relative',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, opacity: 0.6, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            <span>● Mockup · App field</span><span>iOS / Android</span>
          </div>
          <div style={{ marginTop: 22, display: 'flex', gap: 22, alignItems: 'flex-start' }}>
            {/* phone frame */}
            <div style={{
              width: 240, height: 480, borderRadius: 36, background: PAPER,
              padding: 14, boxSizing: 'border-box', boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
              border: `8px solid ${BLACK}`,
            }}>
              <div style={{ background: BLACK, color: PAPER, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
                <SymS size={18} bg={BLACK} fg={PAPER} accent={RED} withBg={false} />
                <span style={{ fontFamily: 'Helvetica', fontWeight: 800, fontSize: 13, letterSpacing: '-0.03em' }}>scalio</span>
                <span style={{ flex: 1 }} />
                <span style={{ fontSize: 9, opacity: 0.6 }}>14:32</span>
              </div>
              <div style={{ padding: 14, color: BLACK, fontFamily: 'Helvetica' }}>
                <div style={{ fontSize: 9, color: MUTE, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Visita #2841</div>
                <div style={{ fontWeight: 800, fontSize: 18, marginTop: 4, letterSpacing: '-0.03em', lineHeight: 1.05 }}>
                  Instalação<br/>Rua dos Ypês, 412
                </div>
                <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {[
                    {l: 'Equipamento serial', v: 'OK', ok: true},
                    {l: 'Foto antes', v: '01', ok: true},
                    {l: 'Foto depois', v: '01', ok: true},
                    {l: 'Teste de velocidade', v: '— ', ok: false},
                    {l: 'Assinatura cliente', v: '— ', ok: false},
                  ].map((r, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: `1px solid #ddd`, fontSize: 12 }}>
                      <span>{r.l}</span>
                      <span style={{
                        fontWeight: 700, color: r.ok ? '#0A8F3D' : RED,
                      }}>{r.ok ? '✓' : '○'} {r.v}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 14, padding: 10, background: RED, color: BLACK, fontWeight: 800, fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', textAlign: 'center' }}>
                  Finalizar visita
                </div>
              </div>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ fontSize: 12, color: 'rgba(245,242,236,0.6)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                CHECKLIST POR TIPO DE SERVIÇO
              </div>
              <div style={{ fontFamily: '"Anton", Impact, sans-serif', fontSize: 44, lineHeight: 0.9, textTransform: 'uppercase' }}>
                O TÉCNICO<br/>SÓ AVANÇA<br/><span style={{ color: RED }}>QUANDO ESTÁ COMPLETO.</span>
              </div>
            </div>
          </div>
        </div>

        {/* PDF mockup placeholder */}
        <div style={{
          background: PAPER, color: BLACK, padding: 28, border: `1px solid ${BLACK}`,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: MUTE, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            <span>● Mockup · PDF report</span><span>auto-gerado</span>
          </div>
          <div style={{
            marginTop: 22, background: PAPER, border: `1.5px solid ${BLACK}`, padding: 22,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingBottom: 12, borderBottom: `1px solid ${BLACK}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <SymS size={28} bg={BLACK} fg={PAPER} accent={RED} />
                <span style={{ fontFamily: 'Helvetica', fontWeight: 800, fontSize: 18, letterSpacing: '-0.04em' }}>scalio</span>
              </div>
              <div style={{ fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase', color: MUTE, textAlign: 'right' }}>
                FR-2841 · 2026-04-26<br/>M. Almeida · BR-04
              </div>
            </div>
            <div style={{ paddingTop: 14 }}>
              <div style={{ fontFamily: 'Helvetica', fontWeight: 700, fontSize: 22, letterSpacing: '-0.03em', lineHeight: 1.05 }}>
                Visita #2841 · Instalação<br/>Rua dos Ypês, 412
              </div>
            </div>
            <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <div style={{ aspectRatio: '4/3', background: '#1A1A1A', display: 'flex', alignItems: 'center', justifyContent: 'center', color: PAPER, fontSize: 10, letterSpacing: '0.2em' }}>
                FOTO ANTES
              </div>
              <div style={{ aspectRatio: '4/3', background: '#1A1A1A', display: 'flex', alignItems: 'center', justifyContent: 'center', color: PAPER, fontSize: 10, letterSpacing: '0.2em' }}>
                FOTO DEPOIS
              </div>
            </div>
            <div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
              {[['Conexões', '12/12'], ['Equipamentos', '04'], ['Status', 'OK']].map(([l, v], i) => (
                <div key={i} style={{ borderTop: `2px solid ${BLACK}`, paddingTop: 6 }}>
                  <div style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: MUTE }}>{l}</div>
                  <div style={{ fontSize: 18, fontWeight: 700, marginTop: 2 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: 14, fontFamily: '"Anton", Impact, sans-serif', fontSize: 36, lineHeight: 0.9, textTransform: 'uppercase' }}>
            CLIENTE RECEBE<br/><span style={{ color: RED }}>NA HORA.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// =====================================================================
// HOW IT WORKS
// =====================================================================
const HowItWorks = ({ dark }) => {
  const t = useTheme(dark);
  const steps = [
    { n: '01', t: 'CONFIGURE O TEMPLATE', d: 'Crie checklists por tipo de serviço. O que é obrigatório, o que pode ser foto, o que precisa de assinatura.' },
    { n: '02', t: 'TÉCNICO ABRE A VISITA', d: 'No app, online ou offline. GPS, hora e operador são capturados automaticamente.' },
    { n: '03', t: 'CAMPO PREENCHE EM ORDEM', d: 'Não dá para pular. Não dá para esquecer. O sistema só fecha quando estiver tudo certo.' },
    { n: '04', t: 'PDF SAI SOZINHO', d: 'Relatório padronizado, com fotos, métricas e assinatura. Cliente recebe por e-mail. Gestor vê no dashboard.' },
  ];
  return (
    <section id="Como funciona" style={{
      background: t.bg, color: t.fg, padding: '72px 36px',
      borderBottom: `1px solid ${t.border}`,
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        paddingBottom: 18, borderBottom: `2px solid ${t.fg}`, marginBottom: 36,
      }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: t.mute, marginBottom: 8 }}>
            03 · Como funciona
          </div>
          <h2 style={{
            margin: 0, fontFamily: '"Anton", Impact, sans-serif', fontWeight: 900,
            fontSize: 'clamp(56px, 8vw, 120px)', letterSpacing: '-0.02em', lineHeight: 0.85,
            textTransform: 'uppercase',
          }}>
            QUATRO PASSOS.<br/><span style={{ color: RED }}>ZERO IMPROVISO.</span>
          </h2>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {steps.map((s, i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '120px 1fr 1.2fr',
            borderTop: `1px solid ${t.fg}`, padding: '28px 0', gap: 24,
            alignItems: 'flex-start',
          }}>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: 14,
              letterSpacing: '0.2em', color: RED, paddingTop: 8,
            }}>{s.n}</div>
            <div style={{
              fontFamily: '"Anton", Impact, sans-serif', fontWeight: 900,
              fontSize: 'clamp(28px, 4vw, 56px)', letterSpacing: '-0.02em',
              lineHeight: 0.9, textTransform: 'uppercase',
            }}>{s.t}</div>
            <div style={{ fontSize: 16, lineHeight: 1.5, paddingTop: 12 }}>{s.d}</div>
          </div>
        ))}
        <div style={{ borderTop: `1px solid ${t.fg}` }} />
      </div>
    </section>
  );
};

Object.assign(window, {
  Nav, Hero, Marquee, Problem, Solution, HowItWorks,
  useTheme, Wordmark, SymS,
  RED, BLACK, PAPER, INK, MUTE,
});
