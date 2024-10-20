// Afficher le cours du Bitcoin à intérrogeant l'API de CoinBase https://api.coindesk.com/v1/bpi/currentprice.json

var typed = new Typed('.element', {
    strings: ["Bonjour !", "Voici le cours du bit coin entre le 1er janvier 2023 et le 1er janvier 2024"], 
    typeSpeed: 30,
    backSpeed: 30,
    loop: true
  });

  const ctx = document.getElementById('myChart');

 const url = `https://api.coindesk.com/v1/bpi/historical/close.json?start=2023-01-01& end=2024-01-01`;

 const getBitcoin = async()=>{

    try {

        let result = await axios.get(url);

        console.log(result);

        let prix = Object.values(result.data.bpi) ;
        let date = Object.keys(result.data.bpi);
        
 
        console.log(date);

      new Chart(ctx, {

        type: 'line',

        data: {

          labels: date,

          datasets: [{

            label: 'Prix du Bitcoin',

            data: prix,

            borderWidth: 3

          }]

        },

        options: {

          scales: {

            y: {

              beginAtZero: true

            }

          }

        }

      });

    }

    catch(error){

        console.error(error);

        

    }

  }

getBitcoin();