import Header from '../../components/Header';
import Menu from '../../components/Menu';

type AppLayoutProps = {
  children: React.ReactNode;
};

function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      {children}
      <div id="root-portal"></div>
    </>
  );
}

type MainProps = {
  children: React.ReactNode;
};

function Main({ children }: MainProps) {
  return (
    <main className="relative h-full">
      <Header />
      <div className="h-16"></div>
      {children}
      <div className="h-16 my-1"></div>
      <Menu />
    </main>
  );
}

AppLayout.Main = Main;

export default AppLayout;
