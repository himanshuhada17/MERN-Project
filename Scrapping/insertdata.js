const express = require('express')
const cors = require('cors');
const app = express()
const port = 5000;
const jsonData = require('./travel.json');
const { PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
app.use(express.json())
app.use(cors())

async function insertData() {
  for (const item of jsonData) {
    await prisma.database.create({
      data: {
        title: item.title,
        desc: item.desc,
        price: item.price,
        duration: item.duration,
        seatsleft: item.seatsleft,
      },
    });
  }
}

insertData()
  .catch((error) => {
    console.error('Error inserting data:', error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


  app.get('/buses', async (req, res) => {
    try {
      const allBuses = await prisma.database.findMany();
      res.json(allBuses);
    } catch (error) {
      console.error('Error fetching buses:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.get('/user',async (req, res)=> {
    const registered_user = await prisma.signup.findMany();
    res.send(registered_user);
})

app.post('/user',async (req, res)=> {
    const new_user = await prisma.signup.create({ data: req.body });
    res.send(new_user);
})

app.get('/hotels',async (req, res)=> {
  const all_hotels = await prisma.hotel.findMany();
  res.send(all_hotels);
})

app.post('/hotels',async (req, res)=> {
  const new_hotel = await prisma.hotel.create({ data: req.body });
  res.send(new_hotel);
})
app.delete('/user/:id',async (req, res) => {
  const id = req.params.id;
  try {
      const user_deleted = await prisma.signup.delete({where: { id: parseInt(id) }});
      res.send(user_deleted)
  }
  catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error'); 
  }

})
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });