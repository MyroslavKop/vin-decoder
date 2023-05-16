import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Spinner from '../../../../components/Spinner/Spinner';
import parseHTML from '../../../../utils/parseHTML';

import styles from './VariablesTable.module.scss';

const VariablesTable = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const {
          data: { Results },
        } = await axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json`);
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

  return (
    <table>
      <thead>
        <tr className={styles.titles}>
          <th>Name</th>
          <th>Description</th>
          <th>Show more</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map(({ Description, Name, ID }) => {
            return (
              <tr key={ID} className={styles.text}>
                <td>{Name}</td>
                <td dangerouslySetInnerHTML={{ __html: parseHTML(Description) }} />
                <td>
                  <div className={styles.show_more}>
                    <Link to={`${ID}`}>MORE</Link>
                  </div>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default VariablesTable;
