
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductsController } from "./controller/products.controller";
import { ProductsEntity } from "./models/products.entity";
import { ProductsService } from "./service/products.service";
// import { ProductsController } from "./products.controller";
// import { ProductsService } from "./products.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([ProductsEntity])
    ],
    controllers: [ProductsController],
    providers: [ProductsService],
})

export class ProductsModule {}