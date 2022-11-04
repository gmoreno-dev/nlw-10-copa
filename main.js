function createGame(player1, hour, player2){
    return `
    <li>
    <img src="Assets/icon-${player1}.svg" alt="Bandeira da ${player1}" />
    <strong>${hour}</strong>
    <img src="Assets/icon-${player2}.svg" alt="Bandeira de ${player2}" />
  </li>

`
}

let delay = -0.3;
function createCard(date, day, games){
  delay = delay + 0.3;
    return `
    <div class="card" style="animation-delay: ${delay}s">
  <h2>${date} <span>${day}</span></h2>

  <ul>
    ${games}
  </ul>
</div> 
`
}


document.querySelector("#cards").innerHTML = 
    createCard('21/11', 'Segunda',
    createGame('england', '10:00', 'iran') +
    createGame('senegal', '13:00', 'netherlands') +
    createGame('usa', '16:00', 'wales')
    ) +

    createCard('24/11', 'Quinta', 
    createGame('switzerland', '07:00', 'cameroon') + 
        createGame('portugal', '13:00', 'ghana') +
            createGame('brazil', '16:00', 'serbia') 
    ) +

    createCard('28/11', 'Segunda',
    createGame('cameroon', '07:00', 'serbia') +
    createGame('corea', '10:00', 'ghana') +
    createGame('brazil', '13:00', 'switzerland')
    ) +
    
    createCard('02/12', 'Sexta',
    createGame('corea', '12:00', 'portugal') +
    createGame('ghana', '12:00', 'uruguay') +
    createGame('cameroon', '16:00', 'brazil')
    )

