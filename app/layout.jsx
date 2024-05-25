import "@styles/globals.css";
import Navbar from "@components/Navbar";

export const metadata = {
  tiitle: "mostafa wahid",
  description: "content creator",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradiant" />
        </div>
        <main className="app">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}

export default RootLayout;
