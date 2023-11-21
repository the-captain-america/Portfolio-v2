import styled, { css } from 'styled-components'

const sizes = {
  xs: '(min-width: 480px)',
}

const media = {
  xs: (...args) => css(...args),
  sm: (...args) => css(...args),
  lg: (...args) => css(...args),
}

const SomeDiv = styled.div`
  ${media.xs};
  ${media.sm};
  ${media.lg};
`

export { SomeDiv }

console.log(media.xs('bacgkround: red', 'b', 'c'))
// bacgkround: red
