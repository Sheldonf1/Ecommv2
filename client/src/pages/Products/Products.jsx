import React, { useEffect, useState } from 'react'
// import styled from 'styled-components'
// import { vinylProducts } from '../data'
// import Product from './Product'
import axios from 'axios'
import './product.css'
import { Product } from '../../components/Product/Product';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';


export default function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/animeSwords')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  if (!data) {
    return <p>Loading data...</p>;
  }

  return (
    <>
      <Menu />
      <button>Low to High</button>
      <button>High to Low</button>
      <section className="myData">
        {data.map((item, index) => {
          if (index != 0) {
            return (
              <Product item={item} />
            )
          }
        })}
      </section>
      <Footer />
    </>
  );
}





// data.map(item => (
//   // <div key={item.id}>
//   //   <img src={require(`../../ public / ${ item.image } `)}></img>
//   //   <p>{item.type}</p>
//   //   <p>{item.price}</p>
//   //   <p>{item.description}</p>

//   // </div>
//   console.log(item.image)
// ))





// const Container = styled.div`
//     padding:20px;
//     display:flex;
//     flex-wrap:wrap;
//     jusify-content:space-between;
// `
// const FilterContainer = styled.div`
// magin-left:30px;
// padding-left:30px;


// `

// const Title = styled.h1`
// display:flex;
// align-items:center;
// justify-content:center;
// text-decoration:underline;
// `



// const Products = () => {

//   const [products, showProducts] = useState([]);

//   useEffect(() => {
//     axios.get('https://ecomv2.herokuapp.com/products/').then(
//       (response) => {
//         showProducts(response.data);
//       }
//     );
//   }, []);

//   const Fillylow = () => {
//     axios.get('https://ecomv2.herokuapp.com/titlelowtohigh').then(
//       (response) => {
//         showProducts(response.data);
//       }
//     );
//   }

//   const Fillyhigh = () => {
//     axios.get('https://ecomv2.herokuapp.com/titlehightolow').then(
//       (response) => {
//         showProducts(response.data);
//       }
//     );
//   }

//   const Fillyselect = () => {
//     axios.get('https://ecomv2.herokuapp.com/products/').then(
//       (response) => {
//         showProducts(response.data);
//       }
//     );
//   };

//   const filly2 = (param) => {
//     if (param.target.value === 'low') {
//       Fillylow()
//     }
//     if (param.target.value === 'high') {
//       Fillyhigh()
//     }
//     if (param.target.value === 'select') {
//       Fillyselect()
//     }

//   }

//   return (

//     <div className='shop' id='shop'>
//       <Title>Shop</Title>
//       <FilterContainer>
//         <label for="cars">Sort:</label>

//         <select name="cars" onChange={filly2}>
//           <option value="select">Select</option>
//           <option value="low">A-Z</option>
//           <option value="high">Z-A</option>

//         </select>
//       </FilterContainer>
//       <Container>
//         {products.map((item) => (
//           <Product item={item} key={item.id} />

//         ))}
//       </Container>
//     </div>
//   )
// }

// export default Products