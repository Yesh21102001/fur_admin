import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff6f61', '#f50057'];

const data = [
  {
    name: 'Chairs',
    Products: 4000,
  },
  {
    name: 'Tabels',
    Products: 3000,
  },
  {
    name: 'Sofa',
    Products: 1500,
  },
  {
    name: 'Dinning Table',
    Products: 1200,
  },
  {
    name: 'Cupboards',
    Products: 2500,
  },
];


const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const MedicalAnalysisChart = () => {
  return (
    <BarChart
      width={1000}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name"  sx={{ fontFamily: "Lexend, serif" }}/>
      <YAxis />
      <Tooltip />
      <Bar dataKey="Products" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }} sx={{ fontFamily: "Lexend, serif" }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Bar>
    </BarChart>
  );
}
export default MedicalAnalysisChart 
