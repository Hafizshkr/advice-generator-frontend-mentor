const btnQuote = document.getElementById("btn-quote");
const idQuote = document.getElementById("id-quote");
const textQuote = document.getElementById("text-quote");
const loader = document.getElementById("loader");

const url = "https://api.adviceslip.com/advice";

async function getQuote() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    showLoader();
    setTimeout(() => {
      showContent();
      showData(data);
    }, 500);
  } catch (error) {
    textQuote.innerText = `Data fetching error`;
    throw new error();
  }

  function showLoader() {
    textQuote.style.display = "none";
    idQuote.style.display = "none";
    loader.style.display = "block";
  }

  function showContent() {
    textQuote.style.display = "block";
    idQuote.style.display = "block";
    loader.style.display = "none";
  }
}

const showData = (data) => {
  textQuote.innerText = `"${data.slip.advice}"`;
  idQuote.innerText = `Advice #${data.slip.id}`;
  console.log(textQuote.innerHTML);
};

btnQuote.addEventListener("click", getQuote);
