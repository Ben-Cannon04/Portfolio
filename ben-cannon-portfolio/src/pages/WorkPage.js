import { useOutletContext } from 'react-router-dom';
import GridLayout from '../components/GridLayout';
import {
  renderComponent,
  useComponentData,
} from '../services/JsonToComponentConverterService';

function WorkPage() {
  const [enabled] = useOutletContext();

  const { data, loading, error } = useComponentData('work-data');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const boxes = data?.boxes.map((boxData, index) =>
    renderComponent(boxData, index, { enabled })
  );
  return (
    <div>
      {data && (
        <GridLayout
          boxes={boxes}
          lightTheme={enabled}
          horizontalBoxes={[1, 2, 3, 4, 5, 6, 7]}
          verticalBoxes={[0]}
        />
      )}
    </div>
  );
}

export default WorkPage;
