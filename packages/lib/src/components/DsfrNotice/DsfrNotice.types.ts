export type DsfrNoticeProps = {
  title?: string
  desc?: string
  closeable?: boolean
  type?: 'info' | 'warning' | 'alert' | 'weather-orange' | 'weather-red' | 'weather-purple' | 'witness' | 'kidnapping' | 'attack' | 'cyberattack'
}
