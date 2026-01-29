  function toggleCard(element) {
            const cards = document.querySelectorAll('.card-game');
            cards.forEach(card => {
                if (card !== element) {
                    card.classList.remove('ativo');
                }
            });
            element.classList.toggle('ativo');
        }