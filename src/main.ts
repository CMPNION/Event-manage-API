import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
      .setTitle("Документация Aitusa Event")
      .setDescription("API для управления мероприятиями")
      .setVersion("1.0")
      .addBearerAuth(
          {
              type: "http",
              scheme: "bearer",
              bearerFormat: "JWT",
              in: "header",
              "x-tokenName": "Authorization",
          },
          "Authorization",
      )
      .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup("api/docs", app, document, {
      swaggerOptions: {
          persistAuthorization: true,
      },
  });

  app.enableCors()

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
