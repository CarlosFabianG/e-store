import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';

@Controller('products')
export class ProductsController {

    @Get()
    getProducts(){
        return `These are all the products`
    }

    @Get(':id')
    getProduct(@Param('id') id: string){
        return `This is the product ${id}`
    }

    @Post()
    createProduct(@Body() payload : any){
        return {
            message: 'Product created',
            payload
        }
    }

    @Put(':id')
    updateProduct(@Param(':id') id: string, @Body() payload: any){
        return {
            id,
            payload
        }
    }

    @Delete(':id')
    deleteProduct(@Param('id') id: string){
        return `Product ${id} was deleted`
    }

}
