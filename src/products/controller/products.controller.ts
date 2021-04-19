import { Body, Controller, Get, Param, Post, Patch, Delete } from "@nestjs/common";
import { Observable } from "rxjs";
import { ProductI } from "../models/products.interface";
import { ProductsService } from "../service/products.service";

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Post()
    addProduct(@Body() product: ProductI
    ): Observable<ProductI> {
        return this.productsService.insertProduct(product);
    }

    @Get()
    getAllProducts(): Observable<ProductI[]> {
        return this.productsService.getProducts();
    }
}