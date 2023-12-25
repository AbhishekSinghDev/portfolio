import "@styles/globals.css";
import Nav from "@components/Nav";

const metadata = {
  title: "Abhishek Singh",
  description:
    "Abhishek Singh's portfolio which contains all the projects and tech skills he have",
};

const layout = ({ children }) => {
  return (
    <html>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
};

export { metadata };
export default layout;
