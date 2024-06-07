import styles from './page.module.css';
import Table from './DataTable'
import Appbar from './Appbar'

export default function Home() {
  return (
    <main className={styles.main}>
      <Appbar label="Digital@Femsa"/>
      <Table />
    </main>
  );
}
