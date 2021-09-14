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
    <>
      <main>{children}</main>
      <Menu />
    </>
  );
}

AppLayout.Main = Main;

export default AppLayout;
