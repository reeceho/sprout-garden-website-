import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'

export default function TiltCard({ children, className = '', max = 6, ...rest }) {
  const [t, setT] = useState({ rx: 0, ry: 0 })
  const onMove = useCallback((e) => {
    const r = e.currentTarget.getBoundingClientRect()
    setT({ rx: -((e.clientY - r.top) / r.height - .5) * max, ry: ((e.clientX - r.left) / r.width - .5) * max })
  }, [max])
  const onLeave = useCallback(() => setT({ rx: 0, ry: 0 }), [])

  return (
    <div style={{ perspective: 1200 }}>
      <motion.div className={className} onMouseMove={onMove} onMouseLeave={onLeave}
        animate={{ rotateX: t.rx, rotateY: t.ry }}
        transition={{ type: 'spring', damping: 22, stiffness: 220, mass: .6 }}
        style={{ transformStyle: 'preserve-3d' }} {...rest}>
        {children}
      </motion.div>
    </div>
  )
}
