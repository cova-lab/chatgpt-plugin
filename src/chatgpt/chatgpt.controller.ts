import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';
import { ChatgptService } from './chatgpt.service';

@Controller('chatgpt')
export class ChatgptController {
  constructor(private readonly chatGPTService: ChatgptService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  generateResponse(@Body('prompt') prompt: string) {
    return this.chatGPTService
      .generateResponse(prompt)
      .pipe(
        map((response: AxiosResponse) => response.data.choices[0].text.trim()),
      );
  }
}
