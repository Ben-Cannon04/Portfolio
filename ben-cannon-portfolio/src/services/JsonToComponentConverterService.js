import SkillsBox from '../components/SkillsBox';
import DescriptionBox from '../components/DescriptionBox';
import IconBox from '../components/IconBox';
import DarkModeBox from '../components/DarkModeBox';
import { useState, useEffect } from 'react';
import GradientBox from '../components/GradientBox';

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

    case 'GradientBox':
      return (
        <GradientBox
          {...commonProps}
          title={data.title}
          content={data.content}
          gradientFrom={data.gradientFrom}
          gradientTo={data.gradientTo}
          icon={data.icon}
          link={data.link}
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
          key={index}
        />
      );

    case 'IconBox':
      return (
        <IconBox
          {...commonProps}
          link={data.link}
          icon={data.icon}
          gradientFrom={data.gradientFrom}
          gradientTo={data.gradientTo}
          key={index}
        />
      );

    case 'DarkModeBox':
      return (
        <DarkModeBox
          {...commonProps}
          enabled={additionalProps.enabled}
          setEnabled={additionalProps.setEnabled}
          key={index}
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
