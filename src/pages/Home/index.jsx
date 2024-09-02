import React from 'react'
import MenuList from '../../components/MenuList/MenuList'
import RestauranteHeader from '../../components/RestauranteHeader'

function Home() {
  return (
    <div>
      <RestauranteHeader 
    bannerUrl="https://quartinhodecorado.com.br/wp-content/uploads/2022/01/R496-4.jpg" 
    logoUrl="https://example.com/logo.jpg" 
    nome="Sr Pizza" 
    avaliacao={4.2} 
    pedidoMinimo={15.00} 
  />
      <MenuList/>
    </div>

  )
}

export default Home