const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://rodrigo:nses100@cluster0.sm4jhb5.mongodb.net/articlebook?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB
