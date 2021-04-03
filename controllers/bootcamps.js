const BootCamp = require("../models/Bootcamp");

// @desc   Get all bootcamps
// @route  GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = async (req, res, next) => {
    try {
        const bootcamps = await BootCamp.find();
        res.status(200).json({ status: true, result: bootcamps });
    } catch (error) {
        res.status(400).json({ status: false });
    }
};

// @desc   Get single bootcamps
// @route  GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await BootCamp.findById(req.params.id);
        if (!bootcamp) {
            return res.status(400).json({ status: false });
        }
        return res.status(200).json({ status: true, result: bootcamp });
    } catch (error) {
        res.status(400).json({ status: false });
    }
};

// @desc   Create new bootcamp
// @route  POST /api/v1/bootcamps
// @access Private
exports.createBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await BootCamp.create(req.body);
        res.status(201).json({ success: true, result: bootcamp });
    } catch (error) {
        res.status(400).json({ success: false, msg: error.message });
    }
};

// @desc   Update bootcamp
// @route  PUT /api/v1/bootcamps/:id
// @access Private
exports.updateBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await BootCamp.findByIdAndUpdate(
            req.params.id,
            req.body,
        );
        if (!bootcamp) {
            return res.status(400).json({ status: false });
        }
        return res.status(200).json({ status: true, result: bootcamp });
    } catch (error) {
        res.status(400).json({ status: false });
    }
};

// @desc   Delete a bootcamp
// @route  DELETE /api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await BootCamp.findByIdAndDelete(req.params.id);
        if (!bootcamp) {
            return res.status(400).json({ status: false });
        }
        return res.status(200).json({ status: true });
    } catch (error) {
        return res.status(400).json({ status: false });
    }
};
