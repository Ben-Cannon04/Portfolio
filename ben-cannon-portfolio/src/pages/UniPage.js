import { useOutletContext } from 'react-router-dom';
import ComboBox from '../components/ComboBox';
import GridLayout from '../components/GridLayout';
import {
  renderComponent,
  useComponentData,
} from '../services/JsonToComponentConverterService';
import { useState } from 'react';

function UniPage() {
  const [enabled] = useOutletContext();

  const { data, loading, error } = useComponentData('uni-data');
  const [selectedYear, setSelectedYear] = useState('Year 1');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const modulesByYear = data?.modulesByYear;
  const currentModules = Object.keys(modulesByYear).includes(selectedYear)
    ? modulesByYear[selectedYear].map((boxData, index) =>
        renderComponent(boxData, index)
      )
    : [];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-xl mx-auto mb-8">
        <ComboBox
          title="Select University Year"
          options={data?.yearOptions}
          lightTheme={enabled}
          onChange={e => setSelectedYear(e.target.value)}
          value={selectedYear}
        />
      </div>

      <GridLayout
        boxes={currentModules || []}
        lightTheme={enabled}
        horizontalBoxes={currentModules.map((_, i) => i)}
        verticalBoxes={[]}
      />
    </div>
  );
}

export default UniPage;
