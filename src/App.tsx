import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [cards, setCards] = useState(
      [
          {
              title: `Card One`,
              text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Amet dignissimos eaque nobis. Adipisci asperiores atque
                        cupiditate dignissimos distinctio et, ex itaque nemo nisi
                        nulla praesentium rerum sed similique sit tempore.`
          },
          {
              title: `Card Two`,
              text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Amet dignissimos eaque nobis. Adipisci asperiores atque
                        cupiditate dignissimos distinctio et, ex itaque nemo nisi
                        nulla praesentium rerum sed similique sit tempore.`
          },
          {
              title: `Card Three`,
              text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Amet dignissimos eaque nobis. Adipisci asperiores atque
                        cupiditate dignissimos distinctio et, ex itaque nemo nisi
                        nulla praesentium rerum sed similique sit tempore.`
          },
          {
              title: `Card Four`,
              text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Amet dignissimos eaque nobis. Adipisci asperiores atque
                        cupiditate dignissimos distinctio et, ex itaque nemo nisi
                        nulla praesentium rerum sed similique sit tempore.`
          }
      ]
  );

  return (
    <div className="App">
      <section>
        <div className={"container"}>
            <h1>Cardy</h1>
            <div className={"cards"}>
                {
                    cards.map((card, index) => {
                        return (
                            <div key={index} className={"card"}>
                                <h3>{card.title}</h3>
                                <p>{card.text}</p>
                                <button className={"button"}>Learn more</button>
                            </div>
                        );
                    })
                }
            </div>
        </div>
      </section>
    </div>
  );
}

export default App;
