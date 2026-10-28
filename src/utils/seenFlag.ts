export const hasSeen = (key: string): boolean => {
  try {
    return localStorage.getItem(key) === '1'
  } catch {
    return false
  }
}

export const markSeen = (key: string): void => {
  try {
    localStorage.setItem(key, '1')
  } catch {
    /* storage unavailable: the highlight may show again next time */
  }
}
