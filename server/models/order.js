import mongoose, { Schema } from 'mongoose'

const OrderSchema = new Schema ({
    userId: {
        type: String,
        required: true,
        trim: true,
        index: true
    }
}, {collection: 'order'})

OrderSchema.index({userId: 1})

export default mongoose.model('Order', OrderSchema)

