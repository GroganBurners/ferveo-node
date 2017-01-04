var lineItem = { 
    desc: { type: String, required: true },
    vatRate: { type: Number, required: false, default: 0 },
    vatTotal: { type: Number, required: false, default: 0 },
    total: { type: Number, required: true }
}

module.exports = lineItem
