import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

export const DatabaseConfig = MongooseModule.forRoot(process.env.MONGO_URI);