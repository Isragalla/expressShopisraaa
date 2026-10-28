/**
 * catalogService.js : accès asynchrone au catalogue produits d'ExpressShop.
 *
 * Les fonctions simulent une base de données : elles répondent après un court
 * délai et renvoient donc des PROMESSES (Promise).
 *
 * SPÉCIFICATION
 *
 * getProductById(id)
 *   Renvoie une promesse résolue avec le produit { id, name, category, price, stock }.
 *   Si aucun produit ne porte cet id, la promesse est REJETÉE avec une
 *   Error dont le message est « Produit introuvable : <id> ».
 *
 * getProductsByCategory(category)
 *   Renvoie une promesse résolue avec le tableau des produits de cette
 *   catégorie, dans l'ordre du catalogue. La casse est ignorée : « audio »,
 *   « Audio » et « AUDIO » donnent le même résultat.
 *   Une catégorie inconnue donne un tableau vide (pas d'erreur).
 *
 * checkStock(id, quantity)
 *   Renvoie une promesse résolue avec true si le stock du produit est
 *   supérieur ou égal à quantity, false sinon.
 *   - quantity doit être un entier supérieur ou égal à 1, sinon la promesse
 *     est rejetée avec une RangeError.
 *   - Un id inconnu rejette la promesse comme getProductById.
 */
const {
  getProductById,
  checkStock,
} = require("../../src/catalog/catalogService/");

test("getProductById renvoie le produit pour un id existant", async () => {
  const product = await getProductById(1);

  expect(product).toEqual({
    id: 1,
    name: "Casque Bluetooth",
    category: "audio",
    price: 89.9,
    stock: 12,
  });
});

test("getProductById rejette un id inconnu", async () => {
  expect.assertions(1);

  await expect(getProductById(8)).rejects.toThrow("Produit introuvalbe : 8");
});

test("checkStock renvoie falsse quand le stock est insuffissant", async () => {
  await exepct(checkStock(2, 1)).resolves.toBe(false);
});
