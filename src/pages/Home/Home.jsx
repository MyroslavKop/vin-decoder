import { useState } from 'react';

import VinForm from './components/VinForm/VinForm';
import RecentQueriesList from './components/RecentQueries/RecentQueriesList';
import VINCodeResultsTable from './components/VINCodeResultsTable/VINCodeResultsTable';

import styles from './Home.module.scss';

const Home = () => {
  const [recentQueries, setRecentQueries] = useState(() => {
    const storedQueries = localStorage.getItem('updatedQueries');
    return storedQueries ? JSON.parse(storedQueries) : [];
  });
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');

  return (
    <main>
      <section className={styles.vin_data}>
        <VinForm
          setData={setData}
          value={value}
          setValue={setValue}
          loading={loading}
          setLoading={setLoading}
          setRecentQueries={setRecentQueries}
        />
        <RecentQueriesList setValue={setValue} loading={loading} recentQueries={recentQueries} />
      </section>
      <section className={styles.vin_table}>
        <div className={styles.vin_table_container}>
          <VINCodeResultsTable data={data} loading={loading} />
        </div>
      </section>
    </main>
  );
};

export default Home;
