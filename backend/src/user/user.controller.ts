import {UserService} from "./user.service";
import {Body, Controller, Post} from "@nestjs/common";
import {Prisma} from "@prisma/client";

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Post()
  async createNewUser(@Body() newUserData: Prisma.UserCreateInput) {
    await this.userService.createUser(newUserData)
    return `Pomyślnie dodano użytkownika o adresie email: ${newUserData.email} oraz nazwie: ${newUserData.login}`

  }
}
