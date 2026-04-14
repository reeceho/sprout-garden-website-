import { motion } from 'framer-motion'

const E = [.16, 1, .3, 1]

export default function About() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: .8, ease: E }}>
            關於小芽菜
          </motion.h1>
          <motion.div className="sub" initial={{ opacity: 0 }} animate={{ opacity: .7 }} transition={{ delay: .3 }}>
            About Sprout Garden Learning
          </motion.div>
        </div>
      </section>
      <div className="prose">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .7, ease: E }}>
          <h2>我哋係邊個</h2>
          <p>小芽菜研習中心位於屯門，由 UCL 畢業嘅創辦人創立，專注小學英文、中文同數學。我哋唔信「人多就教得好」呢套 — 所以堅持每班最多四位學生，每個小朋友都有人睇住、有人講解、有人跟進。</p>
          <p>我哋相信「練習」唔係胡亂操卷 — 而係跟住小朋友嘅程度，針對佢嘅弱點，做啱嘅練習。練得有方向，先有進步。</p>

          <h2>我哋嘅教學理念</h2>
          <p>每堂都有清晰嘅學習目標。每堂結束都會記錄小朋友學到咗咩、邊度仲要加強。家長唔使等到測驗考試先知有問題 — 你隨時都見到佢嘅進度同弱項，清清楚楚。</p>
          <p>練習要跟住程度，唔係跟住補充練習嘅目錄。所以我哋自家開發咗 <a href="https://www.examkinghk.com" target="_blank" rel="noopener" style={{ color: 'var(--moss-deep)', fontWeight: 600 }}>考得好 Exam King</a> — 老師按學生嘅進度，幾秒鐘就出到一份貼合佢嘅練習卷。屋企做、堂上講解，環環相扣，每一張紙都有用。</p>

          <h2>點解揀我哋</h2>
          <p>好多補習社話「小班教學」，實際坐十幾個學生，老師根本顧唔晒。我哋每班真正最多四位學生 — 唔係宣傳，係寫入時間表。</p>
          <p>每堂之後有學習報告，配合自家研發嘅出卷工具，學校進度緊追，弱項即時補強。屯門地舖、近港鐵站，接送方便。</p>

          <h2>中心位置</h2>
          <p>屯門新合里3號 匯賢一號 801室。鄰近屯門站，步行約 5 分鐘。</p>
          <p>想了解更多？直接 WhatsApp 我哋：<a href="https://wa.me/85244270658" target="_blank" rel="noopener" style={{ color: 'var(--green)', fontWeight: 600 }}>+852 4427 0658</a></p>
        </motion.div>
      </div>
    </main>
  )
}
