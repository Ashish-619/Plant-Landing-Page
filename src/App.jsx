import './App.css'
import Header from './components/header/Header';
import Body1 from './components/body1/Body1';
import Body2 from './components/body2/Body2';
import Body3 from './components/body3/Body3';
import NavButtons from './components/navButtons/NavButtons';
import Body4 from './components/body4/Body4';
import Body5 from './components/body5/Body5';
import Testimonial from './components/testimonial/Testimonial';

function App() {

  const plants = [
    { name: 'Cactus Sam', price: '100' },
    { name: 'Pisum Sativum', price: '200' },
    { name: 'Mini Green', price: '300' },
    { name: 'Cactus Sam', price: '400' },
    { name: 'Rose', price: '500' },
    { name: 'Sunflower', price: '600' },
    { name: 'Jasmin', price: '700' },
    { name: 'Lily', price: '800' }
  ];

  return (
    <div>
      <Header />
      <Body1 />
      <Body2 />
      <Body3 />
      <NavButtons />
      <Body4 plants={plants} />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '1em 0' }}>
        <button style={{
          backgroundColor: 'chocolate',
          color: 'white',
          borderRadius: '2em',
          padding: '1em 2em',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1em',
          fontWeight: 'bold',
          textTransform: 'uppercase'
        }}>Browse More</button>
      </div>
      <Body5 />
      <Testimonial />
    </div>
  )
}

export default App;
