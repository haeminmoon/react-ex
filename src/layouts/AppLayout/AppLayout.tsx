import Header from '../../components/Header';
import Menu from '../../components/Menu';

type AppLayoutProps = {
  children: React.ReactNode;
};

function AppLayout({ children }: AppLayoutProps) {
  return <>{children}</>;
}

type MainProps = {
  children: React.ReactNode;
};

function Main({ children }: MainProps) {
  return (
    <main className="relative h-full">
      <Header />
      <div className="h-16" />
      {children}
      <div className="h-16 my-1" />
      <Menu />
    </main>
  );
}

AppLayout.Main = Main;

export default AppLayout;
