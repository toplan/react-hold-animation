import HoC from './HoC'

export default function (propsOrMode) {
  return function wrap(Placeholder) {
    return HoC(Placeholder, propsOrMode)
  }
}
