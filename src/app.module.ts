import { Module } from '@nestjs/common';
import { ChatgptModule } from './chatgpt/chatgpt.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ChatgptModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
