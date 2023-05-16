import removeEmptyFields from '../../../../utils/removeEmptyFields';
import Spinner from '../../../../components/Spinner/Spinner';

import styles from './VINCodeResultsTable.module.scss';

const VINCodeResultsTable = ({ data, loading }) => {
  const filteredData = data ? removeEmptyFields(data) : [];

  if (loading) {
    return <Spinner />;
  }

  return (
    <table>
      <thead>
        <tr className={styles.titles}>
          <th>Variable</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.length > 0 ? (
          filteredData.map(({ Variable, Value }, index) => {
            return (
              <tr className={styles.text} key={index}>
                <td>{Variable}</td>
                <td>{Value}</td>
              </tr>
            );
          })
        ) : (
          <tr className={styles.text}>
            <td>No results</td>
            <td>No results</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default VINCodeResultsTable;
