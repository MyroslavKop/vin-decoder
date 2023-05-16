import { useState } from 'react';

import VinForm from './components/VinForm/VinForm';
import RecentQueriesList from './components/RecentQueries/RecentQueriesList';
import VINCodeResultsTable from './components/VINCodeResultsTable/VINCodeResultsTable';

import styles from './Home.module.scss';

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');

  return (
    <main>
      <section className={styles.vin_data}>
        <VinForm setData={setData} value={value} setValue={setValue} loading={loading} setLoading={setLoading} />
        <RecentQueriesList setValue={setValue} loading={loading} />
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
