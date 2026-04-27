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
        desc: 'Повний спектр послуг для TDI, CDI, HDI, dCi. Від точної діагностики до повного відновлення ресурсу.',
      },
      {
        title: 'Ремонт паливної апаратури',
        desc: 'Діагностика та ремонт форсунок Common Rail, насос-форсунок, ТНВД (Bosch, Delphi, Denso).',
      },
      {
        title: 'Капітальний ремонт мотора',
        desc: 'Контроль геометрії, розточка, заміна поршневої групи. Збірка з чітким дотриманням заводських норм.',
      },
      {
        title: 'Ремонт та заміна ГБЦ',
        desc: 'Перевірка на герметичність, фрезерування площини, заміна направляючих та сальників клапанів.',
      },
      {
        title: 'Комплексна діагностика',
        desc: 'Комп’ютерна діагностика, перевірка параметрів наддуву, турбіни, EGR та сажових фільтрів (DPF).',
      },
      {
        title: 'Ремонт комерційного транспорту',
        desc: 'Обслуговування мікроавтобусів (Sprinter, Transit, Ducato) та спецтехніки. Пріоритет по строках.',
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

  return (
    <div className="page">
      <a className="skip" href="#main">
        Перейти до контенту
      </a>

      <Header />

      <main id="main" role="main">
        <Hero />

        <section id="hero-cta" className="section heroCTASection" data-reveal>
          <div className="container">
            <div className="heroCTAContent">
              <div className="heroCTAText">
                <h2>Потрібна діагностика?</h2>
                <p>Порівняйте результати з конкурентами — ми знайдемо справжню причину.</p>
              </div>
              <a href={`tel:${PHONE_TEL_1}`} className="btn btnRed btnXl" aria-label={`Подзвонити ${PHONE_DISPLAY_1}`}>
                📞 Подзвонити одразу
              </a>
            </div>
          </div>
        </section>

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
                  <a className="btn btnRed" href={`tel:${PHONE_TEL_1}`} aria-label={`Подзвонити ${PHONE_DISPLAY_1}`}>
                    📞 Подзвонити
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
                  <a className="btn btnRed" href={`tel:${PHONE_TEL_1}`} aria-label={`Подзвонити ${PHONE_DISPLAY_1}`}>
                    📞 Подзвонити
                  </a>
                  <a className="btn btnGhost" href={`tel:${PHONE_TEL_1}`} aria-label={`Подзвонити ${PHONE_DISPLAY_1}`}>
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
                { id: 'smoke', text: 'Чорний або сизий дим' },
                { id: 'power', text: 'Пропала тяга / не їде' },
                { id: 'noise', text: 'Стук у двигуні' },
                { id: 'start', text: 'Довго заводиться на холодну' },
                { id: 'engine', text: 'Плавають оберти / Троїть' },
                { id: 'fuel', text: 'Перевитрата дизеля' },
              ].map((p) => (
                <a href={`tel:${PHONE_TEL_1}`} key={p.id} className="chip" data-reveal aria-label={`Подзвонити ${PHONE_DISPLAY_1}`}>
                  {p.text}
                </a>
              ))}
            </div>

            <div className="center" data-reveal>
              <a className="btn btnRed" href={`tel:${PHONE_TEL_1}`} aria-label={`Подзвонити ${PHONE_DISPLAY_1}`}>
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

        <section id="guarantee" className="section sectionAlt">
          <div className="container">
            <div className="sectionHead" data-reveal>
              <h2>Чому клієнти вибирають нас</h2>
              <p>Результати говорять самі за себе. Гарантія на всі роботи, чесна діагностика, реальні майстри.</p>
            </div>

            <div className="guaranteeGrid">
              <div className="guaranteeCard" data-reveal>
                <div className="guaranteeIcon">✅</div>
                <h3>Гарантія на роботи</h3>
                <p>Не задоволені результатом? Переробимо безплатно. Гарантія — це наша репутація.</p>
              </div>

              <div className="guaranteeCard" data-reveal>
                <div className="guaranteeIcon">🔍</div>
                <h3>Точна діагностика</h3>
                <p>Знаходимо справжню причину проблеми. Без зайвих замін і невиправданих витрат.</p>
              </div>

              <div className="guaranteeCard" data-reveal>
                <div className="guaranteeIcon">⚡</div>
                <h3>Швидко й якісно</h3>
                <p>Мінімізуємо час простою. Комерційний транспорт — наш пріоритет.</p>
              </div>

              <div className="guaranteeCard" data-reveal>
                <div className="guaranteeIcon">👨‍🔧</div>
                <h3>Професійна команда</h3>
                <p>Реальні майстри з років досвіду. Не перекупи, не гараж — серйозна компанія.</p>
              </div>

              <div className="guaranteeCard" data-reveal>
                <div className="guaranteeIcon">📍</div>
                <h3>Два філіали в Одесі</h3>
                <p>Зручна локація. Приїжджайте до найближчого — обслуговування однакової якості.</p>
              </div>

              <div className="guaranteeCard" data-reveal>
                <div className="guaranteeIcon">💰</div>
                <h3>Справедливі ціни</h3>
                <p>Прозорі розрахунки. Немає скритих витрат, все обговорюється заздалегідь.</p>
              </div>
            </div>

            <div className="guaranteeCTA" data-reveal>
              <h3>Готові розпочати ремонт?</h3>
              <a href={`tel:${PHONE_TEL_1}`} className="btn btnRed btnXl" aria-label={`Подзвонити ${PHONE_DISPLAY_1}`}>
                📞 Подзвонити зараз
              </a>
            </div>
          </div>
        </section>

        <section id="contacts" className="section sectionAlt">
          <div className="container">
            <div className="sectionHead" data-reveal>
              <h2>Контакти і режим роботи</h2>
              <p>
                Два зручних філіали в Одесі. Дзвоніть у найближчий або напишіть у <a href={TELEGRAM_URL} target="_blank" rel="noreferrer">Telegram</a>.
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
                    <a href={`tel:${BRANCH_1.phoneTel}`} className="branchValue phone-link" aria-label={`Подзвонити ${BRANCH_1.phone}`}>
                      {BRANCH_1.phone}
                    </a>
                  </div>

                  <div className="branchActions">
                    <a href={`tel:${BRANCH_1.phoneTel}`} className="btn btnRed" aria-label={`Подзвонити ${BRANCH_1.phone}`}>
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
                    <a href={`tel:${BRANCH_2.phoneTel}`} className="branchValue phone-link" aria-label={`Подзвонити ${BRANCH_2.phone}`}>
                      {BRANCH_2.phone}
                    </a>
                  </div>

                  <div className="branchActions">
                    <a href={`tel:${BRANCH_2.phoneTel}`} className="btn btnRed" aria-label={`Подзвонити ${BRANCH_2.phone}`}>
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
                <h3>Готові розпочати?</h3>
                <p>Подзвоніть одному з наших філіалів або виберіть зручний месенджер.</p>
              </div>
              <div className="quickContacts" aria-label="Швидкі контакти">
                <a href={`tel:${BRANCH_1.phoneTel}`} className="btn btnRed" aria-label={`Подзвонити ${BRANCH_1.phone}`}>
                  📞 {BRANCH_1.phone}
                </a>
                <a href={`tel:${BRANCH_2.phoneTel}`} className="btn btnRed" aria-label={`Подзвонити ${BRANCH_2.phone}`}>
                  📞 {BRANCH_2.phone}
                </a>
                <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="btn btnGhost">
                  📱 Telegram
                </a>
                <a href={VIBER_URL} className="btn btnGhost">
                  💬 Viber
                </a>
              </div>
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
          <a href="#reviews">Відгуки</a>
          <a href="#contacts">Контакти</a>
        </nav>

        <div className="headerActions">
          <div className="phones" aria-label="Телефони">
            <a className="phone" href={`tel:${PHONE_TEL_1}`} aria-label={`Подзвонити (Ліски) ${PHONE_DISPLAY_1}`}>
              Ліски: {PHONE_DISPLAY_1}
            </a>
            <a className="phone phoneSecondary" href={`tel:${PHONE_TEL_2}`} aria-label={`Подзвонити (Приміська) ${PHONE_DISPLAY_2}`}>
              Приміська: {PHONE_DISPLAY_2}
            </a>
          </div>
          <a className="btn btnRed headerCall" href={`tel:${PHONE_TEL_1}`} aria-label={`Подзвонити ${PHONE_DISPLAY_1}`}>
            <span className="headerCallLabel">📞 Подзвонити</span>
            <span className="headerCallNumber">{PHONE_DISPLAY_1}</span>
          </a>
          <a className="btn btnGhost headerCall headerCallAlt" href={`tel:${PHONE_TEL_2}`} aria-label={`Подзвонити ${PHONE_DISPLAY_2}`}>
            <span className="headerCallLabel">Приміська</span>
            <span className="headerCallNumber">{PHONE_DISPLAY_2}</span>
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

            <div className="menuContent">
              <div className="menuLinks" aria-label="Розділи">
                <a href="#services" onClick={closeMenu}>
                  🔧 Послуги
                </a>
                <a href="#why" onClick={closeMenu}>
                  ⭐ Чому ми
                </a>
                <a href="#problems" onClick={closeMenu}>
                  🚗 Типові проблеми
                </a>
                <a href="#gallery" onClick={closeMenu}>
                  📸 Галерея
                </a>
                <a href="#reviews" onClick={closeMenu}>
                  💬 Відгуки
                </a>

              </div>

              <div className="menuDivider" />

              <div className="menuBranches" aria-label="Філіали">
                <div className="menuBranchTitle">Наші філіали</div>
                
                {/* Філіал 1 */}
                <div className="menuBranch">
                  <div className="menuBranchName">{BRANCH_1.name}</div>
                  <div className="menuBranchTime">{BRANCH_1.hours}</div>
                  <div className="menuBranchAddr">{BRANCH_1.address}</div>
                  <a href={`tel:${BRANCH_1.phoneTel}`} className="menuBranchPhone" aria-label={`Подзвонити ${BRANCH_1.phone}`}>
                    📞 {BRANCH_1.phone}
                  </a>
                </div>

                {/* Філіал 2 */}
                <div className="menuBranch">
                  <div className="menuBranchName">{BRANCH_2.name}</div>
                  <div className="menuBranchTime">{BRANCH_2.hours}</div>
                  <div className="menuBranchAddr">{BRANCH_2.address}</div>
                  <a href={`tel:${BRANCH_2.phoneTel}`} className="menuBranchPhone" aria-label={`Подзвонити ${BRANCH_2.phone}`}>
                    📞 {BRANCH_2.phone}
                  </a>
                </div>
              </div>

              <div className="menuDivider" />
            </div>

            <div className="menuActions">
              <a className="btn btnRed btnFull" href={`tel:${BRANCH_1.phoneTel}`} aria-label={`Подзвонити ${BRANCH_1.phone}`}>
                ☎️ {BRANCH_1.phone}
              </a>
              <a className="btn btnGhost btnFull" href={`tel:${BRANCH_2.phoneTel}`} aria-label={`Подзвонити ${BRANCH_2.phone}`}>
                ☎️ {BRANCH_2.phone}
              </a>
              <div className="menuMessengers">
                <a className="menuMessenger" href={TELEGRAM_URL} target="_blank" rel="noreferrer">
                  ✈️ Telegram
                </a>
                <a className="menuMessenger" href={VIBER_URL}>
                  💬 Viber
                </a>
              </div>
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
            <a className="btn btnRed" href={`tel:${BRANCH_1.phoneTel}`} aria-label={`Подзвонити ${BRANCH_1.phone}`}>
              📞 Ліски: {BRANCH_1.phone}
            </a>
            <a className="btn btnGhost" href={`tel:${BRANCH_2.phoneTel}`} aria-label={`Подзвонити ${BRANCH_2.phone}`}>
              📞 Приміська: {BRANCH_2.phone}
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
      <a
        className="btn btnRed mobileCtaBtn"
        href={`tel:${PHONE_TEL_1}`}
        title={`Подзвонити ${PHONE_DISPLAY_1}`}
        aria-label={`Подзвонити ${PHONE_DISPLAY_1}`}
      >
        <span className="mobileCtaLabel">📞 Ліски</span>
        <span className="mobileCtaNumber">{PHONE_DISPLAY_1}</span>
      </a>
      <a
        className="btn btnGhost mobileCtaBtn"
        href={`tel:${PHONE_TEL_2}`}
        title={`Подзвонити ${PHONE_DISPLAY_2}`}
        aria-label={`Подзвонити ${PHONE_DISPLAY_2}`}
      >
        <span className="mobileCtaLabel">📞 Приміська</span>
        <span className="mobileCtaNumber">{PHONE_DISPLAY_2}</span>
      </a>
    </div>
  )
}

