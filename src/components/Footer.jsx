import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="f-brand">
            <div style={{ fontFamily: 'var(--f-zh)', fontSize: 20, fontWeight: 700, letterSpacing: '.02em' }}>小芽菜研習中心</div>
            <p>屯門小學英文、中文、數學補習。1:4 小班教學，每堂追蹤學習表現，幫你小朋友一步步進步。</p>
          </div>
          <div className="f-col">
            <h4>Centre</h4>
            <Link to="/">主頁</Link>
            <Link to="/about">關於我哋</Link>
            <Link to="/courses">課程</Link>
            <Link to="/contact">聯絡</Link>
          </div>
          <div className="f-col">
            <h4>Resources</h4>
            <a href="https://www.examkinghk.com" target="_blank" rel="noopener">考得好 Exam King</a>
            <a href="https://wa.me/85244270658" target="_blank" rel="noopener">WhatsApp</a>
            <a href="mailto:support@sproutgardenlearning.com">Email</a>
          </div>
          <div className="f-col">
            <h4>Legal</h4>
            <a href="https://www.examkinghk.com/privacy.html" target="_blank" rel="noopener">私隱政策</a>
            <a href="https://www.examkinghk.com/terms.html" target="_blank" rel="noopener">使用條款</a>
          </div>
        </div>
        <div className="f-base">
          <span>© 2026 小芽菜研習中心 Sprout Garden Learning Limited · CR 79385649</span>
          <span>匯賢一號 801室, 新合里3號, 屯門</span>
        </div>
      </div>
    </footer>
  )
}
