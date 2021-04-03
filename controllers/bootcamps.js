const BootCamp = require("../models/Bootcamp");

// @desc   Get all bootcamps
// @route  GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, msg: "Show all bootcamps" });
};

// @desc   Get single bootcamps
// @route  GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Show bootcamp ${req.params.id}`,
    });
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
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({
        status: true,
        msg: `Updating bootcamp ${req.params.id}`,
    });
};

// @desc   Delete a bootcamp
// @route  DELETE /api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({
        status: true,
        msg: `Deleting bootcamp ${req.params.id}`,
    });
};
