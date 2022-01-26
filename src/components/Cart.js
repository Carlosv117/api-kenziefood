import { db } from '../mock/db.js'

class Cart{

    static adicionandoCart(idProduto){
        
        const produtoFiltrado = db.foods.find(function(produto){
            return produto.id == idProduto
        })
        
        db.carrinho.push(produtoFiltrado)
        Cart.atualizarCart(db.carrinho)

    }

    static atualizarCart(produtos){

        const carrinho     = document.querySelector(".carrinho__bottom")
        carrinho.innerHTML = ""

        produtos.forEach(produto => {

            const {id, nome, preco, categoria, imagem} = produto
            
            //Criando os elementos
            const li           = document.createElement('li')
            const img          = document.createElement('img')
            const div          = document.createElement('div')
            const h1           = document.createElement('h1')
            const divCategoria = document.createElement('div')
            const spanPreco    = document.createElement('span')
            const lixoImg      = document.createElement('img')

            //Adicionando classes
            li.classList.add('carrinho__card')
            div.classList.add('carrinho__flex')
            divCategoria.classList.add('carrinho__categoria')
            lixoImg.classList.add("carrinho__excluir")
            lixoImg.setAttribute('data-id', id)

            //Adicionando conteúdo
            img.setAttribute('src', imagem)
            divCategoria.innerText = categoria
            h1.innerText           = nome
            spanPreco.innerText    = preco
            lixoImg.setAttribute('src', 'src/assets/images/Icon_lixeira.png')

            //Colocando dentro do html
            carrinho.appendChild(li)
            li.appendChild(img)
            li.appendChild(div)
            div.appendChild(h1)
            div.appendChild(divCategoria)
            div.appendChild(spanPreco)
            li.appendChild(lixoImg)
        })
  
    }
}

export{ Cart }