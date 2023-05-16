import styles from './Container.module.scss';

const Container = ({ children }) => <main className={styles.container}>{children}</main>;

export default Container;
