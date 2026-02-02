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

const PHONE_DISPLAY = '093 383 83 73'
const PHONE_TEL = '+380933838373'
const TELEGRAM_URL = 'https://t.me/dieselcraft_od'
const VIBER_URL = 'viber://chat?number=%2B380933838373'

const ADDRESS_DISPLAY = 'вулиця Академіка Заболотного, 47, Ліски, Одеса'

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
      { src: withBase('img/1.jpg'), label: 'Процес ремонту' },
      { src: withBase('img/2.jpg'), label: 'Дизельний двигун' },
      { src: withBase('img/3.jpg'), label: 'Діагностика' },
      { src: withBase('img/4.jpg'), label: 'Розбір/збірка' },
      { src: withBase('img/5.jpg'), label: 'Відновлення вузлів' },
      { src: withBase('img/6.jpg'), label: 'Результат' },
    ],
    [],
  )

  return (
    <div className="page">
      <a className="skip" href="#main">
        Перейти до контенту
      </a>

      <Header />

      <main id="main">
        <Hero />

        <section id="services" className="section">
          <div className="container">
            <div className="sectionHead" data-reveal>
              <h2>Наші послуги</h2>
              <p>
                Дизель — це контроль. Ми працюємо точно, вимірювано й під результат.
              </p>
            </div>

            <div className="grid services">
              {services.map((s) => (
                <article className="card" key={s.title} data-reveal>
                  <div className="cardIcon" aria-hidden="true">
                    <span />
                  </div>
                  <h3>{s.title}</h3>
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
                  <li>Працюємо по Одесі</li>
                  <li>Досвід з дизельними моторами</li>
                  <li>Гарантія на виконані роботи</li>
                  <li>Чесна діагностика</li>
                  <li>Реальні майстри, не перекупи</li>
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
                  <a className="btn btnGhost" href={`tel:${PHONE_TEL}`}>
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
                'Машина димить',
                'Пропала тяга',
                'Сторонні шуми в моторі',
                'Погано заводиться',
                'Збільшилась витрата палива',
              ].map((t) => (
                <div className="chip" key={t} data-reveal>
                  {t}
                </div>
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
              {reviews.map((r) => (
                <article className="card" key={r.name} data-reveal>
                  <h3 className="reviewName">{r.name}</h3>
                  <p className="reviewText">{r.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="section sectionAlt">
          <div className="container">
            <div className="twoCol">
              <div data-reveal>
                <h2>Контакти</h2>
                <p className="muted">
                  Одеса. Запишіться на діагностику — відповімо швидко та по суті.
                </p>

                <div className="contacts">
                  <div className="contactRow">
                    <div className="contactLabel">Адреса</div>
                    <div className="contactValue">{ADDRESS_DISPLAY}</div>
                  </div>
                  <div className="contactRow">
                    <div className="contactLabel">Телефон</div>
                    <a className="contactValue" href={`tel:${PHONE_TEL}`}>
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                  <div className="contactRow">
                    <div className="contactLabel">Telegram</div>
                    <a className="contactValue" href={TELEGRAM_URL} target="_blank" rel="noreferrer">
                      Написати в Telegram
                    </a>
                  </div>
                  <div className="contactRow">
                    <div className="contactLabel">Viber</div>
                    <a className="contactValue" href={VIBER_URL}>
                      Написати у Viber
                    </a>
                  </div>
                  <div className="contactRow">
                    <div className="contactLabel">Графік</div>
                    <div className="contactValue">Пн–Сб · 09:00–19:00</div>
                  </div>
                </div>
              </div>

              <div data-reveal>
                <LeadForm />
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
          <a className="phone" href={`tel:${PHONE_TEL}`} aria-label="Подзвонити">
            {PHONE_DISPLAY}
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
              <a href="#reviews" onClick={closeMenu}>
                Відгуки
              </a>
              <a href="#contacts" onClick={closeMenu}>
                Контакти
              </a>
            </div>

            <div className="menuActions">
              <a className="btn btnGhost btnFull" href={`tel:${PHONE_TEL}`} onClick={closeMenu}>
                Дзвінок: {PHONE_DISPLAY}
              </a>
              <a className="btn btnRed btnFull" href="#contacts" onClick={closeMenu}>
                Записатися на діагностику
              </a>
              <div className="menuMeta" aria-label="Адреса сервісу">
                {ADDRESS_DISPLAY}
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
            <a className="btn btnGhost" href={`tel:${PHONE_TEL}`}>
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
          <div className="footerNote">{ADDRESS_DISPLAY}</div>
        </div>
        <div className="footerRight">
          <a href="#services">Послуги</a>
          <a href="#contacts">Контакти</a>
          <a href={`tel:${PHONE_TEL}`}>Дзвінок</a>
        </div>
      </div>
    </footer>
  )
}

function MobileCta() {
  return (
    <div className="mobileCta" aria-label="Швидкі дії">
      <a className="btn btnGhost" href={`tel:${PHONE_TEL}`}>
        Дзвінок
      </a>
      <a className="btn btnRed" href="#contacts">
        Запис
      </a>
    </div>
  )
}
