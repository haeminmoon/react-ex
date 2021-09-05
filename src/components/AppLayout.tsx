import Header from './Header';
import Menu from './Menu';

type AppLayoutProps = {
  children: React.ReactNode;
};

function AppLayout({ children }: AppLayoutProps) {
  return <div>{children}</div>;
}

type MainProps = {
  children: React.ReactNode;
};

function Main({ children }: MainProps) {
  return (
    <main>
      <Header />
      {children}
      <Menu />
    </main>
  );
}

AppLayout.Main = Main;

export default AppLayout;
