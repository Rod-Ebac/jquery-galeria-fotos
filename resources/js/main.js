$(function(){
    $('header button').on("click", function() {
        $('form').slideDown();
    });

    $('#botao-cancelar').on("click", function() {
        $('form').slideUp();
    });

    $('form').on("submit", function(e) {
        e.preventDefault();

        // const novaImagem = './resources/img/' + $('#endereco_imagem').val();
        const novaImagem = $('#endereco_imagem').val();
        console.log(novaImagem);

        const novoItem = $('<li></li>');
        $(`<img src="${novaImagem}"/>`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <ia href="${novaImagem}" title="Ver imagem em tamanho real" target="_blank"/>
            </div>
        `).appendTo(novoItem)
        $(novoItem).appendTo('ul');
    });


})
