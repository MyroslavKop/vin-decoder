import Spinner from '../../../../components/Spinner/Spinner';

import styles from './RecentQueriesList.module.scss';

const RecentQueriesList = ({ setValue, loading, recentQueries }) => {
  const handleClick = (vin) => () => setValue(vin);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className={styles.queries}>
      <h3 className={styles.title}>Your latest requests</h3>
      <ul className={styles.list}>
        {!recentQueries.length && <li>No requests</li>}
        {recentQueries &&
          recentQueries.map(({ id, vinValue }) => {
            return (
              <li key={id} onClick={handleClick(vinValue)}>
                {vinValue}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default RecentQueriesList;
