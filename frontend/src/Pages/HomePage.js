import React,{ useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const HomePage = () => {
  const [products, setProducts ] = useState([])

  useEffect(() => {
    const fetchProducts = async() => {
      const { data } = await axios.get('/api/products')

      setProducts(data)
    }
    fetchProducts()

  }, [])
  return (
    <>
    <h1>Browse through our latest products!</h1>
        <Row>
            {products.map((product) => (
              <Col sm = {12} med = {6} lg = {4} xl = {3}>
                <Product product = {product}/>
              </Col>
            )

            )

            }
        </Row>
    </>
  )
}

export default HomePage