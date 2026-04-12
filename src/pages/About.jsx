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
          <p>小芽菜研習中心位於屯門，專注小學英文、中文同數學。我哋相信每個小朋友嘅學習步伐都唔同，所以堅持 1:4 小班教學 — 唔係口講，係真正每班最多四個學生。</p>
          <p>中心由 UCL 畢業嘅創辦人創立。佢嘅理念好簡單：補習唔應該只係重複做練習。每堂課都有明確嘅學習目標，每堂結束都會記錄你小朋友學到咗咩、邊度仲要加強。</p>

          <h2>點解揀我哋</h2>
          <p>好多補習中心話自己「小班教學」，但實際坐十幾個學生。我哋每班真正最多四位學生。你嘅小朋友唔會被忽略。</p>
          <p>我哋每堂都記錄學生嘅學習表現。唔係等到考試先知有問題 — 你隨時都可以了解小朋友嘅進度，邊科強、邊科要加強，清清楚楚。</p>

          <h2>教學語言</h2>
          <p>英文課全英語教學。中文課以粵語教授。數學課以粵語配合英文數學詞彙。</p>

          <h2>中心位置</h2>
          <p>屯門新合里3號 匯賢一號 801室。鄰近屯門站，步行約 5 分鐘。</p>
          <p>想了解更多？直接 WhatsApp 我哋：<a href="https://wa.me/85244270658" target="_blank" rel="noopener" style={{ color: 'var(--green)', fontWeight: 600 }}>+852 4427 0658</a></p>
        </motion.div>
      </div>
    </main>
  )
}
