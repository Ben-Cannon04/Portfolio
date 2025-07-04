import { useOutletContext } from 'react-router-dom';
import {
  renderComponent,
  useComponentData,
} from '../services/JsonToComponentConverterService';
import GridLayout from '../components/GridLayout';

function HomePage() {
  const [enabled, setEnabled] = useOutletContext();
  const { data, loading, error } = useComponentData('home-page-data');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const boxes = data?.boxes.map((boxData, index) =>
    renderComponent(boxData, index, { enabled, setEnabled })
  );

  return (
    <div>{boxes && <GridLayout boxes={boxes} lightTheme={enabled} />}</div>
  );
}

export default HomePage;
