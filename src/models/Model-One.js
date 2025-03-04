import { model, Schema } from 'mongoose';

const modelOneSchema = Schema(
  {
    firstName: { type: String, default: '' },
    lastName: { type: String, default: '' },
    email: { type: String, default: '' },
    phoneNumber: { type: String, default: '' },
    city: { type: String, default: '' },
    currentBusiness: { type: String, default: '' },
    preferredBrand: { type: String, default: '' },
    investmentRange: { type: String, default: '' },
    message: { type: String, default: '' },
    ipAddress: { type: String, default: '' },
  },
  {
    timestamps: true,
  }
);

const ModelOne = model('info', modelOneSchema);

export default ModelOne;
