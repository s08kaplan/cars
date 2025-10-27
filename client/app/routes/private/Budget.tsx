import { useQuery } from '@tanstack/react-query'
import React from 'react'
import AreaChart from 'src/components/Charts/AreaChart'
import BarChart from 'src/components/Charts/BarChart'
import LineChart from 'src/components/Charts/LineChart'
import PieChart from 'src/components/Charts/PieChart'
import MyTable from 'src/components/Table/MyTable'
import { getBudgetData } from 'src/helpers/functions'

const Budget = () => {
    const {
    data: budget,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["budget"],
    queryFn: () => getBudgetData(),
    staleTime: 10 * 60 * 1000,
    //cacheTime: 30 * 60 * 1000,
  });
  console.log("budget data: ", budget?.data)
  return (
    <section>Budget
    <div>
      <BarChart/>
    </div>
    <div>
      <AreaChart/>
    </div>
    <div>
      <LineChart/>
    </div>
    <div>
      <PieChart/>
    </div>
    </section>
  )
}

export default Budget