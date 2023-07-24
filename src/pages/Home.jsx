import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';

function Home() {
  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then((data) => {
        setItems(data)
        console.log(data)
      })
  }, [])

  return (
    <Layout>
      Home
      <div className='w-full max-w-screen-lg grid grid-cols-4 gap-4'>
        {
          items?.map((item) => (
            <Card key={item.id} data={item} />
          ))
        }
      </div>
    </Layout>
  );
}

export default Home;
