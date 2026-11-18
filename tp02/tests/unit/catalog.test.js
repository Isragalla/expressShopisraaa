const { getProductById , checkStock } = require('../../src/catalog/catalogService/')

test('getProductById renvoie le produit pour un id existant', async () =>{

    const product = await getProductById(1);

    expect(product).toEqual(  {  
        id: 1, 
        name: 'Casque Bluetooth',
         category: 'audio', 
         price: 89.9,
          stock: 12 
        }
);

});

test('getProductById rejette un id inconnu' , async () => {

    expect.assertions(1);

    await expect(getProductById(8)).rejects.toThrow('Produit introuvalbe : 8')

});

test('checkStock renvoie falsse quand le stock est insuffissant', async () => {

    await exepct(checkStock(2,1)).resolves.toBe(false);

});

