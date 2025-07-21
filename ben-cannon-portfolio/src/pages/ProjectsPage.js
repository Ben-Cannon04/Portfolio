import { useOutletContext } from 'react-router-dom';
import GridLayout from '../components/GridLayout';
import {
  renderComponent,
  useComponentData,
} from '../services/JsonToComponentConverterService';
import Loading from '../components/Loading';

function ProjectsPage() {
  const [isDarkMode] = useOutletContext();

  const { data, loading, error } = useComponentData('work-data');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const boxes = data?.boxes.map((boxData, index) =>
    renderComponent(boxData, index, { isDarkMode })
  );

  return (
    <Loading loading={loading} error={error} isDarkMode={isDarkMode}>
      {data && (
        <GridLayout
          boxes={boxes}
          lightTheme={isDarkMode}
          horizontalBoxes={[0, 1]}
          verticalBoxes={[]}
        />
      )}
    </Loading>
  );
}

export default ProjectsPage;
