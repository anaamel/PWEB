document.querySelectorAll('.kanban-card').forEach(card => {
    card.addEventListener('dragstart', e => {
        e.currentTarget.classList.add('dragging')
    })

    card.addEventListener('dragend', e => {
        e.currentTarget.classList.remove('dragging');

    })
});

document.querySelectorAll('.kanban-cards').forEach(column =>{
    column.addEventListener('dragover', e =>{
        e.preventDefault();
        e.currentTarget.classList.add('cards-hover')
    })

    column.addEventListener('dragleave', e =>{
        e.currentTarget.classList.remove('cards-hover')
    })

    column.addEventListener('drop', e =>{
        e.currentTarget.classList.remove('cards-hover');

        const dragCard = document.querySelector('.kanban-card.dragging');
        e.currentTarget.appendChild(dragCard);
    })
})

    // esperar o dom carregar
    // document.addEventListener("DOMContentLoaded", function () {
    //     const popup = document.getElementById("popup");
    //     const openPopup = document.querySelector(".add-card"); // Seleciona o botão pelo seletor
    //     const closePopup = document.getElementById("closePopup");

    //     openPopup.onclick = function () {
    //         popup.style.display = "flex"; // Mostra o popup
    //     };

    //     closePopup.onclick = function () {
    //         popup.style.display = "none"; // Esconde o popup
    //     };

    //     window.onclick = function (event) {
    //         if (event.target === popup) {
    //             popup.style.display = "none"; // Esconde o popup
    //         }
    //     };
    // });

    document.addEventListener("DOMContentLoaded", function () {
        const popup = document.getElementById("popup");
        const buttons = document.querySelectorAll("button[data-btn-id]");
        const closePopup = document.getElementById("closePopup");
        const popupForm = document.getElementById("popupForm");
    
        buttons.forEach((button) => {
            button.addEventListener("click", function () {
                const id = this.getAttribute("data-btn-id");
                console.log(`Botão com data-btn-id ${id} clicado`);
    
                popup.style.display = "flex";
    
                //personalizand o formulário com base no botão clicado
                const titleField = document.getElementById("cardTitle");
                // titleField.value = `Novo card para a coluna ${id}`;
            });
        });
    
        closePopup.onclick = function () {
            popup.style.display = "none";
        };
    
        window.onclick = function (event) {
            if (event.target === popup) {
                popup.style.display = "none";
            }
        };
    
        popupForm.onsubmit = function (event) {
            event.preventDefault();
    
            const title = document.getElementById("cardTitle").value;
            const description = document.getElementById("cardDescription").value;
            const date = document.getElementById("cardDate").value;
            const priority = document.getElementById("cardPriority").value;
    
            console.log("Título:", title);
            console.log("Descrição:", description);
            console.log("Data Limite:", date);
            console.log("Prioridade:", priority);
    
            popup.style.display = "none";
    
            lógica 
        };
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        const popup = document.getElementById("popup-view");
        const divs = document.querySelectorAll("div[data-card-id]");
        const closePopup = document.getElementById("closePopupView");
        const popupForm = document.getElementById("popupForm");
    
        divs.forEach((div) => {
            div.addEventListener("click", function () {
                const id = this.getAttribute("data-card-id");
                console.log(`Div com data-card-id ${id} clicado`);
    
                popup.style.display = "flex";
    
                //personalizand o formulário com base no botão clicado
                const titleField = document.getElementById("cardTitle");
                // titleField.value = `Novo card para a coluna ${id}`;
            });
        });
    
        closePopup.onclick = function () {
            popup.style.display = "none";
        };
    
        window.onclick = function (event) {
            if (event.target === popup) {
                popup.style.display = "none";
            }
        };
    
    });
