import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            requiered: true,
        }
    },
    {
        timestamps: true,
    }
);

export const CategoryModel = mongoose.model('Cateogry', CategorySchema);