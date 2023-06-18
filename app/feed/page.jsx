import Feed from "@/components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
    Share your Thoughts.
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Spread Love</span>
    </h1>
    <Feed />
  </section>
);

export default Home;
