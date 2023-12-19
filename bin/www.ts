import createApp from '../App';

const app = createApp();
const PORT: number = 3000;

app.listen(PORT, () => {
  console.log(`server is on PORT : ${PORT}`);
});