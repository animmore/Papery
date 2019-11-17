import { useMemo } from 'react'

function useFilter(entities: any, regex: string, property: string) {
  function filterData(): any {
    return entities.length
      ? entities.filter(
          (val) =>
            val[property].first.toLowerCase().includes(regex.toLowerCase()) ||
            val[property].last.toLowerCase().includes(regex.toLowerCase()),
        )
      : []
  }

  const filteredData = useMemo(() => {
    return filterData()
  }, [entities, regex, property])

  return filteredData
}

export default useFilter