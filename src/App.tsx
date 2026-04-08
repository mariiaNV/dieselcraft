import { useEffect, useMemo, useState } from 'react'
import { useRevealOnScroll } from './hooks/useRevealOnScroll'

type Service = {
  title: string
  desc: string
}

type Review = {
  name: string
  text: string
}

const withBase = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

const PHONE_DISPLAY_1 = '+380 93 383 83 73'
const PHONE_TEL_1 = '+380933838373'
const PHONE_DISPLAY_2 = '+380 93 383 83 63'
const PHONE_TEL_2 = '+380933838363'
const TELEGRAM_URL = 'https://t.me/dieselcraft_od'
const VIBER_URL = 'viber://chat?number=%2B380933838373'

const BRANCH_1 = {
  name: 'Філіал в Ліськах',
  address: 'вулиця Академіка Заболотного, 47, Ліски, Одеса',
  phone: PHONE_DISPLAY_1,
  phoneTel: PHONE_TEL_1,
  hours: 'Пн–Пт: 09:00–18:00, Сб: 09:00–14:00',
}

const BRANCH_2 = {
  name: 'Філіал на Приміській',
  address: 'вул. Приміська, 1, Одеса',
  phone: PHONE_DISPLAY_2,
  phoneTel: PHONE_TEL_2,
  hours: 'Пн–Пт: 09:00–18:00, Сб: 09:00–14:00',
}

const ADDRESS_DISPLAY_1 = BRANCH_1.address
const ADDRESS_DISPLAY_2 = BRANCH_2.address

const HERO_VIDEO_SRC = withBase('video/6.mp4')
const HERO_VIDEO_POSTER = withBase('img/11.jpg')
const HERO_BANNER_SRC = withBase('img/banner.jpg')

export default function App() {
  useRevealOnScroll()

  const services = useMemo<Service[]>(
    () => [
      {
        title: 'Ремонт дизельних двигунів',
        desc: 'Від точної діагностики до відновлення ресурсу. Без «випадкових» замін.',
      },
      {
        title: 'Капітальний ремонт мотора',
        desc: 'Контроль зазору, компресії та геометрії. Збірка під результат.',
      },
      {
        title: 'Заміна та ремонт ГБЦ',
        desc: 'Перевірка площини, клапанів, направляючих. Двигун має працювати рівно.',
      },
      {
        title: 'Діагностика дизельних систем',
        desc: 'Швидко знаходимо причину: паливна, наддув, датчики, механіка.',
      },
      {
        title: 'Усунення диму, втрати потужності',
        desc: 'Повертаємо тягу та стабільність. Ніякої «магії» — лише виміри й факти.',
      },
      {
        title: 'Ремонт комерційного транспорту',
        desc: 'Буси та робочі авто — пріоритет по строках. Мінімізуємо простій.',
      },
    ],
    [],
  )

  const reviews = useMemo<Review[]>(
    () => [
      {
        name: 'Олег, Одеса',
        text: 'Димів і не тягнув. Після діагностики все пояснили, зробили — поїхав як треба.',
      },
      {
        name: 'Ірина, Одеса',
        text: 'Заводився через раз. Знайшли причину швидко, ремонт акуратний, спілкування — топ.',
      },
      {
        name: 'Сергій, Одеса',
        text: 'Капремонт зробили з гарантією. Відчуття, що працюють професіонали, не «гараж».',
      },
      {
        name: 'Андрій, Одеса',
        text: 'Комерційне авто: важливі строки. Вклались, все по чесному й прозоро.',
      },
    ],
    [],
  )

  const gallery = useMemo(
    () => [
      { src: withBase('img/1.jpg'), label: 'Процес ремонту дизельного двигуна в майстерні' },
      { src: withBase('img/2.jpg'), label: 'Дизельний двигун на стенді діагностики' },
      { src: withBase('img/3.jpg'), label: 'Проведення комплексної діагностики' },
      { src: withBase('img/4.jpg'), label: 'Розбір та збірка дизельного мотора' },
      { src: withBase('img/5.jpg'), label: 'Відновлення вузлів і деталей' },
      { src: withBase('img/6.jpg'), label: 'Готовий відремонтований дизельний двигун' },
    ],
    [],
  )

  const shopItem = useMemo(
    () => ({
      imageSrc: withBase('img/MOTUL-8100-XCLEAN-5W30-5L.webp'),
      title: 'Motul 8100 X-clean 5W-30 5L',
      name: 'Motul 8100 X-clean 5W-30 5L — синтетична моторна олива',
      brand: 'Motul',
      description: [
        'Синтетична моторна олива Motul 8100 X-clean 5W-30 розроблена для сучасних бензинових і дизельних двигунів легкових автомобілів. Забезпечує максимальний захист двигуна, стабільну в’язкість і відмінну роботу за високих та низьких температур.',
        'Формула відповідає вимогам сучасних екологічних стандартів і сумісна із системами очищення вихлопних газів, зокрема із сажовими фільтрами (DPF) та каталізаторами.',
        'Motul 8100 X-clean 5W-30 підходить для автомобілів європейських виробників, зокрема BMW, Mercedes-Benz, Volkswagen, Porsche та інших.',
      ],
      benefits: [
        'Повністю синтетична формула',
        'Відмінний захист двигуна від зношування',
        'Стабільна робота за екстремальних температур',
        'Сумісність із DPF та каталізаторами',
        'Збільшений інтервал заміни оливи',
      ],
      specs: [
        'ACEA C3',
        'API SN',
        'BMW Longlife-04',
        'Mercedes-Benz 229.51 / 229.52',
        'Volkswagen 502.00 / 505.00 / 505.01',
        'Porsche C30',
      ],
      meta: [
        { label: 'Об’єм', value: '5 л' },
        { label: 'Тип оливи', value: 'синтетична' },
        { label: 'В’язкість', value: '5W-30' },
      ],
    }),
    [],
  )

  return (
    <div className="page">
      <a className="skip" href="#main">
        Перейти до контенту
      </a>

      <Header />

      <main id="main" role="main">
        <Hero />

        <section id="services" className="section">
          <div className="container">
            <div className="sectionHead" data-reveal>
              <h2>Наші послуги з ремонту дизельних двигунів</h2>
              <p>
                Дизель — це контроль. Ми працюємо точно, вимірювано й під результат. Від діагностики до повного капітального ремонту.
              </p>
            </div>

            <div className="grid services">
              {services.map((s, idx) => (
                <article className="card" id={`service-${idx + 1}`} key={s.title} data-reveal>
                  <div className="cardIcon" aria-hidden="true">
                    <span />
                  </div>
                  <h3>
                    <a href={`#service-${idx + 1}`}>{s.title}</a>
                  </h3>
                  <p>{s.desc}</p>
                  <a className="btn btnRed" href="#contacts">
                    Записатися
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="section sectionAlt">
          <div className="container">
            <div className="twoCol">
              <div data-reveal>
                <h2>Чому Diesel Craft</h2>
                <p>
                  Преміум сервіс — це не слова. Це процес, стандарти та відповідальність.
                </p>
                <ul className="bullets">
                  <li><strong>Працюємо по Одесі</strong> — швидкий приїзд, знання міста</li>
                  <li><strong>Досвід з дизельними моторами</strong> — <a href="#services">наш профіль</a></li>
                  <li><strong>Гарантія на виконані роботи</strong> — ваш спокій</li>
                  <li><strong>Чесна діагностика</strong> — без зайвих замін</li>
                  <li><strong>Реальні майстри, не перекупи</strong> — виконавці в сервісі</li>
                </ul>
              </div>

              <div className="panel" data-reveal>
                <div className="panelTitle">Diesel Craft</div>
                <div className="panelLine" />
                <div className="panelText">
                  Контроль, сила і впевненість у твоєму дизелі.
                </div>
                <div className="panelActions">
                  <a className="btn btnRed" href="#contacts">
                    Записатися на діагностику
                  </a>
                  <a className="btn btnGhost" href={`tel:${PHONE_TEL_1}`}>
                    Подзвонити зараз
                  </a>
                </div>
                <div className="panelNote">
                  Одеса · швидко · якісно · з гарантією
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="problems" className="section">
          <div className="container">
            <div className="sectionHead" data-reveal>
              <h2>Типові проблеми</h2>
              <p>
                Ваш дизель димить, не тягне або погано заводиться? Це вирішується — почнімо з
                діагностики.
              </p>
            </div>

            <div className="grid problems">
              {[
                { id: 'smoke', text: 'Машина димить' },
                { id: 'power', text: 'Пропала тяга' },
                { id: 'noise', text: 'Сторонні шуми в моторі' },
                { id: 'start', text: 'Погано заводиться' },
                { id: 'fuel', text: 'Збільшилась витрата палива' },
              ].map((p) => (
                <a href="#contacts" key={p.id} className="chip" data-reveal>
                  {p.text}
                </a>
              ))}
            </div>

            <div className="center" data-reveal>
              <a className="btn btnRed" href="#contacts">
                Ми знаємо, як це вирішити
              </a>
            </div>
          </div>
        </section>

        <section id="gallery" className="section sectionAlt">
          <div className="container">
            <div className="sectionHead" data-reveal>
              <h2>Процес / Галерея</h2>
              <p>
                Місце для реальних фото моторів та процесу ремонту. Додає довіру й відчуття
                «дорого».
              </p>
            </div>

            <div className="grid gallery">
              {gallery.map((g, i) => (
                <figure className="shot" key={g.src} data-reveal>
                  <img
                    className="shotImg"
                    src={g.src}
                    alt={g.label}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="shotGlow" aria-hidden="true" />
                  <figcaption className="shotLabel">{g.label ?? `Фото ${i + 1}`}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="section">
          <div className="container">
            <div className="sectionHead" data-reveal>
              <h2>Відгуки</h2>
              <p>Коротко. По суті. Одеса.</p>
            </div>

            <div className="grid reviews">
              {reviews.map((r, idx) => (
                <article className="card" id={`review-${idx + 1}`} key={r.name} data-reveal>
                  <h3 className="reviewName">{r.name}</h3>
                  <p className="reviewText">{r.text}</p>
                </article>
              ))}
            </div>
            
            <div className="center" style={{ marginTop: '2rem' }} data-reveal>
              <p className="muted">Хочете стати нашим наступним задоволеним клієнтом?</p>
              <a className="btn btnRed" href="#services">Дивіться наші послуги</a>
            </div>
          </div>
        </section>

        <section id="shop" className="section sectionAlt">
          <div className="container">
            <div className="sectionHead" data-reveal>
              <h2>Магазин моторних олив</h2>
              <p>Якісні моторні оливи для дизельних двигунів. Питайте про наявність, ціни та рекомендований вибір для вашого авто. Замовленням в <a href={TELEGRAM_URL} target="_blank" rel="noreferrer">Telegram</a> та <a href={VIBER_URL}>Viber</a>.</p>
            </div>

            <div className="twoCol">
              <div className="productMedia" data-reveal>
                <img
                  className="productImg"
                  src={shopItem.imageSrc}
                  alt="Motul 8100 X-clean 5W-30 5L — фото каністри"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="panel" data-reveal>
                <div className="panelTitle">{shopItem.name}</div>
                <div className="panelLine" />

                <div className="contacts" aria-label="Характеристики">
                  <div className="contactRow">
                    <div className="contactLabel">Бренд</div>
                    <div className="contactValue">{shopItem.brand}</div>
                  </div>
                  {shopItem.meta.map((m) => (
                    <div className="contactRow" key={m.label}>
                      <div className="contactLabel">{m.label}</div>
                      <div className="contactValue">{m.value}</div>
                    </div>
                  ))}
                </div>

                {shopItem.description.map((p) => (
                  <p className="muted" key={p}>
                    {p}
                  </p>
                ))}

                <div className="muted" style={{ marginTop: 16, fontWeight: 800 }}>
                  Переваги
                </div>
                <ul className="bullets" aria-label="Переваги">
                  {shopItem.benefits.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <div className="muted" style={{ marginTop: 16, fontWeight: 800 }}>
                  Специфікації та допуски
                </div>
                <ul className="bullets" aria-label="Специфікації та допуски">
                  {shopItem.specs.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>

                <div className="panelActions" style={{ marginTop: 16 }}>
                  <a className="btn btnRed" href={TELEGRAM_URL} target="_blank" rel="noreferrer">
                    Замовити в Telegram
                  </a>
                  <a className="btn btnGhost" href="#contacts">
                    Уточнити наявність
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contacts" className="section sectionAlt">
          <div className="container">
            <div className="sectionHead" data-reveal>
              <h2>Контакти і режим роботи</h2>
              <p>
                Два зручних філіали в Одесі. Звоніть в найближчий до вас, запишіться на діагностику або напишіть в <a href={TELEGRAM_URL} target="_blank" rel="noreferrer">Telegram</a>.
              </p>
            </div>

            <div className="branches">
              {/* Філіал 1 */}
              <div className="branch" data-reveal>
                <div className="branchHead">
                  <h3 className="branchName">{BRANCH_1.name}</h3>
                  <div className="branchMeta">{BRANCH_1.hours}</div>
                </div>

                <div className="branchBody">
                  <div className="branchItem">
                    <div className="branchLabel">Адреса</div>
                    <div className="branchValue">{BRANCH_1.address}</div>
                  </div>

                  <div className="branchItem">
                    <div className="branchLabel">Телефон</div>
                    <a href={`tel:${BRANCH_1.phoneTel}`} className="branchValue phone-link">
                      {BRANCH_1.phone}
                    </a>
                  </div>

                  <div className="branchActions">
                    <a href={`tel:${BRANCH_1.phoneTel}`} className="btn btnRed">
                      📞 Дзвонити
                    </a>
                    <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="btn btnGhost">
                      ✉️ Telegram
                    </a>
                  </div>
                </div>
              </div>

              {/* Філіал 2 */}
              <div className="branch" data-reveal>
                <div className="branchHead">
                  <h3 className="branchName">{BRANCH_2.name}</h3>
                  <div className="branchMeta">{BRANCH_2.hours}</div>
                </div>

                <div className="branchBody">
                  <div className="branchItem">
                    <div className="branchLabel">Адреса</div>
                    <div className="branchValue">{BRANCH_2.address}</div>
                  </div>

                  <div className="branchItem">
                    <div className="branchLabel">Телефон</div>
                    <a href={`tel:${BRANCH_2.phoneTel}`} className="branchValue phone-link">
                      {BRANCH_2.phone}
                    </a>
                  </div>

                  <div className="branchActions">
                    <a href={`tel:${BRANCH_2.phoneTel}`} className="btn btnRed">
                      📞 Дзвонити
                    </a>
                    <a href={VIBER_URL} className="btn btnGhost">
                      ✉️ Viber
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="contactFormSection" data-reveal>
              <div className="contactFormHead">
                <h3>Записатися на діагностику</h3>
                <p>Залиште контакти — передзвонимо та узгодимо час</p>
              </div>
              <LeadForm />
            </div>
          </div>
        </section>

        <Footer />
      </main>

      <MobileCta />
    </div>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container headerInner">
        <a className="brand" href="#main" aria-label="Diesel Craft">
          <div className="brandMark" aria-hidden="true" />
          <div className="brandText">
            <div className="brandName">Diesel Craft</div>
            <div className="brandCity">Одеса</div>
          </div>
        </a>

        <nav className="nav" aria-label="Навігація">
          <a href="#services">Послуги</a>
          <a href="#why">Чому ми</a>
          <a href="#problems">Проблеми</a>
          <a href="#shop">Магазин</a>
          <a href="#reviews">Відгуки</a>
          <a href="#contacts">Контакти</a>
        </nav>

        <div className="headerActions">
          <a className="phone" href={`tel:${PHONE_TEL_1}`} aria-label="Подзвонити">
            {PHONE_DISPLAY_1}
          </a>
          <a className="btn btnRed" href="#contacts">
            Записатися
          </a>
          <button
            type="button"
            className={menuOpen ? 'menuBtn menuBtnOpen' : 'menuBtn'}
            aria-label={menuOpen ? 'Закрити меню' : 'Відкрити меню'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="menuBtnLines" aria-hidden="true" />
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="menuOverlay" role="presentation" onClick={closeMenu}>
          <div
            id="mobile-menu"
            className="menuSheet"
            role="dialog"
            aria-modal="true"
            aria-label="Меню"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="menuHead">
              <div className="menuTitle">Diesel Craft</div>
              <button type="button" className="menuClose" onClick={closeMenu} aria-label="Закрити">
                ✕
              </button>
            </div>

            <div className="menuLinks" aria-label="Розділи">
              <a href="#services" onClick={closeMenu}>
                Послуги
              </a>
              <a href="#why" onClick={closeMenu}>
                Чому ми
              </a>
              <a href="#problems" onClick={closeMenu}>
                Проблеми
              </a>
              <a href="#shop" onClick={closeMenu}>
                Магазин
              </a>
              <a href="#reviews" onClick={closeMenu}>
                Відгуки
              </a>
              <a href="#contacts" onClick={closeMenu}>
                Контакти
              </a>
            </div>

            <div className="menuActions">
              <a className="btn btnGhost btnFull" href={`tel:${PHONE_TEL_1}`} onClick={closeMenu}>
                Дзвінок: {PHONE_DISPLAY_1}
              </a>
              <a className="btn btnRed btnFull" href="#contacts" onClick={closeMenu}>
                Записатися на діагностику
              </a>
              <div className="menuMeta" aria-label="Адреси сервісу">
                <div>{ADDRESS_DISPLAY_1}</div>
                <div>{ADDRESS_DISPLAY_2}</div>
              </div>
              <div className="menuMeta" aria-label="Телефони сервісу">
                <div>
                  <a href={`tel:${PHONE_TEL_1}`} onClick={closeMenu}>
                    {PHONE_DISPLAY_1}
                  </a>
                </div>
                <div>
                  <a href={`tel:${PHONE_TEL_2}`} onClick={closeMenu}>
                    {PHONE_DISPLAY_2}
                  </a>
                </div>
              </div>
              <a className="menuMeta" href={TELEGRAM_URL} target="_blank" rel="noreferrer" onClick={closeMenu}>
                Написати в Telegram
              </a>
              <a className="menuMeta" href={VIBER_URL} onClick={closeMenu}>
                Написати у Viber
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}

function Hero() {
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduceMotion(mq.matches)
    sync()

    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  return (
    <section className="hero" aria-label="Ремонт дизельних двигунів в Одесі">
      <img className="heroBanner" src={HERO_BANNER_SRC} alt="" aria-hidden="true" />
      <div className="heroBg" aria-hidden="true" />
      <div className="container heroInner">
        <div className="heroCopy" data-reveal>
          <div className="kicker">Diesel Craft · Одеса</div>
          <h1>Ремонт дизельних двигунів в Одесі</h1>
          <p className="lead">
            Професійна діагностика та ремонт дизельних моторів з гарантією.
          </p>
          <div className="ctaRow">
            <a className="btn btnRed" href="#contacts">
              Записатися на діагностику
            </a>
            <a className="btn btnGhost" href={`tel:${PHONE_TEL_1}`}>
              Подзвонити зараз
            </a>
          </div>
          <div className="heroBadges">
            <span className="badge">Чесна діагностика</span>
            <span className="badge">Гарантія</span>
            <span className="badge">Дизель — наш профіль</span>
          </div>
        </div>

        <div className="heroMedia" data-reveal>
          <div className="mediaFrame">
            <video
              className="heroVideo"
              muted
              playsInline
              autoPlay={!reduceMotion}
              loop={!reduceMotion}
              preload="metadata"
              poster={HERO_VIDEO_POSTER}
              aria-label="Відео процесу ремонту дизельного двигуна"
            >
              <source src={HERO_VIDEO_SRC} type="video/mp4" />
            </video>
            <div className="mediaHud" aria-hidden="true">
              <div className="mediaTop">
                <div className="mediaDot" />
                <div className="mediaDot" />
                <div className="mediaDot" />
              </div>
              <div className="mediaBody">
                <div className="mediaTitle">Процес ремонту</div>
                <div className="mediaSub">Реальне відео з майстерні · Одеса</div>
                <div className="mediaMeter">
                  <div className="bar" />
                </div>
              </div>
            </div>
          </div>
          <div className="smoke" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}

function LeadForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === 'sending') return

    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = {
      name: String(formData.get('name') ?? ''),
      phone: String(formData.get('phone') ?? ''),
      issue: String(formData.get('issue') ?? ''),
      source: 'site',
      city: 'Одеса',
    }

    setStatus('sending')

    const endpoint = import.meta.env.VITE_LEAD_ENDPOINT as string | undefined
    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
        if (!res.ok) throw new Error('Bad response')
      } else {
        const subject = encodeURIComponent('Diesel Craft — заявка з сайту')
        const body = encodeURIComponent(
          `Ім'я: ${payload.name}\nТелефон: ${payload.phone}\nПроблема: ${payload.issue}\nМісто: Одеса`,
        )
        window.location.href = `mailto:dieselcraft@example.com?subject=${subject}&body=${body}`
      }

      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} aria-label="Форма заявки">
      <div className="formTitle">Заявка на діагностику</div>
      <div className="formHint">Залиште контакти — передзвонимо та узгодимо час.</div>

      <label className="field">
        <span>Імʼя</span>
        <input name="name" autoComplete="name" placeholder="Ваше імʼя" required />
      </label>

      <label className="field">
        <span>Телефон</span>
        <input
          name="phone"
          inputMode="tel"
          autoComplete="tel"
          placeholder="093 383 83 73"
          required
        />
      </label>

      <label className="field">
        <span>Що турбує</span>
        <textarea
          name="issue"
          rows={4}
          placeholder="Димить / не тягне / трясе / стукає / не заводиться..."
          required
        />
      </label>

      <button className="btn btnRed btnFull" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Відправляємо…' : 'Відправити заявку'}
      </button>

      {status === 'sent' ? (
        <div className="formMsg ok">Заявку прийнято. Ми звʼяжемось найближчим часом.</div>
      ) : null}
      {status === 'error' ? (
        <div className="formMsg err">
          Не вдалося відправити. Спробуйте подзвонити або написати в месенджер.
        </div>
      ) : null}

      <div className="formFoot">
        Натискаючи «Відправити», ви погоджуєтесь на обробку контактних даних для зворотного
        звʼязку.
      </div>
    </form>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footerInner">
        <div className="footerLeft">
          <div className="footerBrand">Diesel Craft</div>
          <div className="footerNote">Ремонт дизельних двигунів · Одеса</div>
          <div className="footerNote">{ADDRESS_DISPLAY_1}</div>
          <div className="footerNote">{ADDRESS_DISPLAY_2}</div>
        </div>
        <div className="footerRight">
          <nav aria-label="Основна навігація">
            <a href="#main">На початок</a>
            <a href="#services">Послуги</a>
            <a href="#why">Чому ми</a>
            <a href="#problems">Типові проблеми</a>
          </nav>
          <nav aria-label="Додаткова навігація">
            <a href="#gallery">Галерея</a>
            <a href="#reviews">Відгуки</a>
            <a href="#shop">Магазин</a>
            <a href="#contacts">Контакти</a>
          </nav>
          <nav aria-label="Контакти">
            <a href={`tel:${PHONE_TEL_1}`}>{PHONE_DISPLAY_1}</a>
            <a href={`tel:${PHONE_TEL_2}`}>{PHONE_DISPLAY_2}</a>
            <a href={TELEGRAM_URL} target="_blank" rel="noreferrer">Telegram</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

function MobileCta() {
  return (
    <div className="mobileCta" aria-label="Швидкі дії">
      <a className="btn btnGhost" href={`tel:${PHONE_TEL_1}`} title={PHONE_DISPLAY_1}>
        ☎️ Дзвінок
      </a>
      <a className="btn btnRed" href="#contacts" title="Записатися на діагностику">
        ✏️ Запис
      </a>
    </div>
  )
}
