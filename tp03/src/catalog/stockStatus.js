/**
 * stockStatus.js : état d'un produit selon son stock.
 *
 * SPÉCIFICATION
 *
 * stockStatus(stock, threshold = 5)
 *   stock     : nombre entier de produits en stock
 *   threshold : seuil de stock faible (5 par défaut)
 *
 *   - stock qui n'est pas un entier, ou négatif : lève une RangeError('Stock invalide')
 *   - stock égal à 0                            : renvoie 'rupture'
 *   - stock de 1 à threshold (inclus)           : renvoie 'faible'
 *   - stock supérieur à threshold               : renvoie 'disponible'
 */

function stockStatus(stock, threshold = 5) {
  if (!Number.isInteger(stock) || stock < 0) {
    throw new RangeError('Stock invalide');
  }
  if (stock === 0) {
    return 'rupture';
  }
  if (stock <= threshold) {
    return 'faible';
  }
  return 'disponible';
}

module.exports = { stockStatus };
