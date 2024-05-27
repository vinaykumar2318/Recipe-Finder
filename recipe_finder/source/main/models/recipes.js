import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
    RecipeName: String,
    Ingredients: String,
    PrepTimeInMins: Number,
    Votes: Number,
    URL : String
})

const recipeModel = mongoose.model("indianrecipes",recipeSchema)
export default recipeModel