import "@styles/globals.css";
import Nav from "@components/Nav";

const metadata = {
  title: "Abhishek Singh",
  description:
    "Abhishek Singh's portfolio which contains all the projects and tech skills he have",
  icons: {
    icon: "/images/favicon.ico",
  },
};

const layout = ({ children }) => {
  return (
    <html>
      <head>
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
        <link
          rel="shortcut icon"
          href="/images/favicon.ico"
          type="image/x-icon"
        />
      </head>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
};

export { metadata };
export default layout;
