/**
 * 現在の日付を 'MM/DD' 形式の文字列で返す関数
 * @returns {string} 'MM/DD' 形式の文字列
 */
export function getFormattedToday(): string {
  const today = new Date()
  const month = today.getMonth() + 1
  const date = today.getDate()
  return `${month.toString().padStart(2, '0')}/${date.toString().padStart(2, '0')}`
}
