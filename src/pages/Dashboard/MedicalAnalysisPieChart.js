import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff6f61', '#f50057'];

const data = [
  { name: 'Chairs', value: 4000 },
  { name: 'Tables', value: 3000 },
  { name: 'Sofa', value: 1500 },
  { name: 'Dining Table', value: 1200 },
  { name: 'Cupboards', value: 2500 },
];

// Custom shape function for pie slices (you can create your own unique shape here)
const getPath = (cx, cy, innerRadius, outerRadius, startAngle, endAngle) => {
  return `M${cx},${cy} L${outerRadius * Math.cos(Math.PI * startAngle / 180) + cx},${outerRadius * Math.sin(Math.PI * startAngle / 180) + cy} A${outerRadius},${outerRadius} 0 0,1 ${outerRadius * Math.cos(Math.PI * endAngle / 180) + cx},${outerRadius * Math.sin(Math.PI * endAngle / 180) + cy} Z`;
};

const CustomPieShape = (props) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;
  const path = getPath(cx, cy, innerRadius, outerRadius, startAngle, endAngle);
  return <path d={path} fill={fill} />;
};

const MedicalAnalysisPieChart = () => {
  return (
    <PieChart width={800} height={400}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={150}
        innerRadius={60}
        paddingAngle={5}
        shape={<CustomPieShape />}
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default MedicalAnalysisPieChart;