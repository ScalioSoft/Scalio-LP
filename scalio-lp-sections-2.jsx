/* global React */
// Scalio LP — segunda metade das seções

const RED2 = '#E63027';
const BLACK2 = '#0A0A0A';
const PAPER2 = '#F5F2EC';
const MUTE2 = '#8A857C';

// =====================================================================
// FEATURES
// =====================================================================
const Features = ({ dark }) => {
  const t = useTheme(dark);
  const feats = [
    { n: 'A', t: 'Templates inteligentes', d: 'Para cada tipo de serviço — instalação, vistoria, vistoria imobiliária, manutenção. Você desenha uma vez, todo mundo segue.' },
    { n: 'B', t: 'Modo offline', d: 'Funciona em obra, túnel, área rural. Quando volta sinal, sincroniza. O técnico nunca trava.' },
    { n: 'C', t: 'Foto + GPS automáticos', d: 'Cada foto vem com coordenada, hora e operador. Sem aplicativo extra, sem tabela paralela.' },
    { n: 'D', t: 'Assinatura digital', d: 'Cliente assina na tela. Vai junto no PDF. Vale como comprovação.' },
    { n: 'E', t: 'Dashboard de gestor', d: 'Veja todas as visitas em tempo real. Filtre por equipe, cidade, status, retrabalho.' },
    { n: 'F', t: 'Exportação para ERP', d: 'Webhook + CSV + API. Joga no seu sistema atual. Não precisa trocar nada.' },
  ];
  return (
    <section id="Cases" style={{
      background: t.bg, color: t.fg, padding: '72px 36px',
      borderBottom: `1px solid ${t.border}`,
    }}>
      <div style={{
        fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: t.mute, marginBottom: 12,
      }}>04 · Features</div>
      <h2 style={{
        margin: 0, fontFamily: '"Anton", Impact, sans-serif', fontWeight: 900,
        fontSize: 'clamp(56px, 8vw, 120px)', letterSpacing: '-0.02em', lineHeight: 0.85,
        textTransform: 'uppercase', marginBottom: 36,
      }}>
        TUDO QUE CAMPO<br/><span style={{ color: RED2 }}>JÁ DEVERIA TER.</span>
      </h2>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0,
        border: `1px solid ${t.fg}`, borderRight: 'none', borderBottom: 'none',
      }}>
        {feats.map((f, i) => (
          <div key={i} style={{
            padding: 28, borderRight: `1px solid ${t.fg}`, borderBottom: `1px solid ${t.fg}`,
            display: 'flex', flexDirection: 'column', gap: 14, minHeight: 220,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 32, height: 32, background: RED2, color: BLACK2,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: '"Anton", Impact, sans-serif', fontSize: 22, fontWeight: 900,
              }}>{f.n}</div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.2em', color: t.mute }}>
                FEATURE
              </div>
            </div>
            <div style={{
              fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 800,
              fontSize: 28, letterSpacing: '-0.03em', lineHeight: 1, marginTop: 'auto',
            }}>{f.t}</div>
            <div style={{ fontSize: 14, lineHeight: 1.45, opacity: 0.8 }}>{f.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

// =====================================================================
// USE CASES
// =====================================================================
const UseCases = ({ dark }) => {
  const t = useTheme(dark);
  const cases = [
    { tag: 'ISP', t: 'Provedores de internet', d: 'Instalação, manutenção, troca de equipamento. Padronize OS e termine a visita com PDF entregue ao cliente.', stat: '~22 visitas/dia/equipe' },
    { tag: 'IMOB', t: 'Imobiliárias', d: 'Vistoria de entrada e saída, com fotos georreferenciadas. Laudo PDF aceito juridicamente.', stat: 'laudo em < 5 min' },
    { tag: 'OBRA', t: 'Construção & manutenção', d: 'Diários de obra, checklists de qualidade, registro de não-conformidade. Tudo no mesmo lugar.', stat: '0 retrabalho de planilha' },
  ];
  return (
    <section style={{
      background: t.bg, color: t.fg, padding: '72px 36px',
      borderBottom: `1px solid ${t.border}`,
    }}>
      <div style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: t.mute, marginBottom: 12 }}>
        05 · Quem usa
      </div>
      <h2 style={{
        margin: 0, fontFamily: '"Anton", Impact, sans-serif', fontWeight: 900,
        fontSize: 'clamp(56px, 8vw, 120px)', letterSpacing: '-0.02em', lineHeight: 0.85,
        textTransform: 'uppercase', marginBottom: 36,
      }}>
        FEITO PRA QUEM<br/><span style={{ color: RED2 }}>VIVE NA RUA.</span>
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
        {cases.map((c, i) => (
          <div key={i} style={{
            background: i === 1 ? RED2 : (dark ? '#141414' : PAPER2),
            color: i === 1 ? BLACK2 : t.fg,
            border: i === 1 ? 'none' : `1px solid ${t.fg}`,
            padding: 24, display: 'flex', flexDirection: 'column', gap: 16, minHeight: 320,
          }}>
            <div style={{
              display: 'inline-block', alignSelf: 'flex-start',
              background: i === 1 ? BLACK2 : RED2, color: i === 1 ? RED2 : BLACK2,
              padding: '4px 10px', fontSize: 10, fontWeight: 800,
              letterSpacing: '0.2em', textTransform: 'uppercase',
            }}>{c.tag}</div>
            {/* placeholder image */}
            <div style={{
              aspectRatio: '4/3',
              background: i === 1 ? BLACK2 : (dark ? PAPER2 : BLACK2),
              color: i === 1 ? PAPER2 : (dark ? BLACK2 : PAPER2),
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(255,255,255,0.05) 8px, rgba(255,255,255,0.05) 16px)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.2em',
            }}>
              [ FOTO · {c.tag} ]
            </div>
            <div style={{
              fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 800,
              fontSize: 26, letterSpacing: '-0.03em', lineHeight: 1,
            }}>{c.t}</div>
            <div style={{ fontSize: 14, lineHeight: 1.45, opacity: i === 1 ? 0.85 : 0.8 }}>{c.d}</div>
            <div style={{
              marginTop: 'auto', fontFamily: 'JetBrains Mono, monospace',
              fontSize: 11, letterSpacing: '0.15em', opacity: 0.7, paddingTop: 14,
              borderTop: `1px solid ${i === 1 ? BLACK2 : t.fg}`,
            }}>
              ▲ {c.stat}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// =====================================================================
// BIG STAT — 90%
// =====================================================================
const BigStat = ({ dark }) => {
  const t = useTheme(dark);
  return (
    <section style={{
      background: t.bg, color: t.fg, padding: '72px 36px',
      borderBottom: `1px solid ${t.border}`, position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: t.mute, marginBottom: 12 }}>
        06 · O que muda
      </div>
      <div style={{
        display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 36, alignItems: 'center',
      }}>
        <div style={{
          fontFamily: '"Anton", Impact, sans-serif', fontWeight: 900,
          fontSize: 'clamp(180px, 32vw, 480px)', letterSpacing: '-0.04em',
          lineHeight: 0.82, color: RED2, textTransform: 'uppercase',
        }}>
          90<span style={{ color: t.fg }}>%</span>
        </div>
        <div>
          <div style={{
            fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 700,
            fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.03em', lineHeight: 1.05,
            marginBottom: 18,
          }}>
            é o quanto Scalio pode reduzir o retrabalho de campo.
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.5, opacity: 0.75, maxWidth: 420 }}>
            Estimativa baseada em pilotos com equipes de instalação. Menos volta, menos
            ligação, menos planilha — mais visitas concluídas no primeiro dia.
          </div>
          <div style={{
            marginTop: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14,
          }}>
            {[
              ['~3h', 'economizadas por técnico/dia'],
              ['100%', 'das visitas com PDF'],
              ['1 dia', 'para configurar templates'],
              ['0', 'planilha paralela'],
            ].map(([v, l], i) => (
              <div key={i} style={{ borderTop: `2px solid ${t.fg}`, paddingTop: 8 }}>
                <div style={{
                  fontFamily: '"Anton", Impact, sans-serif', fontSize: 32, lineHeight: 1,
                }}>{v}</div>
                <div style={{ fontSize: 11, color: t.mute, letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// =====================================================================
// PRICING
// =====================================================================
const Pricing = ({ dark }) => {
  const t = useTheme(dark);
  const plans = [
    { name: 'Básico', price: 'R$ 97', unit: '/mês', ideal: '1 técnico · 100 clientes · 30 relatórios IA/mês',
      feats: ['Cadastro de clientes', 'Orçamento e pedidos', 'App web (PWA)', 'Notificação WhatsApp', 'Assinatura digital'] },
    { name: 'Pro', price: 'R$ 297', unit: '/mês', ideal: '5 técnicos · 1.000 clientes · 200 relatórios IA/mês', highlight: true,
      feats: ['Tudo do Básico', 'App nativo (Flutter)', 'Calendário + roteirização', 'Localização em tempo real', 'Estoque + recorrência', 'Emissão de NFCe/NFSe'] },
    { name: 'Elite', price: 'R$ 597', unit: '/mês', ideal: '15 técnicos · clientes ilimitados · IA ilimitada',
      feats: ['Tudo do Pro', 'Multi-CAPJ', 'Reconhecimento facial (ponto)', 'Auditoria completa', 'White-label', 'API + webhooks'] },
  ];
  return (
    <section id="Preços" style={{
      background: t.bg, color: t.fg, padding: '72px 36px',
      borderBottom: `1px solid ${t.border}`,
    }}>
      <div style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: t.mute, marginBottom: 12 }}>
        07 · Preços
      </div>
      <h2 style={{
        margin: 0, fontFamily: '"Anton", Impact, sans-serif', fontWeight: 900,
        fontSize: 'clamp(56px, 8vw, 120px)', letterSpacing: '-0.02em', lineHeight: 0.85,
        textTransform: 'uppercase', marginBottom: 36,
      }}>
        SEM CONTRATO LONGO.<br/><span style={{ color: RED2 }}>SEM PEGADINHA.</span>
      </h2>
      <div style={{
        marginBottom: 18, fontSize: 12, color: t.mute,
        fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.15em', textTransform: 'uppercase',
      }}>
        ▲ Técnico extra: R$ 47/mês · Notas fiscais excedentes: R$ 0,10–0,12/nota
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, border: `1px solid ${t.fg}` }}>
        {plans.map((p, i) => (
          <div key={i} style={{
            padding: 28,
            borderRight: i < 2 ? `1px solid ${t.fg}` : 'none',
            background: p.highlight ? RED2 : 'transparent',
            color: p.highlight ? BLACK2 : t.fg,
            display: 'flex', flexDirection: 'column', gap: 16,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{
                fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 800,
                fontSize: 22, letterSpacing: '-0.03em',
              }}>{p.name}</span>
              {p.highlight && (
                <span style={{
                  background: BLACK2, color: RED2, padding: '4px 10px',
                  fontSize: 10, fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase',
                }}>● Recomendado</span>
              )}
            </div>
            <div style={{
              fontFamily: '"Anton", Impact, sans-serif', fontWeight: 900,
              fontSize: 72, letterSpacing: '-0.02em', lineHeight: 0.9,
            }}>
              {p.price}<span style={{ fontSize: 14, opacity: 0.7, fontFamily: 'Helvetica', fontWeight: 400, letterSpacing: 0 }}>{p.unit}</span>
            </div>
            <div style={{ fontSize: 12, opacity: 0.7, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              {p.ideal}
            </div>
            <ul style={{
              listStyle: 'none', padding: 0, margin: 0,
              display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14,
            }}>
              {p.feats.map((f, j) => (
                <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: p.highlight ? BLACK2 : RED2, fontWeight: 800 }}>+</span>
                  {f}
                </li>
              ))}
            </ul>
            <a href="#waitlist" style={{
              marginTop: 'auto',
              background: p.highlight ? BLACK2 : RED2, color: p.highlight ? PAPER2 : BLACK2,
              padding: '14px 18px', textDecoration: 'none', fontWeight: 800,
              fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase',
              textAlign: 'center', fontFamily: 'Helvetica, Arial, sans-serif',
            }}>
              Entrar na lista →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

// =====================================================================
// WAITLIST CTA
// =====================================================================
const Waitlist = ({ dark }) => {
  const [submitted, setSubmitted] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [team, setTeam] = React.useState('');
  return (
    <section id="waitlist" style={{
      background: BLACK2, color: PAPER2, padding: '72px 36px', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.6, marginBottom: 12 }}>
        08 · Lista de espera
      </div>
      <h2 style={{
        margin: 0, fontFamily: '"Anton", Impact, sans-serif', fontWeight: 900,
        fontSize: 'clamp(72px, 12vw, 200px)', letterSpacing: '-0.02em', lineHeight: 0.82,
        textTransform: 'uppercase', marginBottom: 28,
      }}>
        ENTRE ANTES<br/>DE TODO MUNDO.
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 36, alignItems: 'flex-start' }}>
        <div style={{ fontSize: 18, lineHeight: 1.4, opacity: 0.85, fontFamily: 'Helvetica' }}>
          Estamos selecionando empresas piloto. Quem entra agora ganha acesso prioritário,
          ajuda a desenhar os templates do seu setor e trava o preço de lançamento.
        </div>
        {!submitted ? (
          <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} style={{
            background: '#141414', padding: 28, display: 'flex', flexDirection: 'column', gap: 14,
            border: `1px solid rgba(245,242,236,0.18)`,
          }}>
            {[
              { label: 'E-mail', value: email, set: setEmail, type: 'email', placeholder: 'voce@empresa.com.br' },
              { label: 'Empresa', value: company, set: setCompany, type: 'text', placeholder: 'Nome da empresa' },
            ].map(f => (
              <div key={f.label} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label style={{
                  fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase',
                  color: 'rgba(245,242,236,0.55)', fontFamily: 'JetBrains Mono, monospace',
                }}>{f.label}</label>
                <input
                  type={f.type} required value={f.value}
                  onChange={e => f.set(e.target.value)}
                  placeholder={f.placeholder}
                  style={{
                    background: 'transparent', border: 'none',
                    borderBottom: `1px solid rgba(245,242,236,0.3)`,
                    color: PAPER2, padding: '10px 2px', fontSize: 16,
                    fontFamily: 'Helvetica, Arial, sans-serif', outline: 'none',
                  }}
                />
              </div>
            ))}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{
                fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase',
                color: 'rgba(245,242,236,0.55)', fontFamily: 'JetBrains Mono, monospace',
              }}>Tamanho da equipe de campo</label>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {['1-5', '6-20', '21-50', '50+'].map(opt => (
                  <button type="button" key={opt} onClick={() => setTeam(opt)} style={{
                    background: team === opt ? RED2 : 'transparent',
                    color: team === opt ? BLACK2 : PAPER2,
                    border: `1px solid ${team === opt ? RED2 : 'rgba(245,242,236,0.3)'}`,
                    padding: '8px 14px', fontWeight: 700, fontSize: 12,
                    letterSpacing: '0.1em', cursor: 'pointer',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                  }}>{opt}</button>
                ))}
              </div>
            </div>
            <button type="submit" style={{
              marginTop: 8, background: RED2, color: BLACK2, border: 'none',
              padding: '18px 24px', fontFamily: '"Anton", Impact, sans-serif',
              fontSize: 28, letterSpacing: '-0.02em', textTransform: 'uppercase',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <span>QUERO ENTRAR</span>
              <span>→</span>
            </button>
            <div style={{ fontSize: 11, opacity: 0.5, letterSpacing: '0.1em' }}>
              Sem spam · você pode sair quando quiser
            </div>
          </form>
        ) : (
          <div style={{
            background: RED2, color: BLACK2, padding: 36, display: 'flex', flexDirection: 'column', gap: 12,
          }}>
            <div style={{ fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 800 }}>
              ● Confirmado
            </div>
            <div style={{
              fontFamily: '"Anton", Impact, sans-serif', fontWeight: 900,
              fontSize: 64, letterSpacing: '-0.02em', lineHeight: 0.9, textTransform: 'uppercase',
            }}>
              VOCÊ ENTROU.<br/>VAMOS FALAR LOGO.
            </div>
            <div style={{ fontSize: 14, lineHeight: 1.45 }}>
              Mandamos um e-mail em até 48h pra agendar uma conversa rápida e
              entender seu fluxo de campo.
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// =====================================================================
// FOOTER
// =====================================================================
const Footer = ({ dark }) => {
  const t = useTheme(dark);
  return (
    <footer style={{
      background: t.bg, color: t.fg, padding: '48px 36px 24px',
      borderTop: `1px solid ${t.border}`,
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 1fr', gap: 28, paddingBottom: 36, borderBottom: `1px solid ${t.border}` }}>
        <div>
          <img
            src={dark ? 'assets/logos/scalio-lockup-light-2000.png' : 'assets/logos/scalio-lockup-dark-2000.png'}
            alt="Scalio"
            style={{ height: 44, width: 'auto', display: 'block' }}
          />
          <div style={{ marginTop: 12, fontSize: 13, opacity: 0.7, lineHeight: 1.4, maxWidth: 320 }}>
            Field operations system. Padronização, registro e relatórios — sem retrabalho.
          </div>
        </div>
        {[
          { t: 'Produto', l: ['Features', 'Como funciona', 'Preços', 'Roadmap'] },
          { t: 'Empresa', l: ['Sobre', 'Blog', 'Carreiras', 'Contato'] },
          { t: 'Legal', l: ['Termos', 'Privacidade', 'LGPD', 'Segurança'] },
        ].map((c, i) => (
          <div key={i}>
            <div style={{ fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: t.mute, marginBottom: 12, fontFamily: 'JetBrains Mono, monospace' }}>
              {c.t}
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {c.l.map(x => (
                <li key={x}><a href="#" style={{ color: 'inherit', textDecoration: 'none', fontSize: 13, opacity: 0.85 }}>{x}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginTop: 18, fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
        color: t.mute, fontFamily: 'JetBrains Mono, monospace',
      }}>
        <span>© 2026 Scalio · field operations system</span>
        <span>scalio.app · BR</span>
      </div>
    </footer>
  );
};

Object.assign(window, {
  Features, UseCases, BigStat, Pricing, Waitlist, Footer,
});
