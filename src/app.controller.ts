import { Get, Controller, Res, Render } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {
  @Get()
  root(@Res() res: Response) {
    return res.render('index', {
      message: 'Hello world!!!!',
    });
  }
}
