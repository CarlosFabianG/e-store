import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get()
    getUsers(){
        return {
            data: "These are all the users"
        }
    }

    @Get(':id')
    getUser(@Param('id') id: number){
        return {
            data: `This is the product ${id}`
        }
    }

    @Post()
    createUser(@Body() payload: any){
        return {
            message: "User was created",
            payload
        }
    }

    @Put(':id')
    updateUser(@Param('id') id: any, @Body() payload: any ){
        return {
            id,
            payload
        }
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string){
        return {
            message: `User ${id} was deleted`
        }
    }
}
