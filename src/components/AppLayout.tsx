import Header from './Header';
import Menu from './Menu';

type AppLayoutProps = {
  children: React.ReactNode;
};

function AppLayout({ children }: AppLayoutProps) {
  return <div>{children}</div>;
}

type SideProps = {
  children: React.ReactNode;
};

function Side({ children }: SideProps) {
  return <aside>{children}</aside>;
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

AppLayout.Side = Side;
AppLayout.Main = Main;

export default AppLayout;
