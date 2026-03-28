import { connectDB } from "../config/db.js";
import Property from "../models/Property.js";

// @desc    Get all properties
// @route   GET /api/properties
export const getProperties = async (req, res) => {
  try {
    // await connectDB();
    const { type, category, city, minPrice, maxPrice } = req.query;

    let filter = {};

    if (type) filter.type = type;
    if (category) filter.category = category;
    if (city) filter["location.city"] = { $regex: city, $options: "i" };
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    const properties = await Property.find(filter)
      .populate("owner", "name email phone avatar")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: properties.length,
      properties,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get single property
// @route   GET /api/properties/:id
export const getProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id).populate(
      "owner",
      "name email phone avatar",
    );

    if (!property) {
      return res.status(404).json({
        success: false,
        message: "Property not found",
      });
    }

    res.status(200).json({
      success: true,
      property,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Create property
// @route   POST /api/properties
export const createProperty = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      location,
      type,
      category,
      area,
      bedrooms,
      bathrooms,
      images,
    } = req.body;

    const property = await Property.create({
      title,
      description,
      price,
      location,
      type,
      category,
      area,
      bedrooms,
      bathrooms,
      images,
      owner: req.user._id,
    });

    res.status(201).json({
      success: true,
      property,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Update property
// @route   PUT /api/properties/:id
export const updateProperty = async (req, res) => {
  try {
    let property = await Property.findById(req.params.id);

    if (!property) {
      return res.status(404).json({
        success: false,
        message: "Property not found",
      });
    }

    // Check Owner Exist or not
    if (property.owner.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to update this property",
      });
    }

    property = await Property.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      property,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Delete property
// @route   DELETE /api/properties/:id

export const deleteProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({
        success: false,
        message: "Property not found",
      });
    }
    if (property.owner.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to delete this property",
      });
    }

    await Property.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Property deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Toggle favourite
// @route   POST /api/properties/:id/favourite
export const toggleFavourite = async (req, res) => {
  try {
    const user = req.user;
    const propertyId = req.params.id;

    const isFavourite = user.favourites.includes(propertyId);

    if (isFavourite) {
      user.favourites = user.favourites.filter(
        (id) => id.toString() !== propertyId,
      );
    } else {
      user.favourites.push(propertyId);
    }

    await user.save();

    res.status(200).json({
      success: true,
      favourites: user.favourites,
      message: isFavourite ? "Removed from favourites" : "Added to favourites",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
