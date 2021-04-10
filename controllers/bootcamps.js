const BootCamp = require("../models/Bootcamp");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");

// @desc   Get all bootcamps
// @route  GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = asyncHandler(async (req, res, next) => {
    const bootcamps = await BootCamp.find();
    res.status(200).json({ status: true, result: bootcamps });
});

// @desc   Get single bootcamps
// @route  GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = asyncHandler(async (req, res, next) => {
    const bootcamp = await BootCamp.findById(req.params.id);
    if (!bootcamp) {
        return next(
            new ErrorResponse(
                `Bootcamp not found with id: ${req.params.id}`,
                404,
            ),
        );
    }
    return res.status(200).json({ status: true, result: bootcamp });
});

// @desc   Create new bootcamp
// @route  POST /api/v1/bootcamps
// @access Private
exports.createBootcamp = asyncHandler(async (req, res, next) => {
    const bootcamp = await BootCamp.create(req.body);
    res.status(201).json({ success: true, result: bootcamp });
});

// @desc   Update bootcamp
// @route  PUT /api/v1/bootcamps/:id
// @access Private
exports.updateBootcamp = asyncHandler(async (req, res, next) => {
    const bootcamp = await BootCamp.findByIdAndUpdate(req.params.id, req.body);
    if (!bootcamp) {
        return res.status(400).json({ status: false });
    }
    return res.status(200).json({ status: true, result: bootcamp });
});

// @desc   Delete a bootcamp
// @route  DELETE /api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
    const bootcamp = await BootCamp.findByIdAndDelete(req.params.id);
    if (!bootcamp) {
        return res.status(400).json({ status: false });
    }
    return res.status(200).json({ status: true });
});
