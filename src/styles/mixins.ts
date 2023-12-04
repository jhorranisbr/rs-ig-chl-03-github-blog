import { css } from 'styled-components'

export const mixins = {
  fonts: {
    titleL: css`
      font-family: 'Nunito', sans-serif;
      font-size: 1.5rem;
      line-height: 1.3;
      font-weight: 800;
    `,

    titleM: css`
      font-family: 'Nunito', sans-serif;
      font-size: 1.25rem;
      line-height: 1.6;
      font-weight: 800;
    `,

    titleS: css`
      font-family: 'Nunito', sans-serif;
      font-size: 1.125rem;
      line-height: 1.6;
      font-weight: 800;
    `,

    textM: css`
      font-family: 'Nunito', sans-serif;
      font-size: 1rem;
      line-height: 1.6;
      font-weight: 400;
    `,

    textS: css`
      font-family: 'Nunito', sans-serif;
      font-size: 0.875rem;
      line-height: 1.3;
      font-weight: 400;
    `,
  },

  components: {
    link: css`
      font-family: 'Nunito', sans-serif;
      font-size: 0.75rem;
      font-weight: 800;
    `,
  },
}
