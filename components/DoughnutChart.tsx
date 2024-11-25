'use client'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend)


const DoughnutChart = ({accounts}: DoughnutChartProps) => {
  return (
    <div>
      <Doughnut data={[]} />
    </div>
  )
}

export default DoughnutChart