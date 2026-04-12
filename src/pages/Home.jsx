import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import TiltCard from '../components/TiltCard.jsx'

const EASE = [.16, 1, .3, 1]
const WA = 'https://wa.me/85244270658?text=%E4%BD%A0%E5%A5%BD%EF%BC%81%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84%E5%85%8D%E8%B2%BB%E8%A9%A6%E5%A0%82'

function BlurText({ text, delay = 0 }) {
  return (
    <span aria-label={text}>
      {Array.from(text).map((c, i) => (
        <motion.span key={i} className="char" aria-hidden="true"
          initial={{ opacity: 0, filter: 'blur(14px)', y: 12 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: .6, delay: delay + i * .04, ease: EASE }}>
          {c === ' ' ? '\u00A0' : c}
        </motion.span>
      ))}
    </span>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          <BlurText text="新舊交替" delay={.2} />
          <br />
          <BlurText text="重寫教育" delay={.6} />
        </h1>
        <motion.div className="hero-sub"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8, delay: 1.1, ease: EASE }}>
          專為小學生進步設計嘅系統
        </motion.div>
        <motion.div className="hero-en"
          initial={{ opacity: 0 }} animate={{ opacity: .55 }}
          transition={{ duration: .8, delay: 1.3 }}>
          A system designed for primary student progress
        </motion.div>
        <motion.div className="hero-detail"
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7, delay: 1.5, ease: EASE }}>
          1:4 小班 · 針對自身學習進度 · 每堂追蹤學習表現
        </motion.div>
        <motion.div className="hero-cta"
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7, delay: 1.7, ease: EASE }}>
          <a href={WA} target="_blank" rel="noopener" className="btn-green">免費試堂</a>
          <a href="#progress" className="btn-ghost">了解更多 →</a>
        </motion.div>
      </div>
    </section>
  )
}

function ProgressTracking() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section className="section progress-section" id="progress" ref={ref}>
      <div className="container">
        <div className="progress-grid">
          <motion.div className="progress-body"
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: .8, ease: EASE }}>
            <div className="section-eyebrow">學習追蹤</div>
            <h2>你小朋友嘅進步<br />我哋幫你跟住</h2>
            <p>每堂記錄學習表現。你隨時睇到小朋友嘅進度 — 邊度強、邊度要加強，一目了然。</p>
            <p>唔再靠估，唔再等到考試先知。</p>
          </motion.div>
          <motion.div style={{ y }} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: .8, delay: .1, ease: EASE }}>
            <div className="progress-visual">
              <div className="prog-row"><span className="prog-label">閱讀理解</span><div className="prog-bar"><div className="prog-fill g" style={{ width: '82%' }} /></div><span className="prog-pct">82%</span></div>
              <div className="prog-row"><span className="prog-label">文法</span><div className="prog-bar"><div className="prog-fill a" style={{ width: '68%' }} /></div><span className="prog-pct">68%</span></div>
              <div className="prog-row"><span className="prog-label">詞彙</span><div className="prog-bar"><div className="prog-fill g" style={{ width: '91%' }} /></div><span className="prog-pct">91%</span></div>
              <div className="prog-row"><span className="prog-label">寫作</span><div className="prog-bar"><div className="prog-fill w" style={{ width: '55%' }} /></div><span className="prog-pct">55%</span></div>
              <div className="prog-note">Sample progress dashboard — actual data tracked per student</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const SUBJECTS = [
  { icon: '📖', cls: 'en', title: '英文', en: 'English', body: 'P1–P6。1:4 針對自身學習進度。閱讀理解、文法、寫作全覆蓋。' },
  { icon: '📝', cls: 'zh', title: '中文', en: 'Chinese', body: 'P1–P6。1:4 針對自身學習進度。認字、閱讀、寫作循序漸進。' },
  { icon: '🔢', cls: 'ma', title: '數學', en: 'Mathematics', body: 'P1–P6。1:4 針對自身學習進度。概念理解行先，唔只操數。' },
]

function Subjects() {
  const stagger = { hidden: {}, show: { transition: { staggerChildren: .12 } } }
  const item = { hidden: { opacity: 0, y: 30, rotateX: 20 }, show: { opacity: 1, y: 0, rotateX: 0, transition: { type: 'spring', damping: 20, stiffness: 100 } } }

  return (
    <section className="section">
      <div className="container">
        <motion.div className="section-head" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .7, ease: EASE }}>
          <div className="section-eyebrow">科目</div>
          <h2>三科全覆蓋</h2>
          <p>英文、中文、數學 — 每科都係 1:4 小班，針對你小朋友嘅程度。</p>
        </motion.div>
        <motion.div className="subject-grid" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} style={{ perspective: 1200 }}>
          {SUBJECTS.map(s => (
            <motion.div key={s.title} variants={item}>
              <TiltCard className="subject-card">
                <div className={`subject-icon ${s.cls}`}>{s.icon}</div>
                <h3>{s.title}</h3>
                <div className="en-label">{s.en}</div>
                <p>{s.body}</p>
                <div className="subject-badge">P1–P6 · 1:4 小班</div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ExamKing() {
  return (
    <section className="examking">
      <div className="container">
        <div className="ek-grid">
          <motion.div className="ek-body" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .8, ease: EASE }}>
            <div className="section-eyebrow" style={{ color: 'rgba(255,255,255,.5)' }}>考得好 Exam King</div>
            <h2>屋企都可以練習</h2>
            <p>配合學校課本嘅英文練習卷，隨時出、隨時做。每份卷附完整答案同 TSA 評分準則。</p>
            <div className="ek-pubs">
              {['Oxford', 'Longman', 'Head Start', 'Oxford Ready'].map(p => <span key={p} className="ek-pub">{p}</span>)}
            </div>
            <a href="https://www.examkinghk.com" target="_blank" rel="noopener" className="btn-white">免費試用 →</a>
          </motion.div>
          <motion.div className="ek-visual" initial={{ opacity: 0, x: 40, scale: .92 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: .9, delay: .1, ease: EASE }}>
            <motion.div className="ek-frame" animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
              <div className="ek-bar"><div className="dot" /><div className="dot" /><div className="dot" /><div className="url">examkinghk.com</div></div>
              <div className="ek-body-inner">
                <div className="title">English Practice Paper</div>
                <div style={{ fontSize: 11, color: '#8b949a', textAlign: 'center', marginBottom: 12 }}>P3 · Unit 4 · Present Continuous Tense</div>
                <hr style={{ border: 'none', borderTop: '1px solid #ddd7cf', margin: '12px 0' }} />
                <div style={{ fontSize: 12.5, lineHeight: 1.9 }}>
                  <strong style={{ color: '#314e5e' }}>1.</strong> She _______ (read) a book now.<br />
                  <strong style={{ color: '#314e5e' }}>2.</strong> The children _______ (play) football.<br />
                  <strong style={{ color: '#314e5e' }}>3.</strong> Choose: (A) is write (B) is writing (C) writing
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const TIMETABLE = [
  { day: '一 Mon', slots: [{ label: 'English P1', time: '3:30–5:00', cls: 'en' }, { label: '功課班', time: '4:00–6:00', cls: 'hw' }] },
  { day: '二 Tue', slots: [{ label: 'English P1', time: '3:30–5:00', cls: 'en' }, { label: '功課班', time: '4:00–6:00', cls: 'hw' }] },
  { day: '三 Wed', slots: [{ label: 'Maths P1-P2', time: '3:30–5:00', cls: 'ma' }, { label: 'Maths P3-P4', time: '5:00–6:30', cls: 'ma' }, { label: '功課班', time: '4:00–6:00', cls: 'hw' }] },
  { day: '四 Thu', slots: [{ label: 'Maths P1-P2', time: '3:30–5:00', cls: 'ma' }, { label: 'Chinese P3', time: '5:00–6:30', cls: 'zh' }, { label: '功課班', time: '4:00–6:00', cls: 'hw' }] },
  { day: '五 Fri', slots: [{ label: 'Maths P1-P2', time: '3:30–5:00', cls: 'ma' }, { label: 'Maths P3-P4', time: '5:00–6:30', cls: 'ma' }, { label: '功課班', time: '4:00–6:00', cls: 'hw' }] },
  { day: '六 Sat', slots: [{ label: 'English K2/K3', time: '10:00–11:00', cls: 'en' }, { label: 'Maths P2', time: '12:00–1:30', cls: 'ma' }, { label: 'English P3-P4', time: '3:30–5:00', cls: 'en' }] },
  { day: '日 Sun', slots: [{ label: 'English P3-P4', time: '3:00–4:30', cls: 'en' }, { label: 'English P5-P6', time: '4:30–6:00', cls: 'en' }] },
]

function Timetable() {
  const stagger = { hidden: {}, show: { transition: { staggerChildren: .06 } } }
  const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: .5, ease: EASE } } }

  return (
    <section className="section" style={{ background: 'var(--surface)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div className="container">
        <motion.div className="section-head" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .7, ease: EASE }}>
          <div className="section-eyebrow">時間表</div>
          <h2>每週課堂安排</h2>
        </motion.div>
        <motion.div className="tt-grid" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          {TIMETABLE.map(d => (
            <motion.div key={d.day} className="tt-day" variants={item}>
              <div className="tt-day-name">{d.day}</div>
              <div className="tt-slots">
                {d.slots.map((s, i) => (
                  <div key={i} className={`tt-slot ${s.cls}`}>{s.label}<span className="time">{s.time}</span></div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="tt-note">功課班星期一至五 4:00–6:00（獨立課室）· 試堂預約：星期一至五 7:00–8:00pm</div>
      </div>
    </section>
  )
}

function Location() {
  return (
    <section className="section">
      <div className="container">
        <motion.div className="section-head" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .7, ease: EASE }}>
          <div className="section-eyebrow">位置</div>
          <h2>嚟搵我哋</h2>
        </motion.div>
        <div className="loc-grid">
          <div className="loc-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.8!2d113.972!3d22.390!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDIzJzI2LjkiTiAxMTPCsDU4JzIxLjYiRQ!5e0!3m2!1sen!2shk!4v1" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Sprout Garden map" />
          </div>
          <div className="loc-info">
            <div className="loc-item"><div className="icon">📍</div><div><div className="label">Address</div><div className="value">屯門新合里3號 匯賢一號 801室<br />Unit 801, One Vista Summit, 3 San Hop Lane, Tuen Mun</div></div></div>
            <div className="loc-item"><div className="icon">💬</div><div><div className="label">WhatsApp</div><div className="value"><a href="https://wa.me/85244270658" target="_blank" rel="noopener">+852 4427 0658</a></div></div></div>
            <div className="loc-item"><div className="icon">✉️</div><div><div className="label">Email</div><div className="value"><a href="mailto:support@sproutgardenlearning.com">support@sproutgardenlearning.com</a></div></div></div>
            <div className="loc-item"><div className="icon">🕐</div><div><div className="label">Trial Class</div><div className="value">星期一至五 7:00–8:00pm（預約制）</div></div></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container">
        <motion.div initial={{ opacity: 0, scale: .92, filter: 'blur(8px)' }} whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }} viewport={{ once: true }} transition={{ duration: 1, ease: EASE }}>
          <h2>想你小朋友真正進步？</h2>
          <p>免費試堂，親身感受。星期一至五 7:00–8:00pm，WhatsApp 預約。</p>
          <a href={WA} target="_blank" rel="noopener" className="btn-white-lg">免費試堂 →</a>
        </motion.div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main>
      <Hero />
      <ProgressTracking />
      <Subjects />
      <ExamKing />
      <Timetable />
      <Location />
      <FinalCTA />
    </main>
  )
}
