const btnQuote = document.getElementById("btn-quote");
const idQuote = document.getElementById("id-quote");
const textQuote = document.getElementById("text-quote");

const url = "https://api.adviceslip.com/advice";
async function getQuote() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    showData(data);
  } catch (error) {
    textQuote.innerText = `Data fetching error`;
    throw new error();
  }
}

const showData = (data) => {
  const { slip } = data;
  console.log(slip);
  textQuote.innerText = `"${data.slip.advice}"`;
  idQuote.innerText = `Advice #${data.slip.id}`;
};

btnQuote.addEventListener("click", getQuote);
