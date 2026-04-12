import { motion } from 'framer-motion'

const E = [.16, 1, .3, 1]

const ENG = [
  { g: 'P1', topics: 'Greetings, pronouns, is/am/are, singular/plural, a/an, imperatives, adjectives' },
  { g: 'P2', topics: 'Prepositions, question words, present continuous, telling time, simple present, must/may' },
  { g: 'P3', topics: 'Prepositions of place/direction, and/but/or, ordinal numbers, comparatives, adverbs of frequency' },
  { g: 'P4', topics: 'Present perfect, connectives, reported speech, modal verbs, relative clauses, passive voice' },
  { g: 'P5', topics: 'Present perfect (already/yet/ever/never), ago/since/for, should/shouldn\'t, past continuous, when/while' },
  { g: 'P6', topics: 'Passive voice, conditional sentences (if/unless), -ed/-ing adjectives, relative clauses (who/which), reported speech' },
]
const CHN = [
  { g: 'P1–P3', topics: '認字、部首、筆順、句子結構、閱讀理解基礎、簡單記敘文' },
  { g: 'P4–P6', topics: '成語、修辭手法、閱讀理解（推論/歸納）、記敘文/議論文/說明文、實用文' },
]
const MATH = [
  { g: 'P1–P2', topics: '加減乘除基礎、圖形認識、量度單位、時間、貨幣、數據處理' },
  { g: 'P3–P4', topics: '分數、小數、面積與周界、容量、多位數運算、圖形對稱' },
  { g: 'P5–P6', topics: '百分比、比例、速率、面積/體積進階、代數思維入門、統計' },
]
const PTH = [
  { g: 'K2–K3', topics: '拼音基礎、聲母韻母、日常會話、兒歌朗讀、聆聽理解' },
  { g: 'P1–P3', topics: '拼音進階、朗讀課文、普通話會話、聆聽及說話練習' },
]

function SubjectBlock({ title, en, levels, color }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .7, ease: E }}>
      <h2 style={{ borderBottom: `2px solid ${color}`, paddingBottom: 12 }}>{title} <span style={{ fontFamily: 'var(--f-en)', fontStyle: 'italic', fontSize: '60%', opacity: .5 }}>{en}</span></h2>
      {levels.map(l => (
        <div className="card" key={l.g}>
          <h3 style={{ color }}>{l.g}</h3>
          <p>{l.topics}</p>
        </div>
      ))}
    </motion.div>
  )
}

export default function Courses() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: .8, ease: E }}>課程</motion.h1>
          <motion.div className="sub" initial={{ opacity: 0 }} animate={{ opacity: .7 }} transition={{ delay: .3 }}>Courses · P1–P6</motion.div>
        </div>
      </section>
      <div className="prose">
        <SubjectBlock title="英文" en="English" levels={ENG} color="var(--accent)" />
        <SubjectBlock title="中文" en="Chinese" levels={CHN} color="var(--green)" />
        <SubjectBlock title="數學" en="Mathematics" levels={MATH} color="#c3943a" />

        <SubjectBlock title="普通話" en="Putonghua" levels={PTH} color="var(--accent)" />

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .7, ease: E }}>
          <h2>功課輔導班</h2>
          <p>星期一至五 4:00–6:00pm，獨立課室。</p>
          <p>功課班唔係補習 — 係一個有人睇住嘅環境，確保你小朋友嘅功課做得齊、做得好。導師會喺旁邊幫手解答問題，但唔會代做。</p>
        </motion.div>
      </div>
    </main>
  )
}
