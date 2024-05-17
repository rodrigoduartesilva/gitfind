import { Header } from '../../components/Header';
import background from '../../assets/img/background.png';
import './styles.css';


function App() {
  return (
    <div className="App">
      <Header />
      <div className='content'>
        <img src={background} className='content__backgroundImg' alt='Background App' />
        <div className='content__info'>
          <div>
            <input name='usuario' placeholder='@username' />
            <button>Buscar</button>
          </div>
          <div className='content__profile'>
            <img src='https://avatars.githubusercontent.com/u/47402277?v=4' className='content__profile__img' alt='Rodrigo Duarte' />
            <div>
              <h3>Rodrigo Duarte</h3>
              <span>@rodrigoduartesilva</span>
              <p>Descrição</p>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default App;
