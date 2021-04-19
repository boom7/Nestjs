import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { from, Observable } from "rxjs";
import { Repository } from "typeorm";
import { ProductI } from "../models/products.interface";
import { ProductsEntity } from "../models/products.entity";


@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductsEntity)
        private productsRepository: Repository<ProductsEntity>
    ) {}

    insertProduct(products: ProductI): Observable<ProductI> {
        return from(this.productsRepository.save(products));
    }
    
    getProducts(): Observable<ProductI[]> {
        return from(this.productsRepository.find());
    }
}