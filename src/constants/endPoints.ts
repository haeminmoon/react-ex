export const endpoint =
  process.env.REACT_APP_DEPLOY_ENV === 'production'
    ? 'https://production'
    : 'https://staging';
