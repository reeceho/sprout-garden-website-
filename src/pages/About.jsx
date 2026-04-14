import { motion } from 'framer-motion'

const E = [.16, 1, .3, 1]

export default function About() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: .8, ease: E }}>
            做家長，已經好攰
          </motion.h1>
          <motion.div className="sub" initial={{ opacity: 0 }} animate={{ opacity: .7 }} transition={{ delay: .3 }}>
            Let us carry the academic part — so you can just be Mum &amp; Dad.
          </motion.div>
        </div>
      </section>
      <div className="prose">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .7, ease: E }}>
          <h2>呢啲場景，係咪好熟悉？</h2>
          <p>小朋友默書又唔合格。功課做到夜深仲未掂。補充練習買咗一本又一本，每本只用得三四版。Tenses、量詞、應用題你都唔記得點教，就算識教，講完佢就嗌「你話我蠢」。學校通告又話下個月有評估，但你唔知佢實際程度去到邊。</p>
          <p>等到測驗成績單拎返嚟，先知道有問題 — 但已經遲咗。然後又開始搵補習、買練習、責備自己冇盡力。</p>
          <p>我哋知道呢種感覺。<strong>所以小芽菜唔係另一間補習社 — 我哋係幫家長承擔學業壓力嘅一隊人。</strong></p>

          <h2>我哋幫你解決乜</h2>
          <ul>
            <li><strong>成績唔使再估估下。</strong>每堂之後即時學習報告，邊科強、邊度跌、要點補，清清楚楚。家長一望就知。</li>
            <li><strong>唔使再買補充練習。</strong>我哋自家研發嘅 <a href="https://www.examkinghk.com" target="_blank" rel="noopener" style={{ color: 'var(--moss-deep)', fontWeight: 600 }}>考得好 Exam King</a>，老師按小朋友嘅程度，幾秒鐘就出到一份貼合學校單元嘅練習卷。每一張紙都有用。</li>
            <li><strong>唔使再陪做功課做到嗌交。</strong>功課班星期一至五 4–6pm，獨立課室，老師全程睇住。返到屋企可以食飯傾偈，唔再為功課嗌交。</li>
            <li><strong>唔使等到考試先知有問題。</strong>我哋每堂跟進弱項，當堂補強，唔等到拎成績單先發現追唔上。</li>
            <li><strong>唔使逼小朋友坐入幾十人嘅大班。</strong>我哋每班真正最多 4 個學生 — 唔係宣傳，係寫入時間表。</li>
          </ul>

          <h2>我哋係邊個</h2>
          <p>小芽菜研習中心 2024 年喺屯門開業，由 UCL 畢業嘅創辦人創立。我哋專注小學英文、中文、數學 — 由 P1 到 P6，由打底到 TSA 預備。</p>
          <p>我哋唔信「人多就教得好」。每班 1:4，每個小朋友都有人睇住、有人講解、有人跟進。我哋亦唔信「補習就係多操幾本練習」 — 我哋信跟住程度、針對弱項，做啱嘅練習。</p>
          <p>所以我哋做咗兩樣嘢：(1) 每堂後即時學習報告，俾家長隨時睇到進度；(2) 自家開發出卷工具，老師可以幾秒出到一份完全貼合學生程度嘅練習卷。兩樣加埋，就係小芽菜嘅特別之處。</p>

          <h2>家長真實感受</h2>
          <p style={{ fontFamily: 'var(--f-hand)', fontSize: 22, color: 'var(--ink-strong)', lineHeight: 1.55, paddingLeft: 24, borderLeft: '3px solid var(--rose)', marginTop: 18 }}>「個女由 P3 開頭英文默書 50 幾分，跟咗小芽菜半年，上次默書攞咗 88 分。而家會自己拎本書出嚟讀，唔再驚英文堂。睇住佢一步步進步，先至覺得呢個錢花得最值。」<br /><span style={{ fontSize: 16, color: 'var(--ink-soft)', display: 'block', marginTop: 6 }}>— P3 學生家長 · 屯門</span></p>
          <p style={{ fontFamily: 'var(--f-hand)', fontSize: 22, color: 'var(--ink-strong)', lineHeight: 1.55, paddingLeft: 24, borderLeft: '3px solid var(--moss)', marginTop: 22 }}>「個仔之前數學成績一直 60 分上下，跟咗三個月，上次測驗考到 92 分。佢自己都話：『原來我做得到。』呢句嘢值返晒。」<br /><span style={{ fontSize: 16, color: 'var(--ink-soft)', display: 'block', marginTop: 6 }}>— P5 學生家長 · 屯門</span></p>

          <h2>位置同預約</h2>
          <p>屯門新合里3號 匯賢一號 801室。鄰近屯門站，步行約 5 分鐘。</p>
          <p>想試一堂？直接 WhatsApp <a href="https://wa.me/85244270658" target="_blank" rel="noopener" style={{ color: 'var(--moss-deep)', fontWeight: 600 }}>+852 4427 0658</a> — 第一堂免費，唔啱可以隨時走，零壓力。</p>
        </motion.div>
      </div>
    </main>
  )
}
