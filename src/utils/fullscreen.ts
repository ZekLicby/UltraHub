export function enterFullscreen(): void {
  if (document.fullscreenElement || !document.documentElement.requestFullscreen) return
  document.documentElement.requestFullscreen().catch(() => {})
}

export function exitFullscreen(): void {
  if (!document.fullscreenElement) return
  document.exitFullscreen().catch(() => {})
}
