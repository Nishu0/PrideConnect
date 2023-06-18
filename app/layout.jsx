import "@/styles/globals.css";
import Nav from "@/components/Nav";
import Provider from "@/components/Provider";
import Footer from "@/components/Footer";

export const metadata = {
  title: "PrideConnect",
  description: "Embrace Pride, Connect with Love and Equality.",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}

        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
