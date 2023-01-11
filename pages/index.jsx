import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";

const Home = ({ exploreData, cardsData }) => {
  return (
    <div className="">
      <Head>
        <title>Brads b'n'b</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:pz-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const exploreData = await fetch(
    "https://api.npoint.io/3cf3cddca1e3d13e5c2d"
  ).then((res) => res.json());

  const cardsData = await fetch(
    "https://api.npoint.io/ac6acae116e235e2fc02"
  ).then((res) => res.json());

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
