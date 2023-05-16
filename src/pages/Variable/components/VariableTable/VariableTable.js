import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Spinner from '../../../../components/Spinner/Spinner';

import styles from './VariableTable.module.scss';

const VariableTable = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { variableId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const {
          data: { Results },
        } = await axios.get(
          `https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablevalueslist/${variableId}?format=json`,
        );
        setData(Results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (data && !data.length) {
    return <div className={styles.no_data}>No results</div>;
  }

  return (
    <table>
      <thead>
        <tr className={styles.titles}>
          <th>Сategory</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map(({ Id, Name, ElementName }) => {
            return (
              <tr key={Id} className={styles.text}>
                <td>{ElementName}</td>
                <td>{Name}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default VariableTable;
