import { useState } from 'react';
import axios from 'axios';

import Spinner from '../../../../components/Spinner/Spinner';
import validation from '../../../../utils/validation';

import styles from './VinForm.module.scss';

const VinForm = ({ setData, value, setValue, loading, setLoading }) => {
  const [recentQueries, setRecentQueries] = useState(() => {
    const storedQueries = localStorage.getItem('updatedQueries');
    return storedQueries ? JSON.parse(storedQueries) : [];
  });
  const [messageState, setMessageState] = useState({
    error: '',
    success: '',
  });

  const handleChange = ({ target: { value } }) => {
    setValue(value);
    const validationMessage = validation(value);
    setMessageState({ error: validationMessage || '' });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!value) {
      return setMessageState({ error: 'The field cannot be empty' });
    }
    if (messageState.error) return;
    try {
      setLoading(true);
      const {
        data: { Results },
      } = await axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${value}?format=json`);
      setData(Results || []);
      setMessageState({ success: 'Results returned successfully.' });
      setTimeout(() => {
        setMessageState({ success: '' });
      }, 2000);
      setRecentQueries((prevState) => {
        const updatedQueries = [...prevState, { vinValue: value, id: Math.random() }];
        const isValueExists = prevState.find((query) => query.vinValue === value);
        if (isValueExists) {
          return prevState;
        }
        if (updatedQueries.length > 3) {
          updatedQueries.shift();
        }
        localStorage.setItem('updatedQueries', JSON.stringify(updatedQueries));
        return updatedQueries;
      });
      setValue('');
    } catch (error) {
      setMessageState({ error: 'Failed Request' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        className={styles.form_input}
        placeholder="Enter your VIN code"
        onChange={handleChange}
        value={value}
      />
      {loading ? (
        <Spinner />
      ) : (
        <button type="submit" className={styles.form_button}>
          Check VIN
        </button>
      )}
      {messageState.error && <span className={`${styles.helper_text} ${styles.error}`}>{messageState.error}</span>}
      {messageState.success && (
        <span className={`${styles.helper_text} ${styles.success}`}>{messageState.success}</span>
      )}
    </form>
  );
};

export default VinForm;
