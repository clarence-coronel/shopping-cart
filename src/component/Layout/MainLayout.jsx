import Navigation from "../Navigation";

function MainLayout({ children }) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
}

export default MainLayout;
