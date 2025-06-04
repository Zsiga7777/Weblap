import Database from 'better-sqlite3'

const db = new Database('./data/database.sqlite');

db.prepare(`CREATE TABLE IF NOT EXISTS sellers (id INTEGER PRIMARY KEY AUTOINCREMENT, name STRING, address STRING, taxNumber STRING UNIQUE)`).run();
db.prepare(`CREATE TABLE IF NOT EXISTS buyers (id INTEGER PRIMARY KEY AUTOINCREMENT, name STRING, address STRING, taxNumber STRING UNIQUE)`).run();
db.prepare(`CREATE TABLE IF NOT EXISTS bills (id INTEGER PRIMARY KEY AUTOINCREMENT, sellerId INTEGER, sellerName STRING, sellerAddress STRING, sellerTaxNumber STRING, buyerId INTEGER , buyerName STRING, buyerAddress STRING, buyerTaxNumber STRING, billNumber INTEGER UNIQUE, created DATE, payDay DATE,deadline DATE, total INTEGER, afa INTEGER, storno BINARY, FOREIGN KEY(sellerId) REFERENCES sellers(id) ON DELETE SET NULL, FOREIGN KEY(buyerId) REFERENCES buyers(id) ON DELETE SET NULL )`).run();


export const getSellers = () => db
    .prepare('SELECT * FROM sellers').all();

export const saveSeller = (name, address, taxNumber) => db
    .prepare('INSERT INTO sellers (name, address, taxNumber) VALUES (?,?,?)').run(name, address, taxNumber);

export const updateSeller = (id, name, address, taxNumber) => db
    .prepare('UPDATE sellers SET name = ?, address = ?, taxNumber = ? WHERE id = ?').run(name, address, taxNumber, id);

export const deleteSeller = (id) => db
    .prepare('DELETE FROM sellers WHERE id =?').run(id);
export const getSellerTaxNumbers = () => db
    .prepare('SELECT taxNumber FROM sellers').all();

export const getBuyers = () => db
    .prepare('SELECT * FROM buyers').all();

export const saveBuyer = (name, address, taxNumber) => db
    .prepare('INSERT INTO buyers (name, address, taxNumber) VALUES (?,?,?)').run(name, address, taxNumber);

export const updateBuyer = (id, name, address, taxNumber) => db
    .prepare('UPDATE buyers SET name = ?, address = ?, taxNumber = ? WHERE id = ?').run(name, address, taxNumber, id);

export const deleteBuyer = (id) => db
    .prepare('DELETE FROM buyers WHERE id = ?').run(id);

export const getBuyerTaxNumbers = () => db
    .prepare('SELECT taxNumber FROM buyers').all();

export const getBills = () => db
    .prepare('SELECT * FROM bills').all();

export const saveBill = (sellerId,sellerName,sellerAddress,sellerTaxNumber, buyerId,buyerName,buyerAddress,buyerTaxNumber, billNumber, created, payDay, deadline, total, afa, storno) => db
    .prepare('INSERT INTO bills (sellerId,sellerName,sellerAddress,sellerTaxNumber, buyerId,buyerName,buyerAddress,buyerTaxNumber, billNumber, created, payDay, deadline, total, afa, storno) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)').run(sellerId,sellerName,sellerAddress,sellerTaxNumber, buyerId,buyerName,buyerAddress,buyerTaxNumber, billNumber, created, payDay, deadline, total, afa, storno);

export const updateBill = (id, sellerId,sellerName,sellerAddress,sellerTaxNumber, buyerId,buyerName,buyerAddress,buyerTaxNumber, billNumber, created, payDay, deadline, total, afa, storno) => db
    .prepare('UPDATE bills SET sellerId = ?, sellerName = ?,sellerAddress = ?, sellerTaxNumber = ? , buyerId = ?, buyerName = ?,buyerAddress = ?, buyerTaxNumber =? ,billNumber = ?,created = ?,payDay = ?, deadline = ?, total = ?,afa = ?, storno = ? WHERE id = ?').run(sellerId,sellerName,sellerAddress,sellerTaxNumber, buyerId,buyerName,buyerAddress,buyerTaxNumber, billNumber, created, payDay, deadline, total, afa, storno, id);

export const deleteBill = (id) => db
    .prepare('DELETE FROM bills WHERE id =?').run(id);
const sellers = [
    { name: 'Ann', address: "cím1", taxNumber: "11111111-1-11" }
];
const buyers = [
    { name: 'Béla', address: "cím2", taxNumber: "22222222-2-22" },
    { name: 'Géza', address: "cím3", taxNumber: "33333333-3-33" },
    { name: 'Laci', address: "cím3", taxNumber: "44444444-4-44" }
];

const dateString = `2025-01-01`;
const deadLineDateString = `2025-01-31`;

const bills = [
    { sellerId: 1,sellerName : "Ann",sellerAddress : "cím1",sellerTaxNumber : "11111111-1-11", buyerId: 1,buyerName : "Béla",buyerAddress:"cím2",buyerTaxNumber: "22222222-2-22", billNumber: 1, created: `${dateString}`, payDay: `${dateString}`, deadline: `${deadLineDateString}`, total: 10000, afa: 27, storno:0 },
    { sellerId: 1,sellerName : "Ann",sellerAddress : "cím1",sellerTaxNumber : "11111111-1-11", buyerId: 1,buyerName : "Béla",buyerAddress:"cím2",buyerTaxNumber: "22222222-2-22", billNumber: 2, created: `${dateString}`, payDay: `${dateString}`, deadline: `${deadLineDateString}`, total: 20000, afa: 27 , storno:0},
    { sellerId: 1,sellerName : "Ann", sellerAddress : "cím1",sellerTaxNumber : "11111111-1-11",buyerId: 1,buyerName : "Béla",buyerAddress:"cím2",buyerTaxNumber: "22222222-2-22", billNumber: 3, created: `${dateString}`, payDay: `${dateString}`, deadline: `${deadLineDateString}`, total: 30000, afa: 27 , storno:0},
    { sellerId: 1,sellerName : "Ann",sellerAddress : "cím1",sellerTaxNumber : "11111111-1-11", buyerId: 2,buyerName : "Géza",buyerAddress:"cím3",buyerTaxNumber: "33333333-3-33", billNumber: 4, created: `${dateString}`, payDay: `${dateString}`, deadline: `${deadLineDateString}`, total: 40000, afa: 27, storno:0 },
    { sellerId: 1,sellerName : "Ann",sellerAddress : "cím1",sellerTaxNumber : "11111111-1-11", buyerId: 2,buyerName : "Géza",buyerAddress:"cím3",buyerTaxNumber: "33333333-3-33", billNumber: 5, created: `${dateString}`, payDay: `${dateString}`, deadline: `${deadLineDateString}`, total: 50000, afa: 27 , storno:0},
    { sellerId: 1,sellerName : "Ann",sellerAddress : "cím1",sellerTaxNumber : "11111111-1-11", buyerId: 2,buyerName : "Géza",buyerAddress:"cím3",buyerTaxNumber: "33333333-3-33", billNumber: 6, created: `${dateString}`, payDay: `${dateString}`, deadline: `${deadLineDateString}`, total: 60000, afa: 27 , storno:0},
    { sellerId: 1,sellerName : "Ann",sellerAddress : "cím1",sellerTaxNumber : "11111111-1-11", buyerId: 3,buyerName : "Laci",buyerAddress:"cím4",buyerTaxNumber: "44444444-4-44", billNumber: 7, created: `${dateString}`, payDay: `${dateString}`, deadline: `${deadLineDateString}`, total: 70000, afa: 27 , storno:0},
    { sellerId: 1,sellerName : "Ann",sellerAddress : "cím1",sellerTaxNumber : "11111111-1-11", buyerId: 3,buyerName : "Laci",buyerAddress:"cím4",buyerTaxNumber: "44444444-4-44", billNumber: 8, created: `${dateString}`, payDay: `${dateString}`, deadline: `${deadLineDateString}`, total: 180000, afa: 27 , storno:0},
    { sellerId: 1,sellerName : "Ann",sellerAddress : "cím1",sellerTaxNumber : "11111111-1-11", buyerId: 3,buyerName : "Laci",buyerAddress:"cím4",buyerTaxNumber: "44444444-4-44", billNumber: 9, created: `${dateString}`, payDay: `${dateString}`, deadline: `${deadLineDateString}`, total: 90000, afa: 27 , storno:0},
];

if (getBills() == 0 && getBuyers() == 0 && getSellers() == 0) {
    for (const seller of sellers) saveSeller(seller.name, seller.address, seller.taxNumber);
    for (const buyer of buyers) saveBuyer(buyer.name, buyer.address, buyer.taxNumber);
    for (const bill of bills) saveBill(bill.sellerId,bill.sellerName, bill.sellerAddress, bill.sellerTaxNumber, bill.buyerId,bill.buyerName, bill.buyerAddress, bill.buyerTaxNumber, bill.billNumber, bill.created, bill.payDay, bill.deadline, bill.total, bill.afa, bill.storno);
}