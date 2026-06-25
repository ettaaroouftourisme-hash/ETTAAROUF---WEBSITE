'use client'

import { useState, useCallback } from 'react'
import type { SearchParams, SearchType } from '@/types'

const DEFAULT_SEARCH: SearchParams = {
  type:          'circuit',
  destination:   '',
  origin:        'ALG',
  departureDate: '',
  returnDate:    '',
  adults:        2,
  children:      0,
  infants:       0,
  rooms:         1,
  class:         'economique',
}

export function useSearch() {
  const [params, setParams]   = useState<SearchParams>(DEFAULT_SEARCH)
  const [isLoading, setIsLoading] = useState(false)

  const setType = useCallback((type: SearchType) => {
    setParams(prev => ({ ...prev, type }))
  }, [])

  const updateParam = useCallback(
    <K extends keyof SearchParams>(key: K, value: SearchParams[K]) => {
      setParams(prev => ({ ...prev, [key]: value }))
    },
    []
  )

  const handleSearch = useCallback(async () => {
    setIsLoading(true)
    try {
      // Construction de l'URL de recherche selon le type
      const searchUrl = buildSearchUrl(params)
      window.location.href = searchUrl
    } finally {
      setIsLoading(false)
    }
  }, [params])

  return { params, setType, updateParam, handleSearch, isLoading }
}

function buildSearchUrl(params: SearchParams): string {
  const query = new URLSearchParams()
  Object.entries(params).forEach(([k, v]) => {
    if (v !== '' && v !== undefined) query.set(k, String(v))
  })

  const routes: Record<SearchType, string> = {
    vol:     '/vols',
    hotel:   '/hotels',
    circuit: '/voyages',
    omra:    '/omra',
  }

  return `${routes[params.type]}?${query.toString()}`
}
