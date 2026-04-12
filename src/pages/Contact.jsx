import { motion } from 'framer-motion'

const E = [.16, 1, .3, 1]
const WA = 'https://wa.me/85244270658?text=%E4%BD%A0%E5%A5%BD%EF%BC%81%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84%E5%85%8D%E8%B2%BB%E8%A9%A6%E5%A0%82'

export default function Contact() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: .8, ease: E }}>聯絡我哋</motion.h1>
          <motion.div className="sub" initial={{ opacity: 0 }} animate={{ opacity: .7 }} transition={{ delay: .3 }}>Contact Us</motion.div>
        </div>
      </section>
      <div className="prose" style={{ maxWidth: 900 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .7, ease: E }}>
          <div className="loc-grid" style={{ marginBottom: 48 }}>
            <div className="loc-map" style={{ height: 360, borderRadius: 16, overflow: 'hidden', border: '1px solid var(--line)' }}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.8!2d113.972!3d22.390!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDIzJzI2LjkiTiAxMTPCsDU4JzIxLjYiRQ!5e0!3m2!1sen!2shk!4v1" style={{ width: '100%', height: '100%', border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Map" />
            </div>
            <div className="loc-info">
              <div className="loc-item"><div className="icon">📍</div><div><div className="label">地址</div><div className="value">屯門新合里3號<br />匯賢一號 801室</div></div></div>
              <div className="loc-item"><div className="icon">💬</div><div><div className="label">WhatsApp</div><div className="value"><a href="https://wa.me/85244270658" target="_blank" rel="noopener">+852 4427 0658</a></div></div></div>
              <div className="loc-item"><div className="icon">✉️</div><div><div className="label">Email</div><div className="value"><a href="mailto:support@sproutgardenlearning.com">support@sproutgardenlearning.com</a></div></div></div>
              <div className="loc-item"><div className="icon">🕐</div><div><div className="label">免費試堂</div><div className="value">星期一至五 7:00–8:00pm<br />WhatsApp 預約</div></div></div>
            </div>
          </div>

          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <h2 style={{ marginBottom: 16 }}>想預約免費試堂？</h2>
            <p style={{ marginBottom: 28 }}>直接 WhatsApp 我哋就得，唔使填表。</p>
            <a href={WA} target="_blank" rel="noopener" className="btn-green" style={{ fontSize: 16 }}>WhatsApp 預約試堂 →</a>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
