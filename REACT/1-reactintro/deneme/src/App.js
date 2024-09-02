
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  // js alanı

  const pStyle = {

    fontSize : "2rem",
    color: "green"
  }


  return (
    // jsx alanı => hem html hemde js yazabileceğiniz bir alandır. js kodu yazacak isek {} içinde yazmalıyız.
    // class yerine className kullanıyoruz
    // img ler kendi bilgisayarımızda ise bunu gösterebilmek için fotoyu değişken olarak import etmeliyiz.

    // return içinde sarmalayıcı bir yapı bulunmak zorunda.. içi boş html etiketine fragment denir. css almaz. en dışta gerekirse sarmalayıcı olarak kullanılabilir.

    // inline style için style = {} formatı kullanılır. bu format obje kabul eder. property ler  camel case olarak yazılır. örneğin fontSize ... 

    // css için pure css kullanılabildiği gibi bootstrap, sass, ant design, metarial ui , tailwind, styled component, module css vb de kullanılabilir. 
 
    <>
    <div className="App">
      {/* component */}
      <Header/>
      <img src="https://i0.wp.com/mediatrend.mediamarkt.com.tr/wp-content/uploads/2017/02/2017_subat_03.jpg?ssl=1" alt="" />
      <Header/>
      {/* <img src={gunBatimi} alt="" /> */}
      <p style={{color: "blue", backgroundColor : "yellow"}}>stillendirme </p>
      <p style={pStyle}>obje ile stil</p>
      <Footer/>
    </div>
    </>
  );
}

export default App;
