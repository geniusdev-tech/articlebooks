const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://rodrigo:Nses100@x.xlnsedo.mongodb.net/?retryWrites=true&w=majority&appName=x", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })

    console.log(`MongoDB Connected: True`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB
