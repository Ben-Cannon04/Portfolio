import { useOutletContext } from 'react-router-dom';
import {
  useComponentData,
} from '../services/JsonToComponentConverterService';
import Loading from '../components/Loading';
import BackButton from '../components/BackButton';

function ProjectsPage() {
  const [isDarkMode] = useOutletContext();

  const { loading, error } = useComponentData('work-data');

  return (
    <Loading loading={loading} error={error} isDarkMode={isDarkMode}>
      <div className="absolute sm:top-10 sm:left-10 top-5 left-5">
        <BackButton isDarkMode={isDarkMode} />
      </div>


    </Loading>
  );
}

export default ProjectsPage;
