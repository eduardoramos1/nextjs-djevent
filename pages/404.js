import { FaExclamationTriangle } from 'react-icons/fa';
import Layout from '../components/Layout';
import styles from '../styles/404.module.css';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <Layout title='Página não encontrada'>
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle /> 404
        </h1>
        <h4>Não foi possível encontrar esta página</h4>
        <Link href='/'>Voltar para homepage</Link>
      </div>
    </Layout>
  );
}
