import Image from 'next/image';

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Embrace Pride,
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Connect with Love and Equality.</span>
    </h1>
    <p className='desc text-center'>
      PrideConnect aims to create a safe and welcoming space for the LGBTQ+ community and allies.
    </p>

    <h2 className='head_text text-center'>
      <br className='max-md:hidden' />
      <span className='blue_gradient text-center'> Some Facts About Pride</span>
    </h2>

    
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
      <div className='bg-white rounded-lg shadow p-4'>
        <Image src='/1.png' alt='Pride Month Facts' width={400} height={300} />
        <h3 className='text-lg font-semibold mt-4'>Facts about Pride Month</h3>
        <p className='text-gray-500 mt-2'>
          The Month of June was chosen for LGBT pride month.
        </p>
      </div>

      <div className='bg-white rounded-lg shadow p-4'>
        <Image src='/2.png' alt='Support for the Pride Community' width={400} height={300} />
        <h3 className='text-lg font-semibold mt-4'>StoneWall Riots</h3>
        <p className='text-gray-500 mt-2'>
          A series of violent demonstrations by members of the gay community in the US against a police raid on June 28, 1969, at the Stonewall Inn in New York City.
        </p>
      </div>

      <div className='bg-white rounded-lg shadow p-4'>
        <Image src='/3.png' alt='Pride Statistics' width={400} height={300} />
        <h3 className='text-lg font-semibold mt-4'>Harvey Milk</h3>
        <p className='text-gray-500 mt-2'>
          Harvey Milk became the first American politician who became the first openly gay person to be elected to public office in California.
        </p>
      </div>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
      <div className='bg-white rounded-lg shadow p-4'>
        <Image src='/4.png' alt='Pride Month Facts' width={400} height={300} />
        <h3 className='text-lg font-semibold mt-4'>Pride Original Flag</h3>
        <p className='text-gray-500 mt-2'>
          The original LGBT flag was hand-dyed and had eight symbolic colors.
        </p>
      </div>

      <div className='bg-white rounded-lg shadow p-4'>
        <Image src='/5.png' alt='Support for the Pride Community' width={400} height={300} />
        <h3 className='text-lg font-semibold mt-4'>Pride Updated Flag</h3>
        <p className='text-gray-500 mt-2'>
          Of the original eight colors, hot pink and turquoise were later dropped due to production constraints and the need for design symmetry.
        </p>
      </div>

      <div className='bg-white rounded-lg shadow p-4'>
        <Image src='/6.png' alt='Pride Statistics' width={400} height={300} />
        <h3 className='text-lg font-semibold mt-4'>Oldest LGBT Organization</h3>
        <p className='text-gray-500 mt-2'>
          The oldest surviving LGBT organization in the world is the Netherlands' 1946 founded Centre for Culture and Leisure.
        </p>
      </div>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
      <div className='bg-white rounded-lg shadow p-4'>
        <Image src='/7.png' alt='Pride Month Facts' width={400} height={300} />
        <h3 className='text-lg font-semibold mt-4'>World Largest Parade</h3>
        <p className='text-gray-500 mt-2'>
          Pride Month is celebrated in June to honor the LGBTQ+ community and commemorate the Stonewall Riots in 1969.
        </p>
      </div>

      <div className='bg-white rounded-lg shadow p-4'>
        <Image src='/8.png' alt='Support for the Pride Community' width={400} height={300} />
        <h3 className='text-lg font-semibold mt-4'>Giant Flag</h3>
        <p className='text-gray-500 mt-2'>
          PrideConnect provides a platform for individuals to show support, share resources, and foster a sense of community.
        </p>
      </div>

      <div className='bg-white rounded-lg shadow p-4'>
        <Image src='/9.png' alt='Pride Statistics' width={400} height={300} />
        <h3 className='text-lg font-semibold mt-4'>India's First Pride Parade</h3>
        <p className='text-gray-500 mt-2'>
          Did you know that 53% of LGBTQ+ individuals report facing discrimination in the workplace?
        </p>
      </div>
    </div>

  </section>
);

export default Home;
