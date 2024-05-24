import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header/header';
import { Estate } from '../components/Estate/estate';


const path = window.location.pathname;
let apiURL;

if (path === '/dum01.html') {
  apiURL = 'https://apps.kodim.cz/daweb/trening-api/apis/realitka/dum01'
} else if (path === '/dum02.html') {
  apiURL = 'https://apps.kodim.cz/daweb/trening-api/apis/realitka/dum02'
} else if (path === '/dum03.html') {
  apiURL = 'https://apps.kodim.cz/daweb/trening-api/apis/realitka/dum03'
} else {
  apiURL = 'https://apps.kodim.cz/daweb/trening-api/apis/realitka/dum04'
}

const response = await fetch(apiURL)
const {title, text, city, contact, photo } = await response.json()


document.querySelector('#root').innerHTML = render(
  <>
      <Header />
      <main>
      <Estate title={title} text={text} city={city} contact={contact} photo={photo}/>
    </main>
  </>
);



