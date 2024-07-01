// See https://vueuse.org/shared/useIntervalFn/
export const useIntervalFn = (fn: () => void, timeout: number) => {
  let timer: ReturnType<typeof setInterval> | null = null

  onMounted(() => {
    timer = setInterval(fn, timeout)
  })

  onUnmounted(() => {
    if (timer) {
      clearInterval(timer)
      timer = null
    }
  })
}
