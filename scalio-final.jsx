/* global React */
// Scalio — Manual de marca final
// Seleções: 02 Hero (wordmark) · 03 Horizontal lockup · 06 Symbol dark

const RED = '#E63027';
const BLACK = '#0A0A0A';
const PAPER = '#F5F2EC';
const INK = '#1A1A1A';
const MUTE = '#8A857C';

// ============================================================================
// Marcas finais — primitivos limpos
// ============================================================================

// Wordmark 02 — SCALIO com I vermelho
const Wordmark = ({ size = 200, color = BLACK, accent = RED }) => (
  <div style={{
    fontFamily: '"Anton", Impact, "Bebas Neue", sans-serif',
    fontWeight: 900,
    fontSize: size,
    letterSpacing: '-0.02em',
    lineHeight: 0.82,
    color,
    textTransform: 'uppercase',
    display: 'inline-block',
  }}>
    SCAL<span style={{ color: accent }}>I</span>O
  </div>
);

// Symbol 03 — Lettermark S (grid 6×6)
const SymbolS = ({ size = 200, fg = PAPER, bg = BLACK, accent = RED, withBg = true }) => (
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

// Symbol 06 — Network
const NetworkSymbol = ({ size = 200, fg = PAPER, accent = RED }) => {
  const pts = [
    [60, 40], [140, 40],
    [40, 100], [100, 100], [160, 100],
    [60, 160], [140, 160],
  ];
  const edges = [
    [0, 1], [0, 2], [0, 3], [1, 3], [1, 4],
    [2, 3], [3, 4], [2, 5], [3, 5], [3, 6], [4, 6], [5, 6],
  ];
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} style={{ display: 'block' }}>
      {edges.map(([a, b], i) => (
        <line key={i} x1={pts[a][0]} y1={pts[a][1]} x2={pts[b][0]} y2={pts[b][1]} stroke={fg} strokeWidth="4" />
      ))}
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 3 ? 12 : 7} fill={i === 3 ? accent : fg} />
      ))}
    </svg>
  );
};

// Lockup horizontal (S + scalio)
const LockupHorizontal = ({ scale = 1, dark = false }) => {
  const fg = dark ? PAPER : BLACK;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 28 * scale }}>
      <SymbolS size={170 * scale} bg={dark ? PAPER : BLACK} fg={dark ? BLACK : PAPER} accent={RED} />
      <div style={{
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 800,
        fontSize: 88 * scale,
        letterSpacing: '-0.05em',
        color: fg,
        lineHeight: 0.9,
      }}>scalio</div>
    </div>
  );
};

// ============================================================================
// SHELL — manual de marca em página única
// ============================================================================

const SectionHeader = ({ idx, title, kicker }) => (
  <div style={{
    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
    paddingBottom: 18, borderBottom: `2px solid ${BLACK}`, marginBottom: 32,
  }}>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 18 }}>
      <span style={{
        fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: MUTE, letterSpacing: '0.2em',
      }}>{idx}</span>
      <h2 style={{
        margin: 0, fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 700,
        fontSize: 44, letterSpacing: '-0.04em', lineHeight: 1, color: BLACK,
      }}>{title}</h2>
    </div>
    <span style={{
      fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: MUTE,
    }}>{kicker}</span>
  </div>
);

const Block = ({ children, label, bg = PAPER, h = 'auto', pad = 32 }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
    <div style={{
      fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: MUTE,
      fontFamily: 'JetBrains Mono, monospace',
    }}>{label}</div>
    <div style={{
      background: bg, padding: pad, height: h, display: 'flex',
      alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box',
      border: bg === PAPER ? `1px solid ${BLACK}` : 'none',
      minHeight: 200,
    }}>
      {children}
    </div>
  </div>
);

// ============================================================================
// PÁGINAS
// ============================================================================

// COVER
const Cover = () => (
  <div style={{
    width: '100%', height: '100%', background: BLACK, color: PAPER,
    padding: '48px 56px', boxSizing: 'border-box',
    fontFamily: '"Inter Tight", Helvetica, Arial, sans-serif',
    display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden',
  }}>
    <div style={{
      display: 'flex', justifyContent: 'space-between',
      fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.6,
    }}>
      <span>Scalio · brand book</span>
      <span>v1.0 / 2026-04</span>
    </div>
    <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
      <div>
        <div style={{
          fontFamily: '"Anton", Impact, sans-serif', fontWeight: 900,
          fontSize: 320, letterSpacing: '-0.02em', lineHeight: 0.82,
          textTransform: 'uppercase',
        }}>
          SCAL<span style={{ color: RED }}>I</span>O
        </div>
        <div style={{
          marginTop: 24, maxWidth: 620,
          fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 400,
          fontSize: 22, lineHeight: 1.3, opacity: 0.85,
        }}>
          Field operations system. Padronização, registro e relatórios de campo
          em tempo real — para quem leva o trabalho a sério onde a internet falha.
        </div>
      </div>
    </div>
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
      fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase',
    }}>
      <span>— Brutalismo × Design Suíço</span>
      <span style={{ color: RED }}>● Manual de marca</span>
    </div>
    {/* corner mark */}
    <div style={{
      position: 'absolute', bottom: 48, right: 56, opacity: 0.18,
    }}>
      <SymbolS size={120} bg={BLACK} fg={PAPER} accent={RED} withBg={false} />
    </div>
  </div>
);

// LOGO PAGE
const LogoPage = () => (
  <div style={{
    width: '100%', height: '100%', background: PAPER, color: INK,
    padding: '48px 56px', boxSizing: 'border-box',
    fontFamily: '"Inter Tight", Helvetica, Arial, sans-serif',
    display: 'flex', flexDirection: 'column',
  }}>
    <SectionHeader idx="01" title="A marca" kicker="Wordmark · Symbol · Lockup" />
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, flex: 1 }}>
      <Block label="Wordmark · primary" bg={BLACK}>
        <div style={{
          fontFamily: '"Anton", Impact, sans-serif', fontWeight: 900,
          fontSize: 160, letterSpacing: '-0.02em', lineHeight: 0.82,
          color: PAPER, textTransform: 'uppercase',
        }}>
          SCAL<span style={{ color: RED }}>I</span>O
        </div>
      </Block>
      <Block label="Wordmark · light" bg={PAPER}>
        <Wordmark size={160} color={BLACK} accent={RED} />
      </Block>
      <Block label="Symbol · primary" bg={PAPER}>
        <SymbolS size={220} bg={BLACK} fg={PAPER} accent={RED} />
      </Block>
      <Block label="Horizontal lockup" bg={PAPER}>
        <LockupHorizontal scale={0.85} dark={false} />
      </Block>
    </div>
    <div style={{
      marginTop: 32, paddingTop: 16, borderTop: `1px solid ${BLACK}`,
      display: 'flex', justifyContent: 'space-between',
      fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: MUTE,
    }}>
      <span>Wordmark = voz · Symbol = ícone · Lockup = assinatura</span>
      <span>Pg. 02</span>
    </div>
  </div>
);

// CONSTRUCTION & CLEAR SPACE
const Construction = () => (
  <div style={{
    width: '100%', height: '100%', background: PAPER, color: INK,
    padding: '48px 56px', boxSizing: 'border-box',
    fontFamily: '"Inter Tight", Helvetica, Arial, sans-serif',
    display: 'flex', flexDirection: 'column',
  }}>
    <SectionHeader idx="02" title="Construção" kicker="Grid · clear space · sizing" />
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, flex: 1 }}>
      {/* Symbol grid */}
      <Block label="Symbol · grid 6×6">
        <svg viewBox="0 0 240 240" width="240" height="240">
          {Array.from({length: 7}).map((_, i) => (
            <line key={`v${i}`} x1={20 + i * 33.33} y1="20" x2={20 + i * 33.33} y2="220" stroke={MUTE} strokeWidth="0.5" strokeDasharray="2 3" />
          ))}
          {Array.from({length: 7}).map((_, i) => (
            <line key={`h${i}`} x1="20" y1={20 + i * 33.33} x2="220" y2={20 + i * 33.33} stroke={MUTE} strokeWidth="0.5" strokeDasharray="2 3" />
          ))}
          <g transform="translate(20,20)">
            <rect x="16" y="16" width="168" height="32" fill={BLACK} />
            <rect x="16" y="84" width="168" height="32" fill={RED} />
            <rect x="16" y="152" width="168" height="32" fill={BLACK} />
            <rect x="16" y="16" width="32" height="100" fill={BLACK} />
            <rect x="152" y="84" width="32" height="100" fill={BLACK} />
          </g>
        </svg>
      </Block>

      {/* Clear space */}
      <Block label="Clear space · X = altura do S">
        <svg viewBox="0 0 320 200" width="320" height="200">
          {/* dashed clear-space box */}
          <rect x="20" y="40" width="280" height="120" fill="none" stroke={MUTE} strokeWidth="1" strokeDasharray="4 4" />
          {/* X markers */}
          <g fontFamily="JetBrains Mono, monospace" fontSize="10" fill={MUTE} letterSpacing="0.1em">
            <text x="40" y="30">X</text>
            <text x="40" y="180">X</text>
            <text x="10" y="105">X</text>
            <text x="305" y="105">X</text>
          </g>
          <g transform="translate(80, 60)">
            <rect x="0" y="0" width="80" height="80" fill={BLACK} />
            <rect x="13" y="13" width="54" height="13" fill={PAPER} />
            <rect x="13" y="34" width="54" height="13" fill={RED} />
            <rect x="13" y="55" width="54" height="13" fill={PAPER} />
            <rect x="13" y="13" width="13" height="42" fill={PAPER} />
            <rect x="54" y="34" width="13" height="42" fill={PAPER} />
          </g>
          <g transform="translate(180, 80)">
            <text fontFamily="Helvetica, Arial, sans-serif" fontSize="40" fontWeight="800" fill={BLACK} letterSpacing="-2">scalio</text>
          </g>
        </svg>
      </Block>

      {/* Min sizes */}
      <Block label="Tamanhos mínimos · escala">
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 24 }}>
          {[120, 64, 40, 24].map(s => (
            <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <SymbolS size={s} bg={BLACK} fg={PAPER} accent={RED} />
              <div style={{ fontSize: 9, fontFamily: 'JetBrains Mono, monospace', color: MUTE, letterSpacing: '0.1em' }}>
                {s}px
              </div>
            </div>
          ))}
        </div>
      </Block>

      {/* Wordmark anatomy */}
      <Block label="Wordmark · anatomia">
        <svg viewBox="0 0 360 160" width="360" height="160">
          {/* dashed lines */}
          <line x1="20" y1="30" x2="340" y2="30" stroke={MUTE} strokeWidth="0.5" strokeDasharray="3 3" />
          <line x1="20" y1="130" x2="340" y2="130" stroke={MUTE} strokeWidth="0.5" strokeDasharray="3 3" />
          <text x="345" y="34" fontFamily="JetBrains Mono, monospace" fontSize="9" fill={MUTE}>cap</text>
          <text x="345" y="134" fontFamily="JetBrains Mono, monospace" fontSize="9" fill={MUTE}>base</text>
          <g transform="translate(36, 122)">
            <text fontFamily="Anton, Impact, sans-serif" fontSize="100" fontWeight="900" fill={BLACK} letterSpacing="-2" textLength="280" lengthAdjust="spacingAndGlyphs">
              SCAL<tspan fill={RED}>I</tspan>O
            </text>
          </g>
          <text x="160" y="155" fontFamily="JetBrains Mono, monospace" fontSize="9" fill={MUTE} letterSpacing="0.1em">Anton 900 · -2% tracking · I = red accent</text>
        </svg>
      </Block>
    </div>
    <div style={{
      marginTop: 32, paddingTop: 16, borderTop: `1px solid ${BLACK}`,
      display: 'flex', justifyContent: 'space-between',
      fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: MUTE,
    }}>
      <span>Min app icon: 24px · Min print: 8mm · Padding: ≥ X</span>
      <span>Pg. 03</span>
    </div>
  </div>
);

// COLOR & TYPE
const ColorType = () => (
  <div style={{
    width: '100%', height: '100%', background: PAPER, color: INK,
    padding: '48px 56px', boxSizing: 'border-box',
    fontFamily: '"Inter Tight", Helvetica, Arial, sans-serif',
    display: 'flex', flexDirection: 'column',
  }}>
    <SectionHeader idx="03" title="Cor & Tipografia" kicker="Paleta · stack tipográfico" />
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, flex: 1 }}>
      {/* Color swatches */}
      <div>
        <div style={{
          fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: MUTE,
          fontFamily: 'JetBrains Mono, monospace', marginBottom: 10,
        }}>Paleta primária</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {[
            { name: 'Scalio Red', hex: '#E63027', cmyk: '0 / 85 / 80 / 0', use: 'Acento. I do logo, badges, CTA.', bg: RED, fg: BLACK },
            { name: 'Field Black', hex: '#0A0A0A', cmyk: '0 / 0 / 0 / 100', use: 'Voz principal. Wordmark e fundos.', bg: BLACK, fg: PAPER },
            { name: 'Paper', hex: '#F5F2EC', cmyk: '4 / 4 / 8 / 0', use: 'Fundo. Off-white quente, evita branco frio.', bg: PAPER, fg: BLACK },
          ].map((c, i) => (
            <div key={i} style={{
              background: c.bg, color: c.fg, padding: '20px 22px', minHeight: 130,
              border: c.bg === PAPER ? `1px solid ${BLACK}` : 'none',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}>
              <div style={{
                fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 700,
                fontSize: 22, letterSpacing: '-0.02em',
              }}>{c.name}</div>
              <div>
                <div style={{ fontSize: 12, lineHeight: 1.4, opacity: 0.85, marginBottom: 8 }}>{c.use}</div>
                <div style={{
                  fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
                  letterSpacing: '0.1em', display: 'flex', justifyContent: 'space-between',
                }}>
                  <span>HEX {c.hex}</span>
                  <span>CMYK {c.cmyk}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Type stack */}
      <div>
        <div style={{
          fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: MUTE,
          fontFamily: 'JetBrains Mono, monospace', marginBottom: 10,
        }}>Stack tipográfico</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div style={{ background: PAPER, border: `1px solid ${BLACK}`, padding: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: MUTE, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 14 }}>
              <span>Display</span><span>Anton · 900</span>
            </div>
            <div style={{
              fontFamily: '"Anton", Impact, sans-serif', fontWeight: 900,
              fontSize: 84, letterSpacing: '-0.02em', lineHeight: 0.82, color: BLACK,
              textTransform: 'uppercase',
            }}>
              SCAL<span style={{ color: RED }}>I</span>O 0123
            </div>
            <div style={{ marginTop: 14, fontSize: 11, color: MUTE, lineHeight: 1.4 }}>
              Voz brutalista. Headlines, posters, hero do produto.
            </div>
          </div>
          <div style={{ background: PAPER, border: `1px solid ${BLACK}`, padding: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: MUTE, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 14 }}>
              <span>Text</span><span>Helvetica / Inter Tight</span>
            </div>
            <div style={{
              fontFamily: 'Helvetica, "Inter Tight", Arial, sans-serif', fontWeight: 700,
              fontSize: 32, letterSpacing: '-0.03em', lineHeight: 1.05, color: BLACK,
            }}>
              Padronização e registro de campo, sem retrabalho.
            </div>
            <div style={{ marginTop: 12, fontFamily: 'Helvetica, "Inter Tight", Arial, sans-serif', fontSize: 14, lineHeight: 1.45, color: INK }}>
              Voz neutra suíça. Body, UI, documentos, relatórios. Pesos 400/500/700/800.
            </div>
            <div style={{
              marginTop: 14, fontFamily: 'JetBrains Mono, monospace',
              fontSize: 11, color: MUTE, letterSpacing: '0.05em',
            }}>
              Mono · JetBrains Mono — para metadados, IDs, coordenadas, timestamps.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{
      marginTop: 24, paddingTop: 16, borderTop: `1px solid ${BLACK}`,
      display: 'flex', justifyContent: 'space-between',
      fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: MUTE,
    }}>
      <span>Vermelho ≤ 15% da composição · sempre como acento</span>
      <span>Pg. 04</span>
    </div>
  </div>
);

// DO / DON'T
const DoDont = () => {
  const Cell = ({ ok, children, label }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{
        background: PAPER, border: `1px solid ${BLACK}`,
        height: 180, display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        {children}
        <div style={{
          position: 'absolute', top: 8, left: 8,
          width: 22, height: 22, borderRadius: '50%',
          background: ok ? '#0A8F3D' : RED,
          color: PAPER, display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 900, fontSize: 14,
        }}>{ok ? '✓' : '×'}</div>
      </div>
      <div style={{ fontSize: 11, color: INK, lineHeight: 1.4 }}>{label}</div>
    </div>
  );
  return (
    <div style={{
      width: '100%', height: '100%', background: PAPER, color: INK,
      padding: '48px 56px', boxSizing: 'border-box',
      fontFamily: '"Inter Tight", Helvetica, Arial, sans-serif',
      display: 'flex', flexDirection: 'column',
    }}>
      <SectionHeader idx="04" title="Do / Don't" kicker="Regras de uso" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18, flex: 1 }}>
        <Cell ok label="Use o I vermelho como único acento.">
          <Wordmark size={68} color={BLACK} accent={RED} />
        </Cell>
        <Cell ok={false} label="Não pinte letras adicionais de vermelho.">
          <div style={{
            fontFamily: '"Anton", Impact, sans-serif', fontWeight: 900,
            fontSize: 68, letterSpacing: '-0.02em', color: RED, textTransform: 'uppercase',
          }}>SCALIO</div>
        </Cell>
        <Cell ok label="Use Anton 900 com tracking apertado.">
          <Wordmark size={68} color={BLACK} accent={RED} />
        </Cell>
        <Cell ok={false} label="Não estique nem condense o wordmark.">
          <div style={{
            fontFamily: '"Anton", Impact, sans-serif', fontWeight: 900,
            fontSize: 68, letterSpacing: '0.2em', color: BLACK, textTransform: 'uppercase',
            transform: 'scaleY(1.4)',
          }}>SCALIO</div>
        </Cell>
        <Cell ok label="Símbolo sobre fundo preto, paper como FG.">
          <SymbolS size={120} bg={BLACK} fg={PAPER} accent={RED} />
        </Cell>
        <Cell ok={false} label="Não inverta as cores do bloco vermelho.">
          <SymbolS size={120} bg={RED} fg={PAPER} accent={BLACK} />
        </Cell>
        <Cell ok label="Lockup com clear-space ≥ X.">
          <LockupHorizontal scale={0.45} />
        </Cell>
        <Cell ok={false} label="Não cole o símbolo grudado no wordmark.">
          <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <SymbolS size={70} bg={BLACK} fg={PAPER} accent={RED} />
            <div style={{ fontFamily: 'Helvetica', fontWeight: 800, fontSize: 36, letterSpacing: '-0.05em' }}>scalio</div>
          </div>
        </Cell>
      </div>
      <div style={{
        marginTop: 24, paddingTop: 16, borderTop: `1px solid ${BLACK}`,
        display: 'flex', justifyContent: 'space-between',
        fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: MUTE,
      }}>
        <span>Sem outline · sem sombra · sem gradiente</span>
        <span>Pg. 05</span>
      </div>
    </div>
  );
};

// APPLICATIONS
const Applications = () => (
  <div style={{
    width: '100%', height: '100%', background: PAPER, color: INK,
    padding: '48px 56px', boxSizing: 'border-box',
    fontFamily: '"Inter Tight", Helvetica, Arial, sans-serif',
    display: 'flex', flexDirection: 'column',
  }}>
    <SectionHeader idx="05" title="Aplicações" kicker="Onde a marca vive" />
    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', gap: 22, flex: 1 }}>
      {/* Marketing poster */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: MUTE, fontFamily: 'JetBrains Mono, monospace' }}>Marketing · A1</div>
        <div style={{ background: BLACK, color: PAPER, padding: 24, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', opacity: 0.6 }}>scalio.app · v1 / 2026</div>
          <div style={{
            fontFamily: '"Anton", Impact, sans-serif', fontWeight: 900,
            fontSize: 64, letterSpacing: '-0.02em', lineHeight: 0.85,
            textTransform: 'uppercase',
          }}>
            O FIM DAS<br />ANOTAÇÕES<br /><span style={{ color: RED }}>PERDIDAS.</span>
          </div>
          <div style={{
            fontFamily: '"Anton", Impact, sans-serif', fontWeight: 900,
            fontSize: 32, letterSpacing: '-0.02em', textTransform: 'uppercase',
          }}>
            SCAL<span style={{ color: RED }}>I</span>O
          </div>
        </div>
      </div>

      {/* App icon */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: MUTE, fontFamily: 'JetBrains Mono, monospace' }}>App icon · iOS</div>
        <div style={{ background: PAPER, border: `1px solid ${BLACK}`, padding: 22, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 22 }}>
          <div style={{ width: 156, height: 156, borderRadius: 36, overflow: 'hidden', boxShadow: '0 12px 30px rgba(0,0,0,0.18)' }}>
            <SymbolS size={156} bg={BLACK} fg={PAPER} accent={RED} />
          </div>
          <div style={{ display: 'flex', gap: 18, alignItems: 'flex-end' }}>
            {[64, 40, 28].map(s => (
              <div key={s} style={{ width: s, height: s, borderRadius: s * 0.22, overflow: 'hidden' }}>
                <SymbolS size={s} bg={BLACK} fg={PAPER} accent={RED} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dashboard */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: MUTE, fontFamily: 'JetBrains Mono, monospace' }}>Dashboard · top nav</div>
        <div style={{ background: PAPER, border: `1px solid ${BLACK}`, flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ background: BLACK, color: PAPER, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
            <SymbolS size={28} bg={BLACK} fg={PAPER} accent={RED} withBg={false} />
            <div style={{ fontFamily: 'Helvetica', fontWeight: 800, fontSize: 18, letterSpacing: '-0.04em' }}>scalio</div>
            <div style={{ flex: 1 }} />
            <div style={{ display: 'flex', gap: 14, fontSize: 11, opacity: 0.7 }}>
              <span>Reports</span><span>Field</span><span>Teams</span>
            </div>
          </div>
          <div style={{ flex: 1, padding: 16 }}>
            <div style={{ fontSize: 9, color: MUTE, letterSpacing: '0.25em', textTransform: 'uppercase' }}>Today</div>
            <div style={{ fontFamily: 'Helvetica', fontWeight: 700, fontSize: 24, letterSpacing: '-0.03em', marginTop: 4 }}>
              12 visitas registradas
            </div>
            <div style={{ display: 'flex', gap: 6, marginTop: 14 }}>
              {[1,1,1,1,1,1,1,1,1,1,0,1].map((v, i) => (
                <div key={i} style={{ flex: 1, height: 36, background: v ? BLACK : 'transparent', border: v ? 'none' : `1px solid ${BLACK}` }} />
              ))}
            </div>
            <div style={{ marginTop: 14, padding: '8px 10px', background: RED, color: BLACK, fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'inline-block' }}>
              + Novo relatório
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* second row */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, marginTop: 22 }}>
      {/* PDF */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: MUTE, fontFamily: 'JetBrains Mono, monospace' }}>PDF report · header</div>
        <div style={{ background: PAPER, border: `1px solid ${BLACK}`, padding: 22 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingBottom: 12, borderBottom: `1px solid ${BLACK}` }}>
            <LockupHorizontal scale={0.32} />
            <div style={{ fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase', color: MUTE, textAlign: 'right' }}>
              FR-2841 / 2026-04-26<br/>Operador · M. Almeida
            </div>
          </div>
          <div style={{ paddingTop: 12 }}>
            <div style={{ fontFamily: 'Helvetica', fontWeight: 700, fontSize: 22, letterSpacing: '-0.03em', lineHeight: 1.05 }}>
              Visita #2841 · Instalação<br/>Rua dos Ypês, 412
            </div>
          </div>
        </div>
      </div>
      {/* Splash */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: MUTE, fontFamily: 'JetBrains Mono, monospace' }}>App splash</div>
        <div style={{ background: BLACK, padding: 22, height: 180, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Wordmark size={70} color={PAPER} accent={RED} />
        </div>
      </div>
    </div>

    <div style={{
      marginTop: 24, paddingTop: 16, borderTop: `1px solid ${BLACK}`,
      display: 'flex', justifyContent: 'space-between',
      fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: MUTE,
    }}>
      <span>Marketing · App · Dashboard · Documentos · Splash</span>
      <span>Pg. 06</span>
    </div>
  </div>
);

// CLOSING
const Closing = () => (
  <div style={{
    width: '100%', height: '100%', background: BLACK, color: PAPER,
    padding: '48px 56px', boxSizing: 'border-box',
    fontFamily: '"Inter Tight", Helvetica, Arial, sans-serif',
    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    position: 'relative', overflow: 'hidden',
  }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.6 }}>
      <span>Brand book · v1.0</span>
      <span>2026 · Scalio</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
      <SymbolS size={180} bg={BLACK} fg={PAPER} accent={RED} withBg={false} />
      <div>
        <div style={{
          fontFamily: '"Anton", Impact, sans-serif', fontWeight: 900,
          fontSize: 140, letterSpacing: '-0.02em', lineHeight: 0.82,
          textTransform: 'uppercase',
        }}>
          SCAL<span style={{ color: RED }}>I</span>O
        </div>
        <div style={{ marginTop: 14, fontFamily: 'Helvetica', fontSize: 18, opacity: 0.8, letterSpacing: '-0.01em', maxWidth: 480 }}>
          Padronização, registro e relatórios de campo — sem retrabalho.
        </div>
      </div>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.6 }}>
      <span>scalio.app</span>
      <span>— field operations system</span>
    </div>
  </div>
);

Object.assign(window, {
  Wordmark, SymbolS, NetworkSymbol, LockupHorizontal,
  Cover, LogoPage, Construction, ColorType, DoDont, Applications, Closing,
});
