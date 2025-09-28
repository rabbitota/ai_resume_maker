import React from "react";
import LandingPage from "./LandingPage";
import { useNavigate } from "react-router-dom";

function Test() {
  const navigate = useNavigate();
  return (
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        <div> Column 1 
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam doloremque, vero labore voluptates aspernatur sapiente harum, est officia impedit voluptate minima, inventore odit at aliquam dolore rerum suscipit tempora quasi.
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium corporis soluta, similique amet fuga beatae voluptatibus repudiandae ea! Non quas amet aut nulla at optio perspiciatis dolores necessitatibus, ipsum, quibusdam doloremque corrupti voluptatem molestias nostrum, soluta voluptate aliquid a modi! Similique, aliquid quod minus adipisci consequatur necessitatibus magnam iusto explicabo repellendus reiciendis doloribus temporibus illum aperiam voluptas est incidunt! Ea dolore magni eum ab sunt, eligendi est accusamus quam sed dicta nostrum voluptatem praesentium officiis voluptatum necessitatibus nesciunt ipsum molestias ratione voluptatibus id iure sint porro numquam saepe. Iusto veritatis vero, illo deserunt atque suscipit quia autem? Nemo omnis at nisi, laborum nesciunt iste et amet cumque in culpa commodi velit molestias consequuntur veritatis, tempore quo, quae placeat. Reiciendis modi, voluptatem tempora hic, placeat magnam quisquam reprehenderit, maxime veniam ab harum cum repellendus culpa vitae. Vero, molestiae obcaecati modi veniam iusto laudantium sit optio laboriosam at veritatis porro sint labore dicta ex eveniet nobis nemo molestias perferendis quo possimus pariatur, quasi quod hic omnis?  
          </p>
        </div>

        <div> Column 2 
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus soluta cum molestiae quaerat dignissimos, pariatur a commodi hic itaque architecto asperiores nisi voluptas inventore repudiandae deserunt dolores officia iste nemo eius sapiente. Voluptatem ipsum odit aut tempora, pariatur nesciunt ipsam aliquid sapiente placeat quaerat magnam ratione dolorum autem qui amet?
          </p>
        </div>
    </div>
  )
}

export default Test;
