import { useEffect } from 'react'

const SUFFIX = 'Raihan Sukmana'

export function useTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — ${SUFFIX}` : SUFFIX
    return () => { document.title = SUFFIX }
  }, [title])
}
