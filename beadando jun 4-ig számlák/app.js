import express from 'express'
import * as db from "./util/database.js"
import cors from "cors"

const PORT = 3000;
const app = express();
app.use(express.json());

app.use(cors());

app.get("/buyers", (req, res) => {
    try {
        const buyers = db.getBuyers();
        res.status(200).json(buyers);
    }
    catch (err) {
        res.status(500).json({ message: `${err}` });
    }
})

app.get("/buyers/taxNumbers", (req, res) => {
    try {
        const taxNumbers = db.getBuyerTaxNumbers();
        res.status(200).json(taxNumbers);
    }
    catch (err) {
        res.status(500).json({ message: `${err}` });
    }
})

app.post("/buyers", (req, res) => {
    try {
        const { name, address, taxNumber } = req.body;
        if (!name || !address || !taxNumber) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const savedBuyer = db.saveBuyer(name, address, taxNumber);
        if (savedBuyer.changes != 1) {
            return res.status(501).json({ message: "Buyer save falied" });
        }
        res.status(201).json({ id: savedBuyer.lastInsertRowid, name, address, taxNumber });
    }
    catch (err) {
        res.status(500).json({ message: `${err}` });
    }
})

app.put("/buyers/:id", (req, res) => {
    try {
        const { name, address, taxNumber } = req.body;
        if (!name || !address || !taxNumber) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const id = +req.params.id;
        const updatedBuyer = db.updateBuyer(id, name, address, taxNumber);
        if (updatedBuyer.changes != 1) {
            return res.status(501).json({ message: "Buyer update falied" });
        }
        res.status(200).json({ id, name, address, taxNumber });
    }
    catch (err) {
        res.status(500).json({ message: `${err}` });
    }
})

app.delete("/buyers/:id", (req, res) => {
    try {
        const id = +req.params.id;
        const deletedBuyer = db.deleteBuyer(id);
        if (deletedBuyer.changes != 1) {
            return res.status(501).json({ message: "Buyer delete falied" });
        }
        res.status(200).json({ message: "Delete succesful" });
    }
    catch (err) {
        res.status(500).json({ message: `${err}` });
    }
})

app.get("/sellers", (req, res) => {
    try {
        const sellers = db.getSellers();
        res.status(200).json(sellers);
    }
    catch (err) {
        res.status(500).json({ message: `${err}` });
    }
})

app.get("/sellers/taxNumbers", (req, res) => {
    try {
        const taxNumbers = db.getSellerTaxNumbers();
        res.status(200).json(taxNumbers);
    }
    catch (err) {
        res.status(500).json({ message: `${err}` });
    }
})


app.post("/sellers", (req, res) => {
    try {
        const { name, address, taxNumber } = req.body;
        if (!name || !address || !taxNumber) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const savedSeller = db.saveSeller(name, address, taxNumber);
        if (savedSeller.changes != 1) {
            return res.status(501).json({ message: "Seller save falied" });
        }
        res.status(201).json({ id: savedSeller.lastInsertRowid, name, address, taxNumber });
    }
    catch (err) {
        res.status(500).json({ message: `${err}` });
    }
})

app.put("/sellers/:id", (req, res) => {
    try {
        const { name, address, taxNumber } = req.body;
        if (!name || !address || !taxNumber) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const id = +req.params.id;
        const updatedSeller = db.updateSeller(id, name, address, taxNumber);
        if (updatedSeller.changes != 1) {
            return res.status(501).json({ message: "Seller update falied" });
        }
        res.status(200).json({ id, name, address, taxNumber });
    }
    catch (err) {
        res.status(500).json({ message: `${err}` });
    }
})

app.delete("/sellers/:id", (req, res) => {
    try {
        const id = +req.params.id;
        const deletedSeller = db.deleteSeller(id);
        if (deletedSeller.changes != 1) {
            return res.status(501).json({ message: "Seller delete falied" });
        }
        res.status(200).json({ message: "Delete succesful" });
    }
    catch (err) {
        res.status(500).json({ message: `${err}` });
    }
})

app.get("/bills", (req, res) => {
    try {
        const bills = db.getBills();
        res.status(200).json(bills);
    }
    catch (err) {
        res.status(500).json({ message: `${err}` });
    }
})

app.post("/bills", (req, res) => {
    try {
        const { sellerId,sellerName,sellerAddress,sellerTaxNumber, buyerId,buyerName,buyerAddress,buyerTaxNumber, billNumber, created, payDay, deadline, total, afa, storno } = req.body;
        if (!sellerId ||!sellerName || !sellerAddress || !sellerTaxNumber || !buyerId || !buyerName || !buyerAddress || !buyerTaxNumber || !billNumber || !created || !payDay || !deadline || !total || !afa ||storno == null) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const savedBill = db.saveBill(sellerId,sellerName,sellerAddress,sellerTaxNumber, buyerId,buyerName,buyerAddress,buyerTaxNumber, billNumber, created, payDay, deadline, total, afa, storno);

        if (savedBill.changes != 1) {
            return res.status(501).json({ message: "Bill save falied" });
        }
        res.status(201).json({ id: savedBill.lastInsertRowid, sellerId,sellerName,sellerAddress,sellerTaxNumber, buyerId,buyerName,buyerAddress,buyerTaxNumber, billNumber, created, payDay, deadline, total, afa, storno});
    }
    catch (err) {
        res.status(500).json({ message: `${err}` });
    }
})

app.put("/bills/:id", (req, res) => {
    try {
        const { sellerId,sellerName,sellerAddress,sellerTaxNumber, buyerId,buyerName,buyerAddress,buyerTaxNumber, billNumber, created, payDay, deadline, total, afa, storno} = req.body;
        if ((!sellerName || !sellerAddress || !sellerTaxNumber ||  !buyerName || !buyerAddress || !buyerTaxNumber || !billNumber || !created || !payDay || !deadline || !total || !afa ||storno == null)) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const id = +req.params.id;
        const updatedBill = db.updateBill(id, sellerId,sellerName,sellerAddress,sellerTaxNumber, buyerId,buyerName,buyerAddress,buyerTaxNumber, billNumber, created, payDay, deadline, total, afa, storno);
        if (updatedBill.changes != 1) {
            return res.status(501).json({ message: "Bill update falied" });
        }
        res.status(200).json({ id, sellerId,sellerName,sellerAddress,sellerTaxNumber, buyerId,buyerName,buyerAddress,buyerTaxNumber, billNumber, created, payDay, deadline, total, afa, storno });
    }
    catch (err) {
        res.status(500).json({ message: `${err}` });
    }
})

app.delete("/bills/:id", (req, res) => {
    try {
        const id = +req.params.id;
        const deleteBill = db.deleteBill(id);
        if (deleteBill.changes != 1) {
            return res.status(501).json({ message: "Bill delete falied" });
        }
        res.status(200).json({ message: "Delete succesful" });
    }
    catch (err) {
        res.status(500).json({ message: `${err}` });
    }
})


app.listen(PORT, () => {
    console.log(`Server fut a ${PORT}-on`);
})