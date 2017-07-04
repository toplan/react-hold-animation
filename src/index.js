import HoC from './HoC'
import Decorator from './Decorator'
import { BLINK, SPREAD, SLIDE } from './modes'
import '../style.css'

// The alias of decorator
const animate = Decorator

HoC.Decorator = Decorator
HoC.animate = animate
HoC.BLINK = BLINK
HoC.SPREAD = SPREAD
HoC.SLIDE = SLIDE

export default HoC

export {
  Decorator,
  animate,
  BLINK,
  SPREAD,
  SLIDE,
}
