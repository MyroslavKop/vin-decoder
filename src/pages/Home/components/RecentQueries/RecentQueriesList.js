import Spinner from '../../../../components/Spinner/Spinner';

import styles from './RecentQueriesList.module.scss';

const RecentQueriesList = ({ setValue, loading }) => {
  const handleClick = (vin) => () => setValue(vin);

  const recentQueries = JSON.parse(localStorage.getItem('updatedQueries'));

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className={styles.queries}>
      <h3 className={styles.title}>Your latest requests</h3>
      <ul className={styles.list}>
        {!recentQueries && <li>No requests</li>}
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
