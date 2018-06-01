const isProd = process.env.NODE_ENV === 'production'

const base = isProd ? 'http://zyt76.com' : 'http://localhost:8080'

export default {
  home: `${base}/api/skill.json`
}
