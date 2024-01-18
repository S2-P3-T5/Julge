import { dehydrate, QueryClient } from "@tanstack/react-query";

export const getServerSideProps = () => {
  const queryClient = new QueryClient();

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default function Home() {
  return <main>안녕하세요</main>;
}
