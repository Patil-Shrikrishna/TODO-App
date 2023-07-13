import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import randomColor from './randomColor';

export default function Calender() {
  const [value, onChange] = useState(new Date());
  const calColor = randomColor()
  return (
    <div className={`grid place-items-center h-screen font-extrabold`}>
      <Calendar tileClassName={'p-6'} className={`w-2/4 text-2xl  bg-slate-400`} onChange={onChange} value={value} />
    </div>
  );
}