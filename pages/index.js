import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';

export default function HomePage({ events }) {

  return (
    <Layout>
      <h1>Eventos próximos</h1>
    </Layout>
  );
}

// getServerSideProps vai executar toda vez que entrar nesta página, o código é executado do lado do servidor
// getStaticProps executa em build time ( quando executa next build para construir a aplicação para produção, porém funciona no dev server também), bom para quando temos dados que não se alteram constantemente
export async function getStaticProps() {
  const res = await fetch(API_URL + '/api/events');
  const events = await res.json();

  return {
    props: { events },
    revalidate: 1,
  };
}
