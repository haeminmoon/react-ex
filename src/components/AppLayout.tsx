import Header from './Header';
import Menu from './Menu';

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
      <Menu />
    </main>
  );
}

AppLayout.Main = Main;

export default AppLayout;
