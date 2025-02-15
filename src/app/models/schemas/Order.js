import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
    {
        user: {
            id: {
                type: String,
                required: true
            },

            name: {
                type: String,
                required: true
            }
        },

        products: [
            {
                id: {
                    type: Number,
                    required: true
                },

                name: {
                    type: String,
                    required: true
                },

                price: {
                    type: Number,
                    required: true
                },

                category: {
                    type: String,
                    required: true
                },

                url: {
                    type: String,
                    required: true
                },

                quantity: {
                    type: Number, // Alterado para Number, pois quantidade deve ser numérica
                    required: true
                }
            }
        ],

        status: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true // Correto: Agora está na posição certa
    }
);

export default mongoose.model("Order", OrderSchema);
