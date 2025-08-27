import { useState } from "react";
import "./static-page.css";

export default function StaticPage({ onClose }: { onClose?: () => void }) {
  onClose = onClose
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    
    <div id="app">
      <header className="header flex gap-2">
        <a>
          <img className="logo" src="logo.png" alt="logo" />
        </a>
        <div>
          <h1 className="title">My Road</h1>
          <h3 className="subtitle">personal showcase</h3>
        </div>

        <div className="menu flex-col gap-2 flex-1">
          <div className="menu-top flex items-center border-bottom">
            <a className="menu-item disabled">
              messages <b>0</b>
            </a>
            <div className="divider"></div>
            <a className="menu-item disabled">
              projects <b>0</b>
            </a>
            <div className="divider"></div>
            <a className="menu-item disabled">
              account <b>B0.0000</b>
            </a>

            <div className="user-info flex-col items-end ml-auto">
              <p className="text-small">welcome to</p>
              <p className="text-bold">my portfolio</p>
            </div>

            <img className="avatar" src="avatar.png" alt="icon" />
          </div>

          <div className="menu-bottom flex items-center">
            <label className="search-label">Search</label>
            <input className="search-input" placeholder="Search..." disabled />
            <input className="search-button" type="button" value="Go" disabled />

            <div className="user-actions flex-col items-end ml-auto">
              <p className="text-xl">
                Hi, <b>Guest</b>
              </p>
              <div className="actions flex">
                <a className="link disabled">settings</a>
                <span className="separator">-</span>
                <a className="link disabled">logout</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="main flex flex-1">
        <nav className="sidebar">
          <ul>
            <li>
              <a className="link" href="/" onClick={(e) => { e.preventDefault(); setActiveProject(null); }}>
              
                About
              </a>
            </li>
            <li>
              <a className="link" href="#">
                Projects
              </a>
              <span className="count">5</span>
              <ul className="sublist">
                <li>
                  <a className="link" href="#" onClick={(e) => { e.preventDefault(); setActiveProject("Project 1"); }}>
                    Project 1
                  </a>
                </li>
                <li>
                  <a className="link" href="#" onClick={(e) => { e.preventDefault(); setActiveProject("Project 2"); }}>
                    Project 2
                  </a>
                </li>
                <li>
                  <a className="link" href="#" onClick={(e) => { e.preventDefault(); setActiveProject("Project 3"); }}>
                    Project 3
                  </a>
                </li>
                <li>
                  <a className="link" href="#" onClick={(e) => { e.preventDefault(); setActiveProject("Project 4"); }}>
                    Project 4
                  </a>
                </li>
                 <li>
                  <a className="link" href="#" onClick={(e) => { e.preventDefault(); setActiveProject("Project 5"); }}>
                    Project 5
                  </a>
                </li>
                <li>
      
                </li>
              </ul>
            </li>
            <li>
              <a className="link" href="/" onClick={(e) => { e.preventDefault(); setActiveProject("Certificates"); }}>
              
                Certificates
              </a>
            </li>
            <li>
              <a className="link" href="#" onClick={(e) => { e.preventDefault(); setActiveProject("GitHub"); }}>
                GitHub
              </a>
            </li>
            <li>
              <a className="link" href="#" onClick={(e) => { e.preventDefault(); setActiveProject("Contact"); }}>
                Contact
              </a>
            </li>
            <li>
              <a className="link" href="#" onClick={(e) => { e.preventDefault(); setActiveProject("Document"); }}>
                Document
              </a>
            </li>
          </ul>
        </nav>

        <div className="content">
          {activeProject === null &&(<div>
          <h1 className="heading">hello,</h1>
          <p>
            I'm a student with experience in system testing gained in an international environment,
passionate about AI/ML and software development, eager to grow in the tech field <br></br>
 Here I showcase my projects and digital explorations
          </p>
          <br />
          <p>
            To get in touch, visit the contact page
            or send me an e-mail at{" "}
            <a className="link-bold" href="mailto:example@example.com">
              wojtekcieciura@gmail.com
            </a>
          </p> </div>)}
           {activeProject === "Project 1" && (
    <div>
      <h1 className="heading">GAN-based Image Colorization</h1>
      <p>
This is a deep learning project for automatic colorization of grayscale images using GANs. The goal was to take a black-and-white image and predict a realistic colored version.

The project was designed and trained entirely in Google Colab using limited GPU resources.      </p>
      <br />
      <p>
        More info:{" "}
        <a
          className="link-bold"
          href="https://github.com/wojciechc1/ColorizeGAN"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repo
        </a>
      </p>
    </div>
  )}
  {activeProject === "Project 2" && (
    <div>
      <h1 className="heading">Generate Digit</h1>
      <p>
        Conditional GAN generating MNIST handwritten digits
     </p>
      <br />
      <p>
        More info:{" "}
        <a
          className="link-bold"
          href="https://github.com/wojciechc1/MNIST-GAN"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repo
        </a>
      </p>
    </div>
  )}

   {activeProject === "Project 3" && (
    <div>
      <h1 className="heading">AI Radio RTL-SDR</h1>
      <p>
        This project uses a 1D U-Net neural network to denoise real-time FM radio audio captured with a low-cost RTL-SDR USB dongle. It processes raw radio signals, demodulates them, and removes noise using a PyTorch model before playback.
     </p>
      <br />
      <p>
        More info:{" "}
        <a
          className="link-bold"
          href="https://github.com/wojciechc1/AI_Radio_RTL-SDR"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repo
        </a>
      </p>
    </div>
  )}
  {activeProject === "Project 4" && (
    <div>
      <h1 className="heading">DigitRecognizer</h1>
      <p>
A simple playground for experimenting with different machine learning models on the MNIST digit recognition task. Achieved ~85% training accuracy and ~88% test accuracy early in training using a 2-layer neural network implemented from scratch.     </p>
      <br />
      <p>
        More info:{" "}
        <a
          className="link-bold"
          href="https://github.com/wojciechc1/DigitRecognizer"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repo
        </a>
      </p>
    </div>
  )}
  {activeProject === "Project 5" && (
    <div>
      <h1 className="heading">CarDetector</h1>
      <p> System with logo detection, type/model
classification. It works for selected brands. More data required for full
functionality. (still improving)
</p>
      <br />
      <p>
        More info:{" "}
        <a
          className="link-bold"
          href="https://github.com/wojciechc1/Car_Recognizer"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repo
        </a>
      </p>
    </div>
  )}
  {activeProject === "GitHub" && (
  <div>
    <h1 className="heading">GitHub</h1>
    <p>Check out my repositories and projects on GitHub:</p>
    <p>
      <a
        className="link-bold"
        href="https://github.com/wojciechc1"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit my GitHub
      </a>
    </p>
  </div>
)}
{activeProject === "Contact" && (
  <div>
    <h1 className="heading">Contact</h1>
    <p>You can reach me via email or LinkedIn:</p>
    <ul>
      <li>
        Email:{" "}
        <a
          className="link-bold"
          href="mailto:example@example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          wojtekcieciura@example.com
        </a>
      </li>
      <li>
        LinkedIn:{" "}
        <a
          className="link-bold"
          href="https://www.linkedin.com/in/wojciech-cieciura-940267286/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/wojciech-cieciura-940267286
        </a>
      </li>
    </ul>
  </div>
)}
{activeProject === "Certificates" && (
  <div>
    <h1 className="heading">Certificates</h1>
    <p>Here are some of my completed courses and certifications:</p>
            <br />

    <ul>
      <li>
        <b>
Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization</b> - DeepLearning.AI 08.2024
        <br />
        <a
          className="link-bold"
          href="https://www.coursera.org/account/accomplishments/verify/K6QO0SK9E1BF"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Certificate
        </a>

                <br />
        <br />

      </li>
      <li>
        <b>Neural Networks and Deep Learning
</b> - DeepLearning.AI 07.2024
        <br />
        <a
          className="link-bold"
          href="https://www.coursera.org/account/accomplishments/verify/KQDLGTLYUXN1"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Certificate
        </a>
                <br />
        <br />

      </li>
      <li>
        <b>
INF.04. Projektowanie, programowanie i testowanie aplikacji</b> - OKE Poznań 03.2023
        <br />
                <br />

      </li>
         <li>
        <b>
INF.03. Tworzenie i administrowanie stronami i aplikacjami internetowymi oraz bazami danych </b> - OKE Poznań 09.2022
        <br />
      </li>
      {/* dodaj kolejne certyfikaty w tym samym stylu */}
    </ul>
  </div>
)}

{activeProject === "Document" && (
  <div>
    <h1 className="heading">Dokument do rekrutacji</h1>
    <div>
    <p>
    4. Używałem tylko ChataGpt w wersji darmowej do: <br/>
    - analizowania errorow (dobrze sobie radzi z typowami błędami niezwiązanymi z dużą logiką), <br/>
    - generowania kodu mniejszych komponentow strony (nie lubie tworzenia frontendu i słabo znam reacta) <br/>
    - sugestii co do efektywności moich rozwiązań/ wymyślania nowych<br/>
    - zmieniania/ debugowania/ tworzenia podobnych - komponentow <br/>
    Wybralem akurat to narzędzie, ponieważ jest najszybsze i najlepsze z tych, które znam. Propty tworzyłem na szybko z jedną zasadą- aby było spójnie i logicznie
    <br/>
    5. GPT najlepiej sprawdził się do ww. czynności. A z tymi miał problem:<br/>
    - generowanie widoku (ma problem już z małymi komponentami, react/css)<br/>
    - generowanie większego kodu<br/>
    - odnajowywanie się w całym projekcie<br/> 
    <br/>
    6. Q&A<br/>
    a) pos. absolute- pozycja względem elementu z atrybutem pos. relative. fixed- pozycja która nie zmienai się z przesuwaniem okna<br/>
     nie wiem<br/>
     display: flex; justify-content: center; align-items: center; position absolute; top calc(50%-height/2), left calc(50%-width/2); lub margin auto<br/>
    b) GET - pobieranie danych z api / POST - wysyłanie <br/>
    format danych js, prosty i zapewne szybki<br/>
    najpierw bym się dowiedzial co to za błąd - 403: forbidden - upewniłbym się czy nie jest potrzebny klucz dostępu<br/>
    c) Nie korzystalem. Wydaje mi się że do organizacji pracy.<br/>
    systemy się porozumiewają - spamią informacjami do siebe o wysłaniu/odbiorze zapytania/informacji <br/>
    zapewne są gotowe narzędzia/ już napisane programy które można dostosować do klienta. A jeśli trzebaby było od zera to kombinowałbym z drukowaniem stron- zapis do pdfa<br/>
    d) system prompt- konfiguracja czatu, prompt- zapytanie zwykle<br/>
    Api key to hasło do api, należy chronić aby nikt nie narobił szkód w systemie/ nie obciążał/ nie dostał informacji<br/>
    Agent AI- agent w RL, MCP- "kora czołowa", system decyzji<br/>
    e) sprawdzilbym kompletność kodu, poprawność wersje przeglądarki <br/>
    nie mam pojęcia, nie miałem z tym do czyniena. zapytałbym czata lub poszukałbym informacji jak połączyć coś z google sheets<br/>
    powiedziałbym że muszę sprawdić informacje w systemie - jeśli nadal nie miałbym pewności- powiedziałbym to <br/>
    f) Działania produktu do odpowiadania na pytania klientów ;) <br/>
    chatGPT/ filmy na Youtube/ renomowane kursy
    g) motywuje mnie ciekawość, stworzenie rozwiązania <br/>
      rozwinę umiejętności rozumienia/ tworzenia AI/ML oraz chciałbym mieć możliwość wykorzystywania tego


    </p>
    </div>
  </div>
)}
        </div>
     
        
      </div>

      <footer className="footer flex justify-between">
        <p>Copyright © 2025 Wojciech Cieciura</p>
        <a className="link"  target="_blank"
         href="https://github.com/wojciechc1/my-portfolio-website"
           rel="noopener noreferrer">
          source code
        </a>
      </footer>
    </div>
  );
}
