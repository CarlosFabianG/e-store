import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './controllers/categories/categories.controller';
import { ProductsController } from './controllers/products/products.controller';
import { UsersController } from './controllers/users/users.controller';
import { CustomersController } from './controllers/customers/customers.controller';
import { BrandsController } from './controllers/brands/brands.controller';
import { OrdersController } from './controllers/orders/orders.controller';

@Module({
  imports: [],
  controllers: [AppController, CategoriesController, ProductsController, UsersController, CustomersController, BrandsController, OrdersController],
  providers: [AppService],
})
export class AppModule {}
