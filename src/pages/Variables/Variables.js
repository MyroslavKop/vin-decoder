import VariablesTable from './components/VariablesTable/VariablesTable';

import styles from './Variables.module.scss';

const Variables = () => {
  return (
    <section className={styles.variables}>
      <h1 className={styles.title}>Variables List</h1>
      <div className={styles.table_container}>
        <VariablesTable />
      </div>
    </section>
  );
};

export default Variables;
