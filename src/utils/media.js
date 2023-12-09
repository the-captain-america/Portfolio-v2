import styled, { css } from 'styled-components'

const sizes = {
  xs: '(min-width: 480px)',
  sm: '(min-width: 748px)',
  md: '(min-width: 1056px)',
}

const media = {
  xs: (...args) => css`
    @media ${sizes.xs} {
      ${css(...args)};
    }
  `,
  sm: (...args) => css`
    @media ${sizes.sm} {
      ${css(...args)};
    }
  `,
  md: (...args) => css`
    @media ${sizes.md} {
      ${css(...args)};
    }
  `,
}

export { media }
