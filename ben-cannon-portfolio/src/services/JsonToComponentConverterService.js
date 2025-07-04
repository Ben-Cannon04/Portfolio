import SkillsBox from '../components/SkillsBox';
import DescriptionBox from '../components/DescriptionBox';
import IconBox from '../components/IconBox';
import DarkModeBox from '../components/DarkModeBox';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState, useEffect } from 'react';

const iconMap = {
  LinkedIn: <LinkedInIcon fontSize="inherit" />,
  GitHub: <GitHubIcon fontSize="inherit" />,
};

export const renderComponent = (data, index, additionalProps = {}) => {
  if (!data || typeof data !== 'object') {
    return null;
  }

  const commonProps = { ...additionalProps };

  switch (data.type) {
    case 'SkillsBox':
      return (
        <SkillsBox
          {...commonProps}
          title={data.title}
          skills={data.skills}
          content={data.content}
          key={index}
        />
      );

    case 'DescriptionBox':
      return (
        <DescriptionBox
          {...commonProps}
          title={data.title}
          content={data.content}
          link={data.link}
        />
      );

    case 'IconBox':
      return (
        <IconBox
          {...commonProps}
          link={data.link}
          icon={iconMap[data.icon] || data.icon}
        />
      );

    case 'DarkModeBox':
      return (
        <DarkModeBox
          {...commonProps}
          enabled={additionalProps.enabled}
          setEnabled={additionalProps.setEnabled}
        />
      );

    default:
      return null;
  }
};

export const useComponentData = dataPath => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await import(`../data/${dataPath}.json`);

        setData(response.default);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [dataPath]);

  return { data, loading, error };
};
