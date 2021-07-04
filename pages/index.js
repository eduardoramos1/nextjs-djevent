import Layout from '@/components/Layout';
import EventItem from '@/components/EventItem';
import Link from 'next/link';

import { API_URL } from '@/config/index';

export default function HomePage({ events }) {

  return (
    <Layout>
      <h1>Eventos próximos</h1>
      {events.length === 0 && <h3>Sem eventos para mostrar</h3> }

      {events.map(evt => (
        <EventItem evt={evt} key={evt.id} />
      ))}

      {events.length > 0 && (
        <Link href="/events">
          <a className="btn-secondary">Ver todos os eventos</a>
        </Link>
      )}
    </Layout>
  );
}

// getServerSideProps vai executar toda vez que entrar nesta página, o código é executado do lado do servidor
// getStaticProps executa em build time ( quando executa next build para construir a aplicação para produção, porém funciona no dev server também), bom para quando temos dados que não se alteram constantemente. Revalidate verifica se houve mudança nos dados a cada x segundos
export async function getStaticProps() {
  const res = await fetch(API_URL + '/api/events');
  const events = await res.json();

  return {
    // mostrar somente 3 eventos na pagina inicial
    props: { events: events.slice(0,3) },
    revalidate: 1,
  };
}
