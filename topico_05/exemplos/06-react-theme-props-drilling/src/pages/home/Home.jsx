import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg';
import ContainerMain from '../../components/ContainerMain';

export function Home({ count, setCount,theme }) {
  console.log(theme);

  return (
    <>
      <main className={theme}>
        <section className={theme}>
          <div>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <ContainerMain count={count} setCount={setCount} theme={theme}/>
        </section>
      </main>
    </>
  );
}
