

const Bus = require('../models/Bus');

exports.busInfo = async (req, res) => {

try{
    const buses = await Bus.find();
    res.json(buses);
} catch (error) {
    res.status(500).json({ message: error.message });
}

}