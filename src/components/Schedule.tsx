import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Dropdown from './Dropdown';

interface ScheduleItem {
  class: string | JSX.Element[];
  time: string;
  days: string[];
  batch?: string | null;
}

const scheduleData: ScheduleItem[] = [
  { class: 'Yoga', time: '7:00 AM - 8:00 AM', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] },
  { class: 'Yoga', time: '8:00 AM - 9:00 AM', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] },
  { class: 'Kickboxing', time: '8:00 PM - 9:00 PM', days: ['Monday', 'Wednesday', 'Friday'], batch: 'Batch 1' },
  { class: 'Kickboxing', time: '9:00 PM - 10:00 PM', days: ['Monday', 'Wednesday', 'Friday'], batch: 'Batch 2' },
  { class: 'Kickboxing', time: '7:00 AM - 8:00 AM', days: ['Saturday', 'Sunday'], batch: 'Morning' },
  { class: 'Kickboxing', time: '8:00 AM - 9:00 AM', days: ['Saturday', 'Sunday'], batch: 'Morning' },
  { class: 'Kids Karate', time: '7:00 PM - 8:00 PM', days: ['Monday', 'Wednesday', 'Friday'], batch: 'Batch 1' },
  { class: 'KidsKarate', time: '7:00 PM - 8:00 PM', days: ['Thursday', 'Saturday', 'Sunday'], batch: 'Batch 2' },
  { class: 'Karate', time: '8:00 PM - 9:00 PM', days: ['Thursday', 'Saturday', 'Sunday'], batch: 'Adults' },
  { class: 'MMA', time: '9:00 PM - 10:00 PM', days: ['Wednesday', 'Friday'], batch: 'Striking' },
  { class: 'MMA', time: '10:00 AM - 11:00 AM', days: ['Sunday'], batch: 'Grappling' },
];

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const timeSlots = ['7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM'];

interface Branch {
  id: string;
  name: string;
}

const branches: Branch[] = [
  { id: 'orbit', name: 'Orbit Commercial, Khadakpada' },
  { id: 'vedant', name: 'Vedant Palacia, Vasant Valley' },
];

const Schedule: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<ScheduleItem | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedDay, setSelectedDay] = useState<string>('');
  const [selectedBranch, setSelectedBranch] = useState<string>(branches[0].id);

  const getClassForTimeAndDay = (time: string, day: string) => {
    if (selectedBranch === 'vedant') {
      // Return an empty array for Vedant Palacia branch
      return [];
    }

    // Existing logic for Orbit Commercial branch
    const classes = scheduleData.filter(item => 
      item.time.startsWith(time) && item.days.includes(day)
    );

    if (classes.length > 1) {
      return [{
        class: classes.map((c, index) => (
          <React.Fragment key={index}>
            <span className="font-bold">{c.class}</span>
            {c.batch && <span className="text-white font-light"> {c.batch}</span>}
            {index < classes.length - 1 && <span className="text-white font-normal"> / </span>}
          </React.Fragment>
        )),
        time: classes[0].time,
        days: classes[0].days,
        batch: null
      }];
    }

    return classes;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const renderMobileView = () => (
    <div className="space-y-4">
      {daysOfWeek.map(day => (
        <div key={day} className="bg-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-bold mb-2 text-white">{day}</h3>
          {timeSlots.map(time => {
            const classes = getClassForTimeAndDay(time, day);
            return classes.map((item, index) => (
              <div key={index} className="bg-blue-500 bg-opacity-75 rounded p-2 mb-2">
                <p className="font-bold text-white">{item.class}</p>
                <p className="text-white">{item.time}</p>
                {item.batch && <p className="text-white">Batch: {item.batch}</p>}
              </div>
            ));
          })}
        </div>
      ))}
    </div>
  );

  const renderDesktopView = () => (
    <div className="grid grid-cols-8 gap-2">
      <div className="sticky left-0 bg-gray-800 z-10"></div>
      {daysOfWeek.map(day => (
        <div key={day} className="text-center font-bold text-white">{day}</div>
      ))}
      {timeSlots.map(time => (
        <React.Fragment key={time}>
          <div className="sticky left-0 bg-gray-800 z-10 text-right pr-2 text-white">{time}</div>
          {daysOfWeek.map(day => (
            <div key={`${day}-${time}`} className="relative h-16 border border-gray-700">
              {getClassForTimeAndDay(time, day).map((item, index) => (
                <motion.div
                  key={`${item.class}-${index}`}
                  className="absolute inset-0 bg-blue-500 bg-opacity-75 rounded p-1 text-xs text-white cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  onMouseEnter={() => setHoveredItem(item)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onMouseMove={handleMouseMove}
                >
                  <div className="font-bold">{item.class}</div>
                  {item.batch && <div className="text-xs">{item.batch}</div>}
                </motion.div>
              ))}
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );

  const branchOptions = branches.map(branch => ({ value: branch.id, label: branch.name }));
  const dayOptions = daysOfWeek.map(day => ({ value: day, label: day }));

  return (
    <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-4 md:p-8 shadow-xl">
      <h1 className="text-3xl font-bold mb-6 text-white">Class Schedule</h1>
      
      {/* Branch selection dropdown */}
      <div className="mb-4">
        <Dropdown 
          options={branchOptions}
          value={selectedBranch}
          onChange={setSelectedBranch}
        />
      </div>

      <h2 className="text-xl font-semibold mb-4 text-blue-300">
        Branch: {branches.find(b => b.id === selectedBranch)?.name}
      </h2>

      {selectedBranch === 'vedant' && (
        <p className="text-white mb-4">Schedule for this branch is coming soon.</p>
      )}

      <div className="md:hidden mb-4">
        <Dropdown 
          options={dayOptions}
          value={selectedDay}
          onChange={setSelectedDay}
          placeholder="All Days"
        />
      </div>

      <div className="overflow-x-auto">
        <div className="hidden md:block">
          {renderDesktopView()}
        </div>
        <div className="md:hidden">
          {selectedDay 
            ? renderMobileView().props.children.find((daySchedule: any) => daySchedule.key === selectedDay)
            : renderMobileView()
          }
        </div>
      </div>

      {hoveredItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed bg-white text-black p-4 rounded-lg shadow-lg z-50"
          style={{
            left: mousePosition.x + 10,
            top: mousePosition.y + 10,
            maxWidth: '200px',
          }}
        >
          <h3 className="font-bold">{hoveredItem.class}</h3>
          <p>{hoveredItem.time}</p>
          {hoveredItem.batch && <p>Batch: {hoveredItem.batch}</p>}
        </motion.div>
      )}
    </div>
  );
};

export default Schedule;