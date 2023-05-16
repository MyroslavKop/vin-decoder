import { useNavigate } from 'react-router-dom';

import VariableTable from './components/VariableTable/VariableTable';

import styles from './Variable.module.scss';

const Variable = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <section className={styles.variable}>
      <div onClick={goBack} className={styles.go_back}>
        GO BACK
      </div>
      <div className={styles.table_container}>
        <VariableTable />
      </div>
    </section>
  );
};

export default Variable;
