
const produits = [
  { nom: "Clavier", quantite: 5 },
  { nom: "Souris", quantite: 8 },
  { nom: "Écran", quantite: 3 }
];

const liste = document.querySelector("#liste-produits");
const formulaire = document.querySelector("#formulaire");
const champNom = document.getElementById("nom");
const champQuantite = document.getElementById("quantite");
const champRecherche = document.getElementById("recherche");
const message = document.querySelector("#message");
const total = document.getElementById("total");

function afficherProduits() {
  liste.innerHTML = "";
  const recherche = champRecherche.value.trim().toLowerCase();

  const resultats = produits.filter(function (produit) {
    return produit.nom.toLowerCase().includes(recherche);
  });
  console.log(resultats);

  resultats.forEach(function (produit) {
    const element = document.createElement("li");
    element.textContent = produit.nom + " — Quantité : " + produit.quantite;
    liste.appendChild(element);
  });

  if (resultats.length === 0) {
    const element = document.createElement("li");
    element.textContent = "Aucun matériel trouvé";
    liste.appendChild(element);
  }

  let quantiteTotale = 0;
  produits.forEach(function (produit) {
    quantiteTotale = quantiteTotale + produit.quantite;
    console.log(typeof produit.quantite);
    
  });
  total.textContent = quantiteTotale;
}

formulaire.addEventListener("submit", function (event) {
  event.preventDefault();
  const nom = champNom.value;
  const quantite = champQuantite.value;
  console.log(champNom.value);
  

  if (nom.trim() == "" || champQuantite == "") {
    message.textContent = "Renseignez le nom et la quantité.";
    return 0;
  }

  if (!Number.isInteger(Number(quantite)) || Number(quantite) <= 0) {
    message.textContent = "La quantité doit être un entier supérieur à zéro.";
    return;
  }

  produits.push({ nom: nom, quantite: parseInt(quantite) });
  message.textContent = "Matériel ajouté.";

  afficherProduits();
  formulaire.reset();
  champRecherche.value = "";
});

champRecherche.addEventListener('keyup', afficherProduits);
afficherProduits();
