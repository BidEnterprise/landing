import { useEffect, useState } from "react"
import useScrollReveal from "../../hooks/useScrollReveal"

const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0)
  const [ref, isVisible] = useScrollReveal()

  useEffect(() => {
    if (!isVisible) return
    let startTimestamp = null
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) window.requestAnimationFrame(step)
    }
    window.requestAnimationFrame(step)
  }, [end, duration, isVisible])

  return <span ref={ref}>{count.toLocaleString()}</span>
}

export default AnimatedCounter
