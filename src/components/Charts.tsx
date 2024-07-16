import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
  ArcElement,
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

interface BarchartProps{
    horizontal?:boolean;
    data_1: number[];
    data_2: number[];
    title_1: string;
    title_2: string;
    bgcolor_1: string;
    bgcolor_2: string;
    labels?: string[];
}

 export const Barchart = ({horizontal = false,data_1 = [],data_2 = [],title_1,title_2,bgcolor_1,bgcolor_2,labels = months}:BarchartProps) => {
        const options:ChartOptions<"bar"> = {
        responsive: true,
        indexAxis:horizontal?"y":"x",
        plugins: {
          legend: {
            display:true,
          },
          title: {
            display: false,
          },
        },
        scales:{
            y: {
                beginAtZero: true,
                grid:{
                    display:false,
                }
            },
            x: {
                grid:{
                    display:false,
                }
            }
        }
      };
      
        const data:ChartData<"bar",number[],string> = {
        labels,
        datasets: [
          {
            label: title_1,
            data: data_1,
            backgroundColor: bgcolor_1,
            barThickness: "flex", //this is for responsiveness
            barPercentage: 1,
            categoryPercentage: 0.4,
          },
          {
            label: title_2,
            data: data_2,
            backgroundColor: bgcolor_2,
            barThickness: "flex", //this is for responsiveness
            barPercentage: 1,
            categoryPercentage: 0.4,
          },
        ],
      };
      
    return <Bar options={options} data={data} />;
}

interface DoughnutChartProps{
    labels: string[];
    data: number[];
    backgroundColor: string[];
    cutout?: number|string;
    legends?: boolean;
    offset?: number[];
}

export const DoughnutChart = ({
    labels,data,backgroundColor,cutout,legends = true,offset,
}:DoughnutChartProps) => {
    const DoughnutData: ChartData<"doughnut",number[],string> = {
        labels,
        datasets:[{
            data,
            backgroundColor,
            borderWidth: 0,
            offset,
        }]
    }

    const DoughnutOption: ChartOptions<"doughnut"> = {
        responsive:true,
        plugins:{
            legend:{
                display:legends,
                position: 'bottom',
                labels:{
                    padding:40,
                }
            }
        },
        cutout
    }
    
    return <Doughnut data={DoughnutData} options={DoughnutOption}/>
}